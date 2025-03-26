// Next js also support nested Route.
// in the routing page name alwas page.js or page.tsx
"use client"
import { useRouter } from "next/navigation"


export default function About() {
    const router = useRouter();

    return (
        <div>
            <h1>About us</h1>
            <button 
            onClick={() => router.push("/")}
            className=" bg-blue-500 text-black p-2 rounded-md"> Go Home </button>
        </div>
    );

}