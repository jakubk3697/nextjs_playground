import { Hero } from "@/components/Hero";
import { server } from "@/config";
import axios from "axios";

type moviesProps = {
  movies: {
    name: string;
  }
}

export default function Home({ movies }: moviesProps) {
  console.log(movies);
  return (
    <>
      <Hero />
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