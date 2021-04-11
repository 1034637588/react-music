import * as actionTypes from './ationTypes';

const defaultState = {
    topBanners: []
}

function reducer(state = defaultState, action) {
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state, topBanners: action.payLoad}
        default:
            return state;
    }
}

export default reducer;