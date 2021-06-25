import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader";
import AuthProvider from "./contexts/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/top_rated" component={TopRatedMoviesPage} />
              <Route exact path="/movies/now_playing" component={NowPlayingMoviesPage} />
              <PrivateRoute path="/movies/must_watch" component={MustWatchMoviesPage} />
              <Route exact path="/movies/:id/similar" component={SimilarMoviesPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));