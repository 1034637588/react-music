import * as actionTypes from './ationTypes';

import { 
    getTopBanners,
    getHotRecommends,
    getTopList
  } from '@/services/api/recommendAPI';

// 修改state的Action 轮播图数据
const changeTopBannerAction = (payLoad) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    payLoad
});

export const getTopBannerAction = () => {
    return dispatch => {
      getTopBanners().then(res => {
        dispatch(changeTopBannerAction(res.banners));
      })
    }
};

// 热门推荐数据
const changeHotRecommendAction = (payLoad) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  payLoad
});

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res=>{
      dispatch(changeHotRecommendAction(res.result))
    })
  }
}