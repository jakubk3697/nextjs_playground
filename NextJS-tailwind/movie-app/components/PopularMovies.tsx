import { MovieCard } from "./MovieCard";

type Movies = {
    movies: object[];
}

export const PopularMovies = ({ movies }: Movies) => {

    return (
        <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4 flex-wrap">
            <h1 className="text-white text-2xl mt-8 mb-5">Popular</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {movies.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}