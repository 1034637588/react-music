import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actionCreator';

function Recommend(props) {

  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }),shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      Recommend {topBanners.length}
    </div>
  )
}
export default memo(Recommend);
// const { getBanners, topBanners } = props;
// const mapStateToProps = state => ({ topBanners: state.recommend.topBanners });
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
