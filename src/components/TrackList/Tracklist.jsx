import PropTypes from "prop-types";
import "./Tracklist.css";

import Track from "../Track/Track";

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
    return (
        <div className="TrackList">
            {tracks.map((track) => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}
                    />
                );
            })}
        </div>
    );
};

Tracklist.propTypes = {
    tracks: PropTypes.array.isRequired,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    isRemoval: PropTypes.bool.isRequired,
};

export default Tracklist;
