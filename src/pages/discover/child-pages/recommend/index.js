import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopBannerAction } from './store/actionCreator'

function Recommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div>
      Recommend {topBanners.length}
    </div>
  )
}

const mapStateToProps = state => ({ topBanners: state.recommendReducer.topBanners });
const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
