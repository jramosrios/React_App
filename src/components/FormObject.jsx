import React, { useState } from 'react';

const FormObject = (props) => {
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1930,
        genre: ''
    })

    const handleAlbum = (e) => {
        // console.log('Event Target Name', e.target.name)
        // console.log('Event Target Value', e.target)
        setAlbum({ ...album, [e.target.name]: e.target.value })
    }

    const createAlbum = (e) => {
        e.preventDefault()

        console.log('Album', album)
        setAlbum({
            albumName: '',
            artist: '',
            releaseYear: 1930,
            genre: ''
        })

    }
    return (
        <div>
            <form onSubmit={createAlbum} >
                <label htmlFor="albumName">Album Name: </label>
                <input type="text" value={album.albumName} onChange={handleAlbum} name='albumName' />

                <label htmlFor="releaseYear">Release Year: </label>
                <input type="number" value={album.releaseYear} onChange={handleAlbum} name='releaseYear' />

                <label htmlFor="artist">Artist : </label>
                <input type="text" value={album.artist} onChange={handleAlbum} name='artist' />

                <label htmlFor="genre">Genre: </label>
                <input type="text" value={album.genre} onChange={handleAlbum} name='genre' />

                <button>Add album!</button>
            </form>

            <div>
                <p>Album Name: {album.albumName}</p>
                <p>Release Year: {album.releaseYear}</p>
                <p>Artist: {album.artist}</p>
                <p>Genre: {album.genre}</p>
            </div>

        </div>
    )
}

export default FormObject;