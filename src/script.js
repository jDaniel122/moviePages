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
            movieList.append('<div class="col-md-4 mb-4"><div class="card"><div class="card-body"><h5 class="card-title">' + movie.title + '</h5> <img src="'+ movie.img +'"></img><p class="card-text">' + movie.year + '</p><a href="movie_detail.html" class="btn btn-primary stretched-link">Ver Detalles</a></div></div></div>');
        });
    };
    // Función para mostrar los detalles de una película
    function displayMovieDetails() {
        var movieDetails = $('#movieDetails');
        // Obtener el ID de la película de la URL (simulado)
        var movieId = 1; // Simulación: obtén el ID de la película de la URL
        var movie = movies[movieId];
        movieDetails.empty();
        movieDetails.append('<h2>' + movie.title + '</h2><p>Año: ' + movie.year + '</p><p>Director: ' + movie.director + '</p><p>Sinopsis: ' + movie.synopsis + '</p>');
    };
    // Mostrar lista de películas en la página inicial
    displayMovies();
    // Mostrar detalles de película al hacer clic en "Ver Detalles"
    $('#movieList').on('click', '.btn', function() {
        displayMovieDetails();
    });
});