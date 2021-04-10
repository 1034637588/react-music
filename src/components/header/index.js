import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { headerLinks } from '@/common/local-data';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import styles from './style.module.scss';
export default memo(function Header() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink activeClassName={styles.active} to={item.link}>
                    {item.title}
                    <i className={`${styles.icon} sprite_01`}></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    return (
        <div className={styles.HeaderWrapper}>
            <div className={`${styles.content} wrap-v1`}>
                <div className={styles.HeaderLeft}>
                    <a href="#/" className={`${styles.logo} sprite_01`}>网易云音乐</a>
                    <div className={styles['select-list']}>
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className={styles['select-item']}>
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.HeaderRight}>
                    <Input className={styles.search} placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className={styles.center}>创作者中心</div>
                    <div>登录</div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    )
})
