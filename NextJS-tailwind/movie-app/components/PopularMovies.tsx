type Movies = {
    movies: object[];
}

export const PopularMovies = ({ movies }: Movies) => {
    console.log({ movies });

    return (
        <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
            <h1 className="text-white text-2xl mt-8 mb-5">Popular</h1>
            {movies.map((movie: any) => {
                return (
                    <div key={movie.id} className="">
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="w-1/2" />
                        <h1 className="text-white text-lg">{movie.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}