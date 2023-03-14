import { Suspense } from "react";
import TodosList from "./todos/TodosList";

const Home = () => {
    return (
        <>
            <Suspense fallback={<p>Loading the Todos...</p>}>
                <div className="flex space-x-2">
                    {/* @ts-igone */}
                    <TodosList />
                </div>
            </Suspense>
            <Suspense fallback={<p>Loading something else...</p>}>
                <div className="flex space-x-2">
                    {/* @ts-igone */}
                    <TodosList />
                </div>
            </Suspense>
        </>
    );
}

export default Home;