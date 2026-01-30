import Image from "next/image";
export default function Home () {
  return (
      <main>
        <div className="w-full bg-sky-300 h-10 border-y border-gray-100 justify-between flex items-center px-8">
          <h1 className="text-4xl font-bold">Bills</h1>
           <ul className="flex gap-10">
            <li>home</li>
            <li>Contact us</li>
            <li>About us</li>
           </ul>
           <p className="text-2xl font-semibold">Login</p>
        </div>
        
        
      </main>
  )
}