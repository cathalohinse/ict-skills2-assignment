import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const AddMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddMustWatch = (e) => {
    e.preventDefault();
    context.addMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to watch list" onClick={handleAddMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddMustWatchIcon;