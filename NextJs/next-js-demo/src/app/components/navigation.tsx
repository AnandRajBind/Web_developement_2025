// Route handlers allow you to create custom request handlers for your application .
// Unlike page routes  qhich respond with HTML content route handles allow you to create RESTful endpoints.
// Gives you full control over the response without the need for a separate backend setup.
// perfect for handling everything from form  submissions  and database queries to secure interactions with third-party APIs.

"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton,UserButton,SignedIn, SignedOut } from '@clerk/nextjs';

export const Navigation =()=>{
    const pathname = usePathname();
    return(
    <nav className='flex justify-center items-center p-4'> 
        <Link href="/" className={pathname === "/"? 'font-bold mr-4': 'text-blue-800 mr-4'}>
        Home
        </Link>
        <Link href="/about" className={pathname === "/about"? 'font-bold mr-4': 'text-blue-800 mr-4'}>
        About
        </Link>
        <Link href="/Product/1" className={pathname === "/Product/1"? 'font-bold mr-4': 'text-blue-800 mr-4'}>
        Product 1
        </Link>
        <SignedOut>
        <SignInButton mode='modal'/>
        </SignedOut>
        <SignedIn>
        <UserButton/>
        </SignedIn>   
        </nav>
    )
}