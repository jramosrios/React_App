import React, { useState } from 'react'

export const Album = (props) => {

    const [albumsSold, setAlbumsSold] = useState(props.albumSales)

    return (
        <div>
            <h2>Album: {props.albumName}</h2>
            <h2>Artist: {props.bandName}</h2>
            <h2>Release Year: {props.releaseYear}</h2>
            <h2>Genre: {props.genre}</h2>
            <h2>Albums Sold: {albumsSold}</h2>
            <button onClick={() => setAlbumsSold(albumsSold + 1)} >Buy this album</button>
        </div>
    )
}
