   "use client"
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CircularProgress, circularProgressClasses } from "@mui/material";
import { CgProfile } from "react-icons/cg";




export default function Student() {
    const {data: session} = useSession();
    const {id} = useParams ();
    const[student, setStudent] = useState (null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    if (!session?.user) { 
        router.push("/auth/login");  
    };
                                                                                                                                               
    //fetch student from the database
    useEffect(()=>{
        const fetchStudent =async () =>{
        try {                            
          
            const StudeentRef = doc(db, "enrollments",id);
            const snapShot = await getDoc (StudeentRef);
            if (!snapShot.exists()) {
                router.push ("/dashboard/student-list");
                return ;
                
            }
            setStudentstudent ({
                id,
                ...snapShot.data(),
            })
        }
        catch (error) {
            console.error("Error Fatching Data:", error);
          }
            finally {
                setLoading(false)
            }
        }
          fetchStudent()
    },[id, router])

    const handleDelete = async ()=>{
        const comfirmDelete = window.confirm("are you sure , you want to delete this student?");
        if (! confirmDelete) return; 
        try{
            const deleteRef =doc(db, "enrollments", id)
            await deleteDoc (deleteRef);
            alert("student deleted successfully")
            router.push("/dashboard/student-list")
        }
        catch (error){
            console.error("Unable to delete:", error);
            alert("Failed to delete student")   
        }   
    }


    if (loading) {
        return (
            <main className="min-h-screen flex justify-center items-center h-[80vh]">
                <CircularProgress className="text-5xl"/>
            </main>
        )
        
    }


    return (
        <main className="min-h-screen flex justify-center px-2 md:py-20 md:px-12 lg:-py-20 lg:px-20"> 
            <div className="w-full md:w100 h-120 shadow-md rounded-md py-5 px-5">
                <h1 className="text-lg font-semibold text-center">Student Exam Details</h1>
                <div className="mt-2 flex justify-center">
                    <Image
                    src={session?.user?.image ||<CgProfile /> }
                    alt="image"
                    width={70}
                    height={70}
                    className="w-18 h-18 rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex justify-between ">
                        <p className="text-gray-800 text-lg">Student Name</p>
                        <p className="text-gray-800 text-sm mt-2">{student?.fullName}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-800 text-lg">Student PhoneNumber</p>
                        <p className="text-gray-800 text-sm mt-2">{student?.phoneNumber}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-800 text-lg">Exam Type</p>
                        <p className="text-gray-800 text-sm mt-2">{student?.examType}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-800 text-lg">Exam Data</p>
                        <p className="text-gray-800 text-sm mt-2">{student?.examDate}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-800 text-lg">Subject</p>
                        <p className="text-gray-800 text-sm mt-2">{student?.selectedSubjects.join( ",")}</p>
                    </div>
                    <div className="mt-10 flex justify-end">
                        <button onClick={handleDelete} className="bg-red-500 w-25 h-10 rounded-md shadow-md flex gap-2
                        justify-center items-center text-white cursor-pointer">
                            <RiDeleteBin6Line />
                            <span>Delete</span>
                        </button>
                    </div>










                    
                </div>

            </div>
        </main>
    )
}