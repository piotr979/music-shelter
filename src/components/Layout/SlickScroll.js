import { useState, useEffect } from "react";
import ImageThumb from "../UI/ImageThumb"
import useHttp from "../../hooks/use-http"
const SlickScroll = (props) => {

    let artistsIds = [ 112025, 112026, 112027, 112028, 112029, 112030, 112031, 112032 ];
    const [artists, setArtists] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);

    const setPlaceholders = () => {
        let placeholders = [];
        
        // 1. fill with empty values
    for (let i = 0; i < 8; i++) {
        placeholders.push({
            id: i,
            name:'',
            image: '',
            label: '',
            country: '',
        })
    }
    setArtists(placeholders);
}
     // 2. load all data at once
    
       
    const getArtist = artistsData => {

        const newArtists = artistsData.map( artist => {
            const art = artist.artists[0];
            return {
            
                id: art.idArtist,
                name: art.strArtist,
                image: art.strArtistThumb,
                label: art.strLabel,
                country: art.strCountry
            }
        })
        let currentArtists = artists;

       setArtists( ...currentArtists, newArtists);
       console.log(newArtists);
       setIsLoaded(true);
    }
    
    const { isLoading, error, sendRequest: fetchArtist } = useHttp(
        { url: `https://theaudiodb.com/api/v1/json/2/artist.php?i=`,
          values: artistsIds
    },
        getArtist)

    useEffect( () => {
        fetchArtist();
       }, [])
    const images = isLoaded ? ( artists.map( item => (
        <img src={item.image} />
    ))
    )
    : (artists.map ( item => (
        ( <p>Text</p> )
    )))
      
    

    return (
        <div className="row">
            <div className="col">
            { 
                images
            }
            </div>
        </div>
    )
}

export default SlickScroll;