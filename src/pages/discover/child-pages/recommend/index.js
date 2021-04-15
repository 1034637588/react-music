import React, { memo } from 'react';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

import MBanner from './components/banner';
import MAlbum from './components/album';
import MHot from './components/hot';
import MRanking from './components/ranking';

function Recommend(props) {

  return (
    <RecommendWrapper>
      <MBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <MHot />
          <MAlbum />
          <MRanking />
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
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
