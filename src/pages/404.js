import Link from 'next/link';
import classnames from 'classnames';

import styles from './error404.module.scss';

export default function Custom404() {
  return (
    <main className={classnames(styles.Error404)}>
      <h1 className={classnames(styles.title)}>Sorry, Page Not Found</h1>
      <h4 className={classnames(styles.subtitle)}>
        It looks like you are lost... To return to the home page{' '}
        <Link href="/">
          <a className={classnames(styles.link)}>click here</a>
        </Link>
        .
      </h4>
    </main>
  );
}
