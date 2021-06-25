import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveMustWatch = (e) => {
    e.preventDefault();
    context.removeMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from must watch"
      onClick={handleRemoveMustWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveMustWatchIcon;