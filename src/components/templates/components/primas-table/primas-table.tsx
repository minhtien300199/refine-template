import { useCustom } from '@pankod/refine';
import React from 'react';
import styles from './primastable.module.scss';

export interface PrimasTableProps {
  prop?: string;
}

export function PrimasTable({prop = 'default value'}: PrimasTableProps) {
  return <div className={styles.primastable}>primas-table {prop}</div>;
}
