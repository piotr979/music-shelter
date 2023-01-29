import { useState, useReducer } from "react";
import DataContext from "./data-context";

const defaultFavState = {
    favoriteArtists: []
}

const favReducer = (state, action) => {

    const existingFavs = state.favoriteArtists;
    if (action.type === "ADD") {

        // check if it exists
        const existingItemIndex = state.favoriteArtists.findIndex(
            (item) => item.id === action.item.id
        )
        const existingItem = state.favoriteArtists[existingItemIndex];
        if (existingItem) {
            return
            } else {
                const newArrayOfFavs = [...existingFavs, action.item];
                console.log(newArrayOfFavs);
            return {
                    favoriteArtists: newArrayOfFavs
                }
            }
    }

    if (action.type === "REMOVE") {
       
            const newArrayOfFavs = state.favoriteArtists.filter ( (item) => 
                item.id !== action.id
            )
            console.log(newArrayOfFavs);
            return {
                favoriteArtists: [...newArrayOfFavs]
            
        }
    }
    return defaultFavState;
}
const DataProvider = (props) => {

    const [favState, dispatchFavAction] = useReducer(favReducer, defaultFavState)

    const addToFavHandler = (item) => {
        dispatchFavAction({ type: "ADD", item: item })
    }
    const removeFromFavHandler = (id) => {
        dispatchFavAction({ type: "REMOVE", id: id })
    }
    const dataContext = {
        removeFromFav: removeFromFavHandler,
        favoriteArtists: favState.favoriteArtists,
        addToFav: addToFavHandler
       
    }
    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;