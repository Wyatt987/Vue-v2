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
            smallTitle: "IMDB + Wyatt's Top 8 Movies",
            owner: "Wyatt Bedor",
            github: "https://github.com/Wyatt987/Vue-v2"
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText(dateArray) {
            const monthNum = dateArray[1]
            const day = dateArray[2]
            const year = dateArray[0]
            let monthText = ""
            switch (monthNum) {
            case 1:
                  monthText = "January"
            case 2:
                  monthText = "February"
            case 3:
                  monthText = "March"
            case 4:
                  monthText = "April"
            case 5:
                  monthText = "May"
            case 6:
                  monthText = "June"
            case 7:
                  monthText = "July"
            case 8:
                  monthText = "August"
            case 9:
                  monthText = "September"
            case 10:
                  monthText = "October"
            case 11:
                  monthText = "November"
            case 12:
                  monthText = "December"
            }
            return `${monthText} ${day}, ${year}`
      },
      like(index) {
            movies[index].likes ++
      },
      dislike(index) {
            movies[index].dislikes ++
      },
      posterClick(index) {
            let movie = this.movies[index]
            movie.posterindex ++
      }
      
})

vue_app.mount("#vue_app")
