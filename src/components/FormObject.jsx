import React, { useState } from 'react';
import './form.css'
const FormObject = (props) => {
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1930,
        genre: ''
    })
    const [error, setError] = useState('')
    const [albumList, setAlbumList] = useState([])

    const handleAlbum = (e) => {
        // console.log('Event Target Name', e.target.name)
        // console.log('Event Target Value', e.target)
        setAlbum({ ...album, [e.target.name]: e.target.value })
    }

    const createAlbum = (e) => {
        e.preventDefault();
        if (album.albumName.length < 3 || album.artist.length < 5 || album.releaseYear < 1930 || album.genre.length < 3) {
            setError('Fill in the form correctly')
        }
        else {
            setError('')
            // console.log('Album', album)

            setAlbumList([...albumList, album])

            setAlbum({
                albumName: '',
                artist: '',
                releaseYear: 1930,
                genre: ''
            })
        }
    }
    return (
        <div>
            <form onSubmit={createAlbum} >
                {
                    error ?
                        <p>{error}</p> :
                        null
                }
                <label htmlFor="albumName">Album Name: </label>
                <input type="text" value={album.albumName} onChange={handleAlbum} name='albumName' />
                {
                    album.albumName.length < 3 && album.albumName.length > 0 ?
                        <p>Album must be at least 3 characters</p> :
                        null
                }

                <label htmlFor="releaseYear">Release Year: </label>
                <input type="number" value={album.releaseYear} onChange={handleAlbum} name='releaseYear' />
                {
                    album.releaseYear < 1930 ?
                        <p>Release year must be over 1930</p> :
                        null
                }

                <label htmlFor="artist">Artist : </label>
                <input type="text" value={album.artist} onChange={handleAlbum} name='artist' />
                {
                    album.artist.length < 5 ?
                        <p>Artist must be at least 5 characters long</p> :
                        null
                }


                <label htmlFor="genre">Genre: </label>
                <input type="text" value={album.genre} onChange={handleAlbum} name='genre' />
                {
                    album.genre.length < 3 ?
                        <p>Genre must be at least 3 characters</p> :
                        null
                }

                <button>Add album!</button>
            </form>

            <div>
                <p>Album Name: {album.albumName}</p>
                <p>Release Year: {album.releaseYear}</p>
                <p>Artist: {album.artist}</p>
                <p>Genre: {album.genre}</p>
            </div>

            {
                albumList && albumList.length > 0 ?
                    albumList.map((a) => (
                        <div>
                            <p>{a.albumName}</p>
                            <p>{a.artist}</p>
                            <p>{a.genre}</p>
                            <p>{a.releaseYear}</p>
                        </div>
                    )) :
                    null
            }

        </div>
    )
}

export default FormObject;