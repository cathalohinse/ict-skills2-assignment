# Assignment - ReactJS app.

Name: Cathal Henchy  
Student Number: 20091405

## Overview.

An interactive film app to obtain information & reviews on films.  
The new features of this app that I implemented as part of the ICT Skills II Assignment are as follows:

 + Upcoming Films
 + Favourite Films
 + Top Rated Films
 + Films that are now playing in local cinemas
 + 'Must Watch' Films
 + Similar Films
 + Search Feature

## Setup requirements.

N/A

## API Data Model.

+ Top Rated Films: https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1  
{  
    page: 1,  
    results: [  
        {  
            adult: false,  
            backdrop_path: "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",  
            genre_ids: [  
                35,  
                18,  
                10749  
                ],  
            id: 19404,  
            original_language: "hi",  
            original_title: "दिलवाले दुल्हनिया ले जायेंगे",  
            overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",  
            popularity: 15.724,  
            poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",  
            release_date: "1995-10-20",  
            title: "Dilwale Dulhania Le Jayenge",  
            video: false,  
            vote_average: 8.7,  
            vote_count: 3048  
        }  
    ],  
    total_pages: 447,  
    total_results: 8936  
}  
+ Similar Films: https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1  
{  
    page: 1,  
    results: [  
        {  
            adult: false,  
            backdrop_path: "/nGVe984XESYhn5V5zspqQexPekA.jpg",  
            genre_ids: [  
                53,  
                80,  
                18  
                ],  
            id: 1213,  
            title: "The Talented Mr. Ripley",  
            original_language: "en",  
            original_title: "The Talented Mr. Ripley",  
            overview: "Tom Ripley is a calculating young man who believes it's better to be a fake somebody than a real nobody. Opportunity knocks in the form of a wealthy U.S. shipbuilder who hires Tom to travel to Italy to bring back his playboy son, Dickie. Ripley worms his way into the idyllic lives of Dickie and his girlfriend, plunging into a daring scheme of duplicity, lies and murder.",  
            popularity: 14.567,  
            poster_path: "/6ojHgqtIR41O2qLKa7LFUVj0cZa.jpg",  
            release_date: "1999-12-25",  
            video: false,  
            vote_average: 7.191,  
            vote_count: 2446  
        }  
    ],  
    total_pages: 500,  
    total_results: 10000  
}
+ Now Playing: https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1  
{  
    dates: {  
        maximum: "2021-07-24",  
        minimum: "2021-06-06"  
        },  
        page: 1,  
        results: [  
            {  
                adult: false,  
                backdrop_path: "/8s4h9friP6Ci3adRGahHARVd76E.jpg",  
                genre_ids: [  
                    16,  
                    35,  
                    10751,  
                    878  
                ],  
                id: 379686,  
                original_language: "en",  
                original_title: "Space Jam: A New Legacy",  
                overview: "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",  
                popularity: 9054.455,  
                poster_path: "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",  
                release_date: "2021-07-08",  
                title: "Space Jam: A New Legacy",  
                video: false,  
                vote_average: 7.8,  
                vote_count: 1185  
            }  
        ],  
        total_pages: 58,  
        total_results: 1144  
}
+ Credits: https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>  
{  
    id: 19404,  
    cast: [  
        {  
            adult: false,  
            gender: 2,  
            id: 35742,  
            known_for_department: "Acting",  
            name: "Shah Rukh Khan",  
            original_name: "Shah Rukh Khan",  
            popularity: 7.186,  
            profile_path: "/iAr3NRkU9KuPX7jI9ePPeq7zVsc.jpg",  
            cast_id: 1,  
            character: "Raj Malhotra",  
            credit_id: "52fe47d69251416c750a71a1",  
            order: 0  
        }  
    ],  
    crew: [  
        {  
            adult: false,  
            gender: 1,  
            id: 8311,  
            known_for_department: "Crew",  
            name: "Farah Khan",  
            original_name: "Farah Khan",  
            popularity: 2.268,  
            profile_path: "/zsOx5FJKsws1SUw53hHRAaOlwvY.jpg",  
            credit_id: "57a3054a9251417c57000d7a",  
            department: "Crew",  
            job: "Choreographer"  
        }  
    ]  
}
+ Cast member's previous films: https://api.themoviedb.org/3/credit/{movie_id}?api_key=<<api_key>>  
{  
    credit_type: "cast",  
    department: "Acting",  
    job: "Actor",  
    media: {  
        adult: false,  
        backdrop_path: "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",  
        genre_ids: [  
                35,  
                18,  
                10749  
            ],  
        id: 19404,  
        original_language: "hi",  
        original_title: "दिलवाले दुल्हनिया ले जायेंगे",  
        overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",  
        poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",  
        release_date: "1995-10-20",  
        title: "Dilwale Dulhania Le Jayenge",  
        video: false,  
        vote_average: 8.7,  
        vote_count: 3048,  
        popularity: 15.724,  
        character: "Raj Malhotra"  
    },  
    media_type: "movie",  
        id: "52fe47d69251416c750a71a1",  
        person: {  
        adult: false,  
        known_for: [  
            {  
                media_type: "movie",  
                id: 19404,  
                vote_average: 8.7,  
                overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",  
                release_date: "1995-10-20",  
                popularity: 17.118,  
                vote_count: 3044,  
                adult: false,  
                backdrop_path: "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",  
                video: false,  
                genre_ids: [  
                    35,  
                    18,  
                    10749  
                ],  
                title: "Dilwale Dulhania Le Jayenge",  
                original_language: "hi",  
                original_title: "दिलवाले दुल्हनिया ले जायेंगे",  
                poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"  
            },  
            {  
                media_type: "movie",  
                id: 26022,  
                vote_average: 8.1,  
                overview: "Rizwan Khan, a Muslim from the Borivali section of Mumbai, has Asperger's syndrome. He marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX who treat him as a terrorist because of his condition and his race.",  
                release_date: "2010-02-11",  
                popularity: 17.451,  
                vote_count: 880,  
                adult: false,  
                backdrop_path: "/xuqgovav0bbzwxzSg9K0RcEzLPj.jpg",  
                video: false,  
                genre_ids: [  
                    18,  
                    10749  
                ],  
                title: "My Name Is Khan",  
                original_language: "hi",  
                original_title: "My Name Is Khan",  
                poster_path: "/5Y36lCiNyyV71mjq6LavgiggbhT.jpg"  
            },  
            {  
                media_type: "movie",  
                id: 10757,  
                title: "Kabhi Khushi Kabhie Gham",  
                overview: "Rahul, the adoptive son of business magnate Yash Raichand, feels eternal gratitude to his father for rescuing him from a life of poverty. Yet, when Yash forbids his love of poor Anjali, Rahul marries her and moves to London with new wife and sister-in-law, breaking the heart of his mother. Ten years later, Rahul's younger brother comes to London intent on brokering peace between father and son.",  
                release_date: "2001-12-14",  
                popularity: 9.553  
                vote_count: 362,  
                adult: false,  
                backdrop_path: "/fBfKjZ3xPQ9dgpd8XOcVtOLt17s.jpg",  
                vote_average: 7.8,  
                genre_ids: [  
                    35,  
                    18  
                ],  
                video: false,  
                original_language: "hi",  
                original_title: "कभी ख़ुशी कभी ग़म",  
                poster_path: "/lRl7wrJmkOzMTDVYFSIpUcsIjPQ.jpg"  
            }  
        ],  
        id: 35742,  
        gender: 2,  
        known_for_department: "Acting",  
        profile_path: "/iAr3NRkU9KuPX7jI9ePPeq7zVsc.jpg",  
        name: "Shah Rukh Khan",  
        popularity: 7.186  
    }  
}


## App Design.

### Component catalogue.

![][stories]

### UI Design.

![][viewTopRated]
>Shows all of the Top Rated Films as per TMDB Ratings

![][viewNowPlaying]
>Shows all of the Films currently on show at the cinema

![][viewSimilar]
>Shows all Films that are similar to the one selected

![][viewFurtherInfo]
>Redirects the user to the external official site of the selected film

![][viewMoreInfo]
>This view has been updated to now access and render more information from the API

![][viewLogin]
>The Login Screen which the user is redirected to the first time they attempt to access either of the private routes (Must Watch Films & Favourites)

![][viewMustWatch]
>Shows the collection of all 'Must Watch' films, as previously selected by the user

![][viewCredits]
>Shows the Credits (Cast & Crew) of the selected film

![][viewCredit]
>Shows the Personal Details of the selected Cast/Crew member

### Routing.

+ Public Route: Top Rated
  + exact path="/movies/top_rated"
  + component={TopRatedMoviesPage}
  + Returns all top rated films that are contained at the associated TMDB API Endpoint
+ Public Route: Now Playing
  + exact path="/movies/now_playing"
  + component={NowPlayingMoviesPage}
  + Returns all currently screened films that are retrieved from the associated TMDB API Endpoint
+ PrivateRoute: Must Watch Films
  + path="/movies/must_watch"
  + component={MustWatchMoviesPage}
  + Returns all 'Must Watch' films, as specified by the user on the 'Upcoming Movies' screen
+ Public Route: Similar Films
  + exact path="/movies/:id/similar"
  + component={SimilarMoviesPage}
  + Returns all films similar to the film selected by the user, as defined at the associated TMDB API Endpoint
+ Public Route: Film Credits
  + path="/moviecredits/:id"
  + component={MovieCreditsPage}
  + Returns the Credits (Cast & Crew) of the selected film
+ Public Route: Cast/Crew Member Personal Details
  + path="/credits/:id"
  + component={CreditsPage}
  + Returns the personal details of the selected Cast/Crew member
+ Public Route: Search
  + path="/search"
  + component={SearchPage}
  + Returns the search results for the specified film
+ Public Route: Login
  + path="/login"
  + component={LoginPage}
  + Returns the login page for both above mentioned authenticated routes (Must Watch & Favourites)

## Independent learning (If relevant).

N/A


[viewTopRated]: ./viewTopRated.png
[viewNowPlaying]: ./viewNowPlaying.png
[viewSimilar]: ./viewSimilar.png
[viewFurtherInfo]: ./viewFurtherInfo.png
[viewMoreInfo]: ./viewMoreInfo.png
[viewLogin]: ./viewLogin.png
[viewMustWatch]: ./viewMustWatch.png
[viewCredits]: ./viewCredits.png
[viewCredit]: ./viewCredit.png
[stories]: ./storybook2.png