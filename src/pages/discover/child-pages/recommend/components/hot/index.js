import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';
import {
    HotRecommendWrapper
} from './style';
import RcmHeader from '@/components/rcm-header';
import SongsCover from '@/components/songs-cover';

export default memo(function MHot() {

    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.recommend.get('hotRecommends')
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommendAction(8));
    }, [dispatch]);


    return (
        <HotRecommendWrapper>
            <RcmHeader title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
            <div className="recommend-list">
                {
                    hotRecommends.map((item, index) => {
                        return <SongsCover key={item.id} info={item} />
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
