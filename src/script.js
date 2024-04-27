$(document).ready(function() {
    // Simulación de datos de películas (sustituye con tu propio dataset)
    var movies = [
        { id: 1, title: "Gato con botas", resena: "un gato con botas, nada nuevo", sipnosis: "Es un gato que se puso unas botas de gucci y se volvio re ganozo", actores: ["sapo1", "sapo2"], img: "../public/img/cartelera/gato_con_botas.jpg", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        { id: 2, title: "Película 2", resena: "", sipnosis: "Director 2", actores: [], img: "", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        { id: 3, title: "Película 3", resena: "", sipnosis: "Director 1", actores: [], img: "", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        { id: 4, title: "Película 4", resena: "", sipnosis: "Director 1", actores: [], img: "", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        { id: 5, title: "Película 5", resena: "", sipnosis: "Director 1", actores: [], img: "", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        { id: 6, title: "Película 6", resena: "", sipnosis: "Director 1", actores: [], img: "", description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"},
        // Agrega más películas según sea necesario
    ];
    // Función para mostrar la lista de películas en la página inicial
    function displayMovies() {
        var movieList = $('#movieList');
        //movieList.empty();

        $.each(movies, function(index, movie) {
            movieList.append('<div class="col-md-4 mb-4"><div class="card"><div class="card-body"><h5 class="card-title">' + movie.title + '</h5> <img style="height: 350px; width: 300px;"src="'+ movie.img +'"></img><p class="card-text">' + movie.resena + '</p><a href="movie_detail.html?id='+ movie.id +'" class="btn btn-primary stretched-link">Ver Detalles</a></div></div></div>');
        });
    };
    // Función para mostrar los detalles de una película
    // Obtener el ID de la película de la URL
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var movieId = urlParams.get('id');
    // Usar el ID de la película para obtener la información de la película correspondiente
    var movie = movies.find(function(movie) {
        return movie.id === parseInt(movieId);
    });
    // Mostrar los detalles de la película en la página
    if (movie) {
        // Aquí puedes mostrar la información de la película en la página, por ejemplo:
        $('#movieDetails').append('<h2>' + movie.title + '</h2><p>Sipnosis: ' + movie.sipnosis + '</p><p>Actores: ' + movie.actores.join(', ') + '</p>');
    } else {
        $('#movieDetails').append('<p>La película no se encontró.</p>');
    }
    // Mostrar lista de películas en la página inicial
    displayMovies();
});