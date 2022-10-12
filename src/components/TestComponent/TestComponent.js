import { memo } from 'react';
import classnames from 'classnames';

import styles from './TestComponent.module.scss';

function TestComponent({ className }) {
  return <div className={classnames(styles.TestComponent, className)}>TestComponent component</div>;
}

export default memo(TestComponent);
