import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './../../assets/scss/layout/FeaturedArtist.module.scss';
import dummyThumb from './../../assets/images/dummy-thumb.webp'
const FeaturedArtist = () => {

    const [artist, setArtist ] = useState({});

    const getArtist = artistData => {
        let art = artistData.artists[0];
        setArtist( {
            id: art.idArtist,
            name: art.strArtist,
            image: art.strArtistThumb,
            label: art.strLabel,
            country: art.strCountry
        })
    }
    const { isLoading, error, sendRequest: fetchArtist} = useHttp( {
        url: 'https://theaudiodb.com/api/v1/json/2/artist.php?i=112024'
    }, getArtist);

   useEffect( () => {
    fetchArtist()
   }, [])
   
    return (
        <div className="row gx-md-5 mt-4">
            <div className="col col-md-6 text-center text-md-end">
            
            <a href="artist" id={artist.id}><img src={
                isLoading ? dummyThumb : artist.image} 
                className={`${classes['artist-thumb']}`} 
                alt="Featured artist" 
            />
            </a>
            </div>
            <div className="col col-md-6">
            <h3 className="fs-1 mt-4 fw-bold text-center">{ isLoading ? 'Loading...' : artist.name }</h3>
            <p className="text-faded fw-bold text-center">{ isLoading ? 'Loading...' : `${artist.label} ${artist.country}` }</p>
            </div>
        </div>
    )
}

export default FeaturedArtist;