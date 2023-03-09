import { Hero } from "@/components/Hero";
import { PopularMovies } from "@/components/PopularMovies";
import { server } from "@/config";
import axios from "axios";

export type HomeProps = {
  movies: {
    page: number;
    results: object[];
    total_pages: number;
    total_results: number;
  }
}

export default function Home({ movies }: HomeProps) {
  return (
    <>
      <Hero />
      <PopularMovies movies={movies.results} />
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`${server}movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);

  return {
    props: {
      movies: res.data
    }
  }
}