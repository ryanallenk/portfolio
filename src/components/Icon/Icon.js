import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './Icon.module.scss';

import Star from '@/assets/svgs/star.svg';

const icons = {
  star: Star
};

function Icon({ className, name }) {
  let Icon = icons[name];
  return <Icon className={classnames(styles.Icon, className)}></Icon>;
}

Icon.defaultProps = {
  name: 'star'
};

export default memo(Icon);
