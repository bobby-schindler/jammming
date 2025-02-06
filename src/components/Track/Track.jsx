import { useCallback } from "react";
import PropTypes from "prop-types";

import "./Track.css";

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
    const addTrack = useCallback(
        () => {
            onAdd(track);
        },
        [onAdd, track]
    );

    const removeTrack = useCallback(
        () => {
            onRemove(track);
        },
        [onRemove, track]
    );

    const renderAction = () => {
        if (isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className="Track-action" onClick={addTrack}>
                +
            </button>
        );
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

Track.propTypes = {
    track: PropTypes.object.isRequired,
    isRemoval: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Track;