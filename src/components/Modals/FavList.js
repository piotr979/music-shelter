import React, { useContext } from "react"
import DataContext from "../../store/data-context";
import FavListItem from "./FavListItem";

const FavList = () => {

    const favCtx = useContext(DataContext);

    const remove = (id) => {
        favCtx.removeFromFav(id);
    }
    return (
        <React.Fragment>
        
        {
            favCtx.favoriteArtists.map( (item) => (
                <FavListItem removeFromFav={remove} item={item} />
         ))
        }
        
        </React.Fragment>
    )
}

export default FavList;
