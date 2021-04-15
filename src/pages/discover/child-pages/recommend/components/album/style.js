import styled from 'styled-components';
export const AlbumWarpper = styled.div`
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }
`;
export const AlbumBox = styled.div`
    width:94%;
    height:180px;

    .albums-warpper{
        height:180px;
        display: flex !important;;
        justify-content: space-between;
    }
    .albums-item{
        width: 23%;
        height: 180px;
    }
`;