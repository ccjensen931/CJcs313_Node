const OMDBApikey = process.env.OMDBApikey;
const baseURL = "http://www.omdbapi.com/?apikey=" + OMDBApikey +"&";

function getMovies(searchString) {
    $.get(baseURL + "s=" + searchString, function(searchResults) {
        console.log(searchResults);
    })
}