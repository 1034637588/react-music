import { Map } from 'immutable';

import * as actionTypes from './ationTypes';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.payLoad);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.payLoad);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.payLoad);
        default:
            return state;
    }
}

export default reducer;