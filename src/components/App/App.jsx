import { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((searchTerm) => {
    Spotify.search(searchTerm).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => {
      if (prevTracks.some((savedTrack) => savedTrack.id === track.id)) return prevTracks;
      return [...prevTracks, track];
    });
  }, []);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then((success) => {
        if (success) {
          setPlaylistName("New Playlist");
          setPlaylistTracks([]);
          alert(`${playlistName} has been saved to your Spotify`)
        }
      })
      .catch((error) => {
        console.error("Error saving playlist:", error);
      });
  }, [playlistName, playlistTracks]);

  return (
    <>
      <h1>
        Jammming
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </>
  );
};

export default App;
