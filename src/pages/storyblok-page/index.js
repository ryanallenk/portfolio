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

export async function getStaticProps({ preview = false }) {
  let slug = 'PAGE_SLUG';

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
