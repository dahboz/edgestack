import Image from "next/image"


export default function Homepage() {
    return (
        <main className="bg-[url(/afr.jpg)] h-screen bg-contain bg-no-repeat md:bg-[url(/afr.jpg))] md:h-[60vh] md:bg-contain lg:bg-[url(/afr.jpg))] lg:h-screen lg:bg-no-repeat lg:bg-cover">

            {/* ================= HERO SECTION ================= */}
            <div className="h-screen bg-cover bg-center flex items-center justify-center text-white">
                <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Excellence Academy
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Building Leaders of Tomorrow
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-16 px-6 md:px-20 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">About Our School</h2>
                    <p className="text-gray-600 mt-4">
                        We provide quality education with modern facilities and experienced teachers.
                    </p>
                </div>
            </section>

            {/* PROGRAMS SECTION */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Programs
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Science</h3>
                        <p>Advanced laboratories and research-based learning.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Arts</h3>
                        <p>Creative programs to nurture talents and imagination.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Technology</h3>
                        <p>Modern ICT facilities and coding programs.</p>
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-16 bg-blue-600 text-white text-center px-6">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="max-w-3xl mx-auto">
                    We focus on academic excellence, moral values, and real-world skills.
                </p>
            </section>



        </main>

    )
}