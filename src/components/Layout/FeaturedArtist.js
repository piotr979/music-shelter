import { useEffect, useState, useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './../../assets/scss/layout/FeaturedArtist.module.scss';
import dummyThumb from './../../assets/images/dummy-thumb.webp'
const FeaturedArtist = () => {

    const [artist, setArtist ] = useState({});

    const getArtist = artistData => {
        let art = artistData.artists[0];
        console.log(art);
        setArtist( {
            id: art.idArtist,
            name: art.strArtist,
            image: art.strArtistThumb
        })
    }
    const { isLoading, error, sendRequest: fetchArtist} = useHttp(getArtist);

   useEffect( () => {
    fetchArtist()
   }, [])
   
    return (
        <div className="row gx-md-5 mt-4">
            <div className="col col-md-6 text-center text-md-end">
            <img src={
                isLoading ? dummyThumb : artist.image} 
                className={`${classes['artist-thumb']}` } 
            />
            </div>
            <div className="col col-md-6">
            <h3 className="fs-1 mt-4 fw-bold text-center">{ isLoading ? 'Loading...' : artist.name }</h3>
            </div>
        </div>
    )
}

export default FeaturedArtist;