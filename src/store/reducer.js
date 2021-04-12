import { combineReducers } from 'redux';
import { reducer as recommend } from '../pages/discover/child-pages/recommend/store'

const reducer = combineReducers({
    recommend
});

export default reducer;