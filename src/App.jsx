import { lazy, Suspense } from "react";

const Awanish = lazy(() => import("./Components/intro"));
const Project = lazy(() => import("./Components/project/projects"));
const Lang = lazy(() => import("./Components/lang"));
const Contact = lazy(() => import("./Components/contact"));

// Simple spinner component
function Spinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
        </div>
    );
}

export default function App() {
    return (
        <section className="discription sm:w-2/3 sm:float-right">
            <Suspense fallback={<Spinner />}>
                <Awanish />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <Project />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <Lang />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <Contact />
            </Suspense>
        </section>
    );
}
