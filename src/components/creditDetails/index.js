import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const CreditDetails = ({ movie, credit }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <Paper component="ul" className={classes.root}>
        <Chip label={`Dept.: ${credit.department}`} />
        <Chip label={`Part: ${credit.credit_type}`} />
        <Chip label={`Job: ${credit.job}`} />
    </Paper>

    <Paper component="ul" className={classes.root}>
        <Chip label={`Media.id: ${credit.media.id}`} />
        <Chip label={`Media.name: ${credit.media.name}`} />
        <Chip label={`Original Name: ${credit.media.original_name}`} />
        <Chip label={`Character: ${credit.media.character}`} />
      </Paper>

    <Paper component="ul" className={classes.root}>
      <Chip label={`Media_type: ${credit.media_type}`} />
      <Chip label={`Credit Id: ${credit.credit_id}`} />
    </Paper>

    <Paper component="ul" className={classes.root}>
      <Chip label={`Person's name: ${credit.person.name}`} />
      <Chip label={`Person's id: ${credit.person.id}`} />
    </Paper>
    
    <Fab
      color="secondary"
      variant="extended"
      onClick={() =>setDrawerOpen(true)}
      className={classes.fab}
      >
          <NavigationIcon />
          Reviews
    </Fab>
    <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <MovieReviews movie={movie} />
    </Drawer>
    </>
  );
};
export default CreditDetails ;