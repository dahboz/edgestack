"use client"
import { db } from "@/config/firebase.config"
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { LuView } from "react-icons/lu";


export default function StudentList() {
    const [students, setStudents] =useState ([]);
    const [loading, setLoading] = useState ([])
    const {data: session} = useSession();
    console.log(session);
    

    useEffect(()=>{
        const fetchStudents = async () =>{
            try {
                const studentsRef = query(collection(db, "enrollments"),where ("user", "==", session?.user?.
                 id))
                 const snapShot = await getDocs (studentsRef);
                 const compileStudents = [];
                 snapShot.docs.forEach((doc)=>{
                    compileStudents.push({
                        id: doc.id,
                        date: doc.data(),
                    })
                 });
                 setStudents(compileStudents);
                 console.log(compileStudents);
            } 
            catch (error) {
                console.error("Error fetching students:", (error));
            }
            finally{
                setLoading (false);
            }
        }
        if (session) {
            fetchStudents ();
        }

    },[session])
       if (loading) {
        return (
            <main className="h-[80vh] flex items-center jusify-center">
                <CircularProgress className="text-5xl"/>
            </main>
        )
       }
       
    return(
        <main className="min-h-screen max-4xl mx-auto my-10 p-4">
        <h1 className="text-3xl font-bold text-blue-500 text-center">Student list</h1>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650  }}>
                <TableHead sx={{backgroundColor: "#A9A9A9"}}>
                <TableRow>
                    <tableCall sx={{fontWeight: "medium"}}>FULL NAME</tableCall>
                    <tableCall sx={{fontWeight: "medium"}}>PHONE NUMBER</tableCall>
                    <tableCall sx={{fontWeight: "medium"}}>EXAM TYPE</tableCall>
                    <tableCall sx={{fontWeight: "medium"}}>EXAM DATA</tableCall>
                    <tableCall sx={{fontWeight: "medium"}}>SUBJECTS</tableCall>
                    <tableCall sx={{fontWeight: "medium"}}>VIEW</tableCall>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student)=>
                <TableRow key={student.id}>
                    <tableCall>{Student.data.fullName}</tableCall>
                    <tableCall>{Student.data.phoneNumber}</tableCall>
                    <tableCall>{Student.data.examType}</tableCall>
                    <tableCall>{Student.data.examDate}.</tableCall>
                    <tableCall>{Student.data.selectedSubject.join (",")}</tableCall> 
                    <tableCall><LuView className="text-2xl cursor-pointer"/></tableCall>
                </TableRow>
                )}
            </TableBody>           
            </Table>
        </TableContainer>
        
        </main>
        
    )
}