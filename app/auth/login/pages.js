import { textField} from "@mui/material"

export default function login() {
    return (
        <main className="min-h-screen flex justify-center py-6 px-2">
        <div className="w-full shadow-md rounded md:w-94 md:flex md:flex-col md:gap-3
        max-h-120 md:px-3 md:py-4">
            <h1 className="text-2xl font-bold text-center">Sign Into Exam Portal</h1>
            <p className="text-sm text-gray-500 mt-2 text-center">create an account or  chsign in</p>
            <form className="">
                <div>
                   < textField
                     fullWidth
                     size="small"
                     label="Email"
                     type="email"
                     placeholder="dabere@gmail.com"
                     id="email"
                   />
                </div>
                <button className="text-white w-full h-10 flex justify-center
                items-center bg-blue-500 p-3 rounded-md">Continue</button>
            </form>

        </div>
        </main>
    )
}