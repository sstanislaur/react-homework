import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import Album from "../Album/Album";

const Albums = () => {
    const [albums, SetAlbums] = useState([])


    useEffect(() => {
        albumService.getAll().then(value => value.data).then(value => SetAlbums(value))
    }, [])


    return (

        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;