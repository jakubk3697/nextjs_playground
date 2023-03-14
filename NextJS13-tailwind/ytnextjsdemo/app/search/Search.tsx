'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Search = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>
        ) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter the search term"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
        </form>
    );
}

export default Search;