export const AddArtwork = artwork=>{
    return {
      type: 'ADD_ARTWORK',
      artwork: artwork
    }

}
export const AddArtworks = artworks =>{
    return {
        type: 'ADD_ARTWORK',
        artworks: artworks
    }
}

export const DeleteArtWork = id =>{
    return {
        type: 'DELETE_ARTWORK',
        id: id
    }

}

export const FetchArtworks = (artworks) =>{
    return {
        type: 'FETCH_IMAGES',
        artworks: artworks
    }
}