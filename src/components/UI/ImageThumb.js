import { useContext, useEffect, useState } from 'react';
import classes from '../../assets/scss/ui/ImageThumb.module.scss';
import DataContext from '../../store/data-context';

const ImageThumb = (props) => {

    const [isAddFavButtonClicked, setFavButtonClicked] = useState(false);
    const [isInTheFavorites, setIsInTheFavorites] = useState(false);
    const favCtx = new useContext(DataContext);
    // check if props.id is already in the favCtx.favoriteArtists(id:)

    useEffect( () => {
    
        const index = favCtx.favoriteArtists.findIndex( item => 
            props.id === item.id
        );
        console.log(index);
        if (index >= 0) {
            console.log(index);
            setIsInTheFavorites(true);
            console.log(isInTheFavorites);
        }
    }, [favCtx.favoriteArtists])

   

    let buttonClasses="btn btn-sm mt-3 mb-4";

    const addToFav = () => {
        setFavButtonClicked(true);
        const timer = setTimeout(() => {
           setFavButtonClicked(false);
        },1500 );
       // setFavButtonClicked(false);
        favCtx.addToFav(props.item);
        return () => {
        clearTimeout(timer);
        }

    }
    return ( 
        <div className="col-6 col-md-4 col-lg-3 text-center">
            <a href={`/artist/${props.id}`} >
                <img src={props.image} className={classes.image} alt="music item" />
            </a>
            <button 
                onClick={addToFav} 
                className={isAddFavButtonClicked || isInTheFavorites ?  `${buttonClasses} btn-secondary ` : `${buttonClasses} btn-outline-primary `}
                disabled={ (props.disabled || isAddFavButtonClicked || isInTheFavorites ) && 'disabled'}>

                    { isAddFavButtonClicked ? 'Adding...' : isInTheFavorites ?  'Already in ' : 'Add to fav' }
                </button>
                {
     isInTheFavorites ? <p>It is</p> : <p>Not</p>
                }
        </div>
    )
}
export default ImageThumb;