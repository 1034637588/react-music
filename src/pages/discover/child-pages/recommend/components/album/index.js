import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import RcmHeader from '@/components/rcm-header';
import AlbumCover from '@/components/album-cover';
import { getNewAlbumAction } from '../../store/actionCreators';
import {
    AlbumBox,
    AlbumWarpper
} from './style';

export default memo(function MAlbum(props) {
    const dispatch = useDispatch();
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.recommend.get("newAlbums")
    }), shallowEqual);

    const pageRef = useRef();

    useEffect(() => {
        dispatch(getNewAlbumAction());
    }, []);

    return (
        <>
            <RcmHeader title="新碟上架" />
            <AlbumWarpper>
                <button className="arrow arrow-left sprite_02"
                    onClick={e => pageRef.current.prev()}></button>
                <AlbumBox>
                    <Carousel dots={false} autoplay ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="albums-warpper">
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return <AlbumCover key={iten.id}
                                                    info={iten}
                                                    size={100}
                                                    width={118}
                                                    bgp="-570px" />
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </AlbumBox>
                <button className="arrow arrow-right sprite_02"
                    onClick={e => pageRef.current.next()}></button>
            </AlbumWarpper>
        </>
    )
})
