import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'

export default function Tools() {
    return (
        <>
            <Helmet>
                <title>Tools & Docs - Dockploy</title>
            </Helmet>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navbar />
                <main className="grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools & Docs</h1>
                        <p className="text-xl text-gray-600">Coming soon...</p>
                    </div>
                </main>
            </div>
        </>
    )
}
