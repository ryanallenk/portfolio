import { getStoryblokApi, useStoryblokState } from '@storyblok/react';
import classnames from 'classnames';

import styles from './project.module.scss';

import Head from '@/components/Head/Head';

export default function Project({ story, preview }) {
  story = useStoryblokState(story, {}, preview);
  const { content } = story;

  return (
    <main className={classnames(styles.Storyblok)}>
      <Head title={content.name} />
      <h1>{content.name}</h1>
    </main>
  );
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    starts_with: 'PAGE_TYPE/',
    version: 'published'
  });

  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === '/projects') {
      return;
    }

    const slug = data.links[linkKey].slug.replace('PAGE_TYPE/', '');

    paths.push({ params: { slug: slug } });
  });

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }) {
  let slug = params.slug;

  let sbParams = {
    version: 'published'
  };

  if (preview) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/PAGE_TYPE/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false
    },
    revalidate: 3600
  };
}
