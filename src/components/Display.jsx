import React, { useState } from 'react';

const Display = (props) => {
    console.log(props)
    const { albumList, setAlbumList } = props

    const toggleCheckbox = (album) => {
        const updatedAlbums = albumList.map((al) => {
            if (album === al) {
                al.isExplicit = !al.isExplicit
            }
            return al
        })
        setAlbumList(updatedAlbums)
    }

    const deleteAlbum = (album) => {
        const updatedAlbums = albumList.filter((al) => album !== al)
        setAlbumList(updatedAlbums)
    }

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
                            <input type="checkbox" name='isExplicit' checked={a.isExplicit} onChange={() => toggleCheckbox(a)} />
                            {
                                a.isExplicit ?
                                    <p>🔫</p> :
                                    null
                            }
                            <button onClick={() => deleteAlbum(a)} >Delete album</button>
                        </div>
                    )) :
                    null
            }
        </div>
    )
}

export default Display;