import { Hero } from "@/components/Hero";

type moviesProps = {
  movies: {
    name: string;
  }
}

export default function Home({movies}: moviesProps) {
  console.log(movies);
  return (
    <>
      <Hero/>
    </>
  )
}

export async function getStaticProps() {
  const movies = [{name: 'hello'}];

  return {
    props: {movies},
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1