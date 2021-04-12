import * as actionTypes from './ationTypes';

import { 
    getTopBanners,
    getHotRecommends,
    getTopList
  } from '@/services/api/recommendAPI';

// 修改state的Action
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
