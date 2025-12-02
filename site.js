/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Wyatt's Top 8 Movies",
            owner: "Wyatt Bedor",
            github: "https://github.com/Wyatt987/Vue-v2"
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      },
      getMonthText(dateArray) {
            switch (dataArray[0]) {
            case 1:
                  return "January"
            case 2:
                  return "February"
            case 3:
                  return "March"
            case 4:
                  return "April"
            case 5:
                  return "May"
            case 6:
                  return "June"
            case 7:
                  return "July"
            case 8:
                  return "August"
            case 9:
                  return "September"
            case 10:
                  return "October"
            case 11:
                  return "November"
            case 12:
                  return "December"
            }
      },
      like(index) {
            this.movies[index].likes += 1
      },
      dislike(index) {
            this.movies[index].dislikes += 1
      }
})

vue_app.mount("#vue_app")
