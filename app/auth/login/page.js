import { auth, signIn } from "@/auth";
import { TextField } from "@mui/material";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default async function Login () {
    const session = await auth();
    if(session) {
        redirect("/dashboard/enroll");
    }
    return (
        <main className="min-h-screen flex justify-center py-6 px-2">
            <div className="w-full shadow-md rounded md:w-92 md:flex md:flex-col md:gap-3 md:max-h-100 md:px-3 md:py-4">
                <h1 className="text-2xl font-bold text-center">Sign Into Exam Portal</h1>
                <p className="text-sm text-gray-500 mt-2 text-center">Create an account or sign In</p>
                <form className=" flex flex-col gap-3">
                    <div>
                      <TextField 
                       fullWidth
                       size="small"
                       label="Email"
                       type="email"
                       placeholder="emmanuel@gmail.com"
                       id="email"
                      />
                    </div>
                    <button className="text-white w-full h-10 font-semibold flex justify-center items-center bg-blue-500 p-3 rounded-md cursor-pointer ">Continue</button>
                </form>
                <p className="mt-2 text-gray-500 text-center">Or sign up with</p>
                <div className="flex justify-center gap-2">
                    <form 
                    action={async ()=>{
                             "use server"
                            await signIn('google');
                    }}
                    >
                        <button type="submit" className="w-12 h-12 cursor-pointer flex justify-center items-center rounded-md shadow-lg">
                            <FcGoogle className="text-4xl" />
                        </button>
                    </form>
                    <form>
                        <button type="submit" className="w-12 h-12 flex justify-center cursor-pointer items-center rounded-md shadow-lg">
                            <IoLogoGithub className="text-4xl" />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}