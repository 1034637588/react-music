import React, { memo } from 'react';

import styles from './style.module.less';
export default memo(function Header() {
    return (
        <div className={styles.HeaderWrapper}>
            Header
        </div>
    )
})
