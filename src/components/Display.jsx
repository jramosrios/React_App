import React, { useState } from 'react';

const Display = (props) => {
    console.log(props)
    const { albumList } = props
    return (
        <div>
            {
                albumList && albumList.length > 0 ?
                    albumList.map((a, idx) => (
                        <div key={idx}>
                            <p>Album Name: {a.albumName}</p>
                            <p>Artist: {a.artist}</p>
                            <p>Genre: {a.genre}</p>
                            <p>Release Year: {a.releaseYear}</p>
                        </div>
                    )) :
                    null
            }
        </div>
    )
}

export default Display;