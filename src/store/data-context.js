import React from 'react';

const DataContext = React.createContext( {
    favArtists: [],
    featuredArtists: (artists) => {},
    addToFav: (item) => {}
})

export default DataContext;