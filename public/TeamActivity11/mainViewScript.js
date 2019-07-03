const OMDBApikey = "f28d89c8"; //process.env.OMDBApikey;
const baseURL = "http://www.omdbapi.com/?apikey=" + OMDBApikey +"&";

function getMovies(searchString) {
    $.get(baseURL + "s=" + searchString, function(searchResults) {
        let table = '<table><thead><tr><th>Title</th><th>Year</th><th></th></tr></thead><tbody>';
        searchResults.Search.forEach(element => {
            table += '<tr><td>' + element.Title + '</td><td>' + element.Year 
                + '</td><td><button type="button" class="btn btn-primary detailsButton" id="'
                + element.imdbID + '">View Details</button></td></tr>';
        });
        table += '</tbody></table>';

        $(".searchResults").append(table);

        $(".detailsButton").click(function() {
            let movieID = $(this).attr("id");
            let parentRow = $(this).parent().parent();
            
            $.get(baseURL + "i=" + movieID, function(movieResult) {
                let details = '<ul class="list-group"><li class="list-group-item">Rated: ' + movieResult.Rated
                    + '</li><li class="list-group-item">Released: ' + movieResult.Released 
                    + '</li><li class="list-group-item">Runtime: ' + movieResult.Runtime 
                    + '</li><li class="list-group-item">Genre: ' + movieResult.Genre
                    + '</li><li class="list-group-item">Plot: ' + movieResult.Plot
                    + '</li><img src="' + movieResult.Poster + '" alt="' + movieResult.Title + '"</ul>';

               parentRow.append(details);
            })
        });
    });
}