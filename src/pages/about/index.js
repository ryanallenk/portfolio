import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function About({ className }) {
  return (
    <main className={classnames(styles.About, className)}>
      <Head title="About" />

      <h1>About Page</h1>
    </main>
  );
}

About.defaultProps = {};

export default memo(About);
