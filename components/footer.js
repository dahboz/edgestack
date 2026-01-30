export function footer() {
    return (
        <footer className="bg-white px shadow-md">
            <div className="flex gap-2 text-gray-600">
                <p>&copy; {year} Edgestack system</p>
                <p>All rights reserved</p>
            </div>
            <div className="flex gap-2 text-gray-600">
                <p>privacy policy</p>
                <p>Terms of service</p>
                <p>Support</p>
            </div>

        </footer>
    )
}