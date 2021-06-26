import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

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

export default function MovieCredits({movie, credit}) {
//const MovieCredits = ({ movie }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Card className={classes.card}>
        <CardActions disableSpacing>
          <Paper component="ul" className={classes.root}>
            <li>
              <Chip label="Cast" className={classes.chip} color="primary" />
            </li>
          {movie.cast.map((g) => (
            <Link to={`/credits/${g.credit_id}`}>
              <Button variant="outlined" size="medium" color="primary">
                <table>
                <li key={g.name}>
                  <Chip label={g.name} className={classes.chip} />
                  <Chip label={g.character} className={classes.chip} />
                </li>
                </table>
              </Button>
            </Link>
          ))}
          </Paper>
        </CardActions>
      </Card>
           <Paper component="ul" className={classes.root}>
             <li>
               <Chip label="Crew" className={classes.chip} color="primary" />
             </li>
               {movie.crew.map((g) => (
             <li key={g.name}>
                <Chip label={g.name} className={classes.chip} />
             </li>
                ))}
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
}