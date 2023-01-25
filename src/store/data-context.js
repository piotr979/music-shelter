import React from 'react';

const DataContext = React.createContext( {
    featuredArtists: (artists) => {}
})

export default DataContext;