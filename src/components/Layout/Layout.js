import classnames from 'classnames';

import styles from './Layout.module.scss';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import { GtmScript } from '@/utils/analytics';

function Layout({ children }) {
  return (
    <>
      <GtmScript consent={true} />

      <Header />
      <div className={classnames(styles.Layout)}>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {};

export default Layout;
