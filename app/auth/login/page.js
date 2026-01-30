      "use client"
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
TextField

export default function login(){
    const [count, setCount] = useState(0);
    const [data,setData] = useState ([]);

      useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://dummyjson.com/products");
            const  data = await response.json();
            console.log(data.products);
            setData(data.products)
         }
         fetchData();
      },[])

    return(
        <mian>
            <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-2xl font-bold"> {count} </p>
                <button onClick={()=>{setCount(count + 1)}} className="w-20 h-16 bg-blue-300 rounded">Increment</button>
                <button onClick={()=>{setCount(count - 1)}} className="w-20 h-16 bg-blue-300 rounded">Decrement</button>
                <Button variant="contained">sign in</Button>
                <FcGoogle className="text-4xl "/>
                <TextField/>
            </div>
            <div className="m-10 grid grid-cols-4">
                {data.map(data =>
                <div key={data.id} className="w-70 h-120 rounded-md shadow-md">
                    <Image
                    src="/blg.jpg" 
                    alt="product"
                    width={200}
                    height={200}
                    />
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                    <p>{data.description}</p>
                </div>
                )}
            </div>
        </mian> 
         

    )
}