import { useCallback } from 'react';
import PropTypes from 'prop-types';

import "./Playlist.css";

import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ onNameChange, playlistTracks, onRemove, onSave }) => {
    const handleNameChange = useCallback(
        (e) => {
            onNameChange(e.target.value);
        },
        [onNameChange]
    );

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist
                tracks={playlistTracks}
                isRemoval={true}
                onRemove={onRemove}
            />
            <button className="Playlist-save" onClick={onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

Playlist.propTypes = {
    onNameChange: PropTypes.func.isRequired,
    playlistTracks: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Playlist;