 "use client"
import { Link } from "@mui/material"
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";


export function Navbar () {
    const [dropDown, setDropDown] = useState(false);
    const toggleMenu =()=>{
        setDropDown(!dropDown)
    }
    return(
        <main className="bg-gray-100 shadow shadow-gray-300 w-full">
            <div className="h-15 flex justify-between items-center px-5">
                <h1 className="text-3xl font-bold text-blue-500">Edgestack</h1>
                <ul className="hidden md:flex gap-8 text-sm font-semibold">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/enroll"><li>Enroll</li></Link>
                    <Link href="/dashboard/student-list"><li>student-list</li></Link>
                    <Link href="/dashboard/profile"><li>profile</li></Link>
                </ul>
                <Link href="/auth/login">
                <div className="hidden w-20 md:h-10 md:rounded md:shadow md:text-white md:flex justify-center items-center bg-blue-500">
                    <p>sign up</p>
                </div>
                </Link>
                <div className="block md:hidden">
                    <IoIosMenu onClick={toggleMenu} className="text-3xl"/>
                </div>
            </div>
            {dropDown &&(
            <div className="flex flex-col gap-2 justify-center items-center">
                <ul className="flex flex-col gap-5 text-sm font-semibold md:hidden">
                    <Link href="/app/page"><li>Home</li></Link>
                    <li>Enroll</li>
                    <li>student-list</li>
                    <li>profile</li>
                </ul>
                 <Link href="/auth/login">
                <div className=" w-20 h-10 rounded shadow text-white justify-center items-center
                 bg-blue-500 md:hideen">
                    <p>sign up</p>
                </div>
                </Link>
            </div>    
           )}
        </main>
    )
}