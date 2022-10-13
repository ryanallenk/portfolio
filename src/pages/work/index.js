import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react';
import classnames from 'classnames';

import styles from './project.module.scss';

import Head from '@/components/Head/Head';

export default function Work({ story }) {
  story = useStoryblokState(story);
  return (
    <main className={classnames(styles.storyblok)}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "Ryan's Portfolio"}</h1>
      </header>
      <StoryblokComponent blok={story.content} />
    </main>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'work';

  // load the draft version
  let sbParams = {
    version: 'draft' // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600 // revalidate every hour
  };
}
