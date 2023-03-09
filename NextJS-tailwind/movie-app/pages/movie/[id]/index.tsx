import axios from 'axios';
import { server } from '@/config';
import Image from 'next/image';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import Meta from '@/components/Meta';

type Genre = {
    id: number;
    name: string;
}

export default function Movie({ movie }: any) {
    console.log(movie);
    return (
        <div className="container max-w-4xl mx-auto pt-6">
            <Meta title={movie.title} />
            <div className="px-3">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    width={1000}
                    height={600}
                    alt={movie.title}
                    className="rounded-t-md"
                />
                <h1 className="font-bold text-xl my-2">{movie.title}</h1>
                <p>{movie.overview}</p>
                <p className="mt-5 text-gray-600 text-sm">
                    Genres:
                    <span className="font-bold">{movie.genres.map((genre: Genre) => genre.name).join(', ')}</span>
                </p>
                <p>
                    Release Date:
                    <span className="font-bold">{movie.release_date}</span>
                </p>
            </div>
        </div>
    )
}

export async function getStaticProps(context: any) {
    const { id } = context.params;
    const res = await axios.get(`${server}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
    const movie = res.data;

    return {
        props: { movie }
    }
}


export async function getStaticPaths() {
    const res = await axios.get(`${server}movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
    const movies = res.data.results;

    const ids = movies.map((movie: any) => movie.id);
    const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

    return {
        paths: paths,
        fallback: false
    }
}
