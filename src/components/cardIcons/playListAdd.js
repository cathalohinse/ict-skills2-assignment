import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handlePlaylistAdd = (e) => {
    e.preventDefault();
    context.playlistAdd(movie);
  };
  return (
    <IconButton aria-label="add to watch list" onClick={handlePlaylistAdd}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAddIcon;