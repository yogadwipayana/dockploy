import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import {
    Bell,
    CheckCircle,
    Database,
    Zap,
    Server,
    LayoutGrid,
    Headphones,
    Cloud,
} from 'lucide-react'

export default function LandingPages() {
    const [email, setEmail] = useState('')
    const [emailBottom, setEmailBottom] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showSuccessBottom, setShowSuccessBottom] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && isValidEmail(email)) {
            setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false)
                setEmail('')
            }, 5000)
        }
    }

    const handleSubmitBottom = (e) => {
        e.preventDefault()
        if (emailBottom && isValidEmail(emailBottom)) {
            setShowSuccessBottom(true)
            setTimeout(() => {
                setShowSuccessBottom(false)
                setEmailBottom('')
            }, 5000)
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <>
            <Helmet>
                <title>DockPloy - Deploy Docker Apps Without DevOps Headache</title>
                <meta
                    name="description"
                    content="Deploy and manage Docker applications easily with DockPloy. Simple pricing, no vendor lock-in, human support."
                />
            </Helmet>

            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navbar />

                <main className="grow">
                    {/* Hero Section */}
                    <section
                        id="home"
                        className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[90vh] flex items-center overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-12 lg:py-16">
                            <div className="text-center animate-fade-in-up">
                                {/* Logo */}
                                <div className="flex items-center justify-center mb-4 lg:mb-6">
                                    <div className="bg-blue-600 text-white flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl shadow-lg">
                                        <img
                                            src="/images/logo-white.svg"
                                            alt="logo"
                                            width="80"
                                            height="80"
                                        />
                                    </div>
                                </div>

                                {/* Announcement Badge */}
                                <div className="inline-flex items-center mb-4 lg:mb-5">
                                    <span className="px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full border border-amber-200">
                                        Launching Soon – Join Early Access
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-5 max-w-4xl mx-auto">
                                    Deploy & Manage Applications
                                    <span className="text-blue-600">
                                        Without DevOps Headache
                                    </span>
                                </h1>

                                {/* Subheading */}
                                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 lg:mb-8 leading-relaxed px-4">
                                    Dockploy helps you deploy Docker apps on your own server —
                                    or we handle the server for you. Simple, affordable, and
                                    production-ready.
                                </p>

                                {/* Pre-Registration Form */}
                                <div className="max-w-md mx-auto mb-6 lg:mb-8">
                                    {showSuccess ? (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in-up">
                                            <div className="flex items-center justify-center mb-3">
                                                <CheckCircle className="w-12 h-12 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                You're on the list!
                                            </h3>
                                            <p className="text-gray-600">
                                                We'll notify you as soon as we launch. Get ready
                                                for something amazing!
                                            </p>
                                        </div>
                                    ) : (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="flex flex-col sm:flex-row gap-3"
                                        >
                                            <div className="flex-1">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                    className="w-full px-5 py-3 lg:px-6 lg:py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-base px-6 py-3 lg:px-8 lg:py-4 shadow-lg hover:shadow-xl whitespace-nowrap"
                                            >
                                                <Bell className="w-5 h-5 mr-2" />
                                                Join Waitlist
                                            </button>
                                        </form>
                                    )}
                                    <p className="text-sm text-gray-500 mt-3 text-center">
                                        Get notified when we launch. No spam, unsubscribe
                                        anytime.
                                    </p>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>Simple pricing</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>No vendor lock-in</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>Human support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Product Overview Section */}
                    <section id="products" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                                    Our Services
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Everything You Need to Deploy
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    From databases to fully managed servers — we've got you
                                    covered with transparent pricing.
                                </p>
                            </div>

                            {/* Database Services */}
                            <div className="mb-16">
                                <div className="flex items-center justify-center mb-8">
                                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                                        DATABASE
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
                                    Database Services
                                </h3>
                                <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
                                    Production-ready database instances with automated backups
                                    and monitoring.
                                </p>

                                <div className="max-w-3xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* MySQL */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                                                    <img 
                                                        src="/images/mysql-official.svg" 
                                                        alt="MySQL"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-lg">
                                                        MySQL
                                                    </h4>
                                                    <p className="text-gray-500 text-sm">
                                                        Production-ready setup
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-xl font-bold text-gray-900">
                                                Rp15.000
                                                <span className="text-sm text-gray-500 font-normal">
                                                    /mo
                                                </span>
                                            </span>
                                        </div>

                                        {/* PostgreSQL */}
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                                                    <img 
                                                        src="/images/postgresql-ar21.svg" 
                                                        alt="PostgreSQL"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-lg">
                                                        PostgreSQL
                                                    </h4>
                                                    <p className="text-gray-500 text-sm">
                                                        Production-ready setup
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-xl font-bold text-gray-900">
                                                Rp20.000
                                                <span className="text-sm text-gray-500 font-normal">
                                                    /mo
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* VPS Services */}
                            <div className="mb-16">
                                <div className="flex items-center justify-center mb-8">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                        VPS
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
                                    Pre-Configured VPS
                                </h3>
                                <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
                                    Ready-to-deploy VPS instances with your favorite tools
                                    pre-installed and configured.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                    {/* Nube 1 */}
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                                            <h4 className="text-xl font-bold text-white">Nube 1</h4>
                                            <p className="text-blue-100 text-sm">Entry Level</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp35.000
                                                </span>
                                                <span className="text-gray-500">/mo</span>
                                            </div>
                                            <div className="text-sm text-green-600 font-medium mb-4">
                                                Save 65%
                                            </div>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        1 vCPU Core
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">1 GB RAM</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        20 GB SSD Storage
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Nube 2 */}
                                    <div className="bg-white rounded-2xl shadow-lg overflow-visible border-2 border-blue-500 relative hover:shadow-xl transition-shadow">
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full z-10 shadow-md">
                                            Popular
                                        </span>
                                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 rounded-t-2xl">
                                            <h4 className="text-xl font-bold text-white">Nube 2</h4>
                                            <p className="text-blue-100 text-sm">Standard</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp50.000
                                                </span>
                                                <span className="text-gray-500">/mo</span>
                                            </div>
                                            <div className="text-sm text-green-600 font-medium mb-4">
                                                Save 60%
                                            </div>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        1 vCPU Core
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">2 GB RAM</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        20 GB SSD Storage
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Nube 3 */}
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                                            <h4 className="text-xl font-bold text-white">Nube 3</h4>
                                            <p className="text-blue-100 text-sm">Professional</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp90.000
                                                </span>
                                                <span className="text-gray-500">/mo</span>
                                            </div>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        2 vCPU Cores
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">2 GB RAM</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        20 GB SSD Storage
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Nube 4 */}
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                                        <div className="bg-gradient-to-r from-pink-600 to-red-600 px-6 py-4">
                                            <h4 className="text-xl font-bold text-white">Nube 4</h4>
                                            <p className="text-blue-100 text-sm">Business</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp160.000
                                                </span>
                                                <span className="text-gray-500">/mo</span>
                                            </div>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        2 vCPU Cores
                                                    </span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">4 GB RAM</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                                    <span className="text-gray-700">
                                                        20 GB SSD Storage
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Managed Services */}
                            <div>
                                <div className="flex items-center justify-center mb-8">
                                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                                        MANAGED
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
                                    Managed Services
                                </h3>
                                <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
                                    Let our team handle the infrastructure while you focus on
                                    your application.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                    {/* Managed Dockploy */}
                                    <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                                        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 to-purple-600 mask-gradient pointer-events-none"></div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                                                <Zap className="w-7 h-7" />
                                            </div>
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                                                Managed
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                            Managed Dockploy
                                        </h4>
                                        <p className="text-gray-500 mb-4">
                                            Fully managed deployment platform
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            We manage your Dockploy instance on your server —
                                            updates, monitoring, and support included.
                                        </p>
                                        <div className="pt-6 border-t border-gray-100">
                                            <div className="flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-3xl font-bold text-gray-900">
                                                        Rp20.000
                                                    </span>
                                                    <span className="text-gray-500">/month</span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    + server costs
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Managed VPS */}
                                    <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                                        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 to-purple-600 mask-gradient pointer-events-none"></div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                                                <Server className="w-7 h-7" />
                                            </div>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                                Full Service
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                            Managed VPS
                                        </h4>
                                        <p className="text-gray-500 mb-4">
                                            Complete server management
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            We provision, secure, and manage your VPS end-to-end.
                                            Perfect for teams without DevOps expertise.
                                        </p>
                                        <div className="pt-6 border-t border-gray-100">
                                            <div className="flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-3xl font-bold text-gray-900">
                                                        Rp50.000
                                                    </span>
                                                    <span className="text-gray-500">/month</span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    + VPS costs
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Social Proof / Trust Section */}
                    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Trusted by Developers
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Join thousands of developers who trust Dockploy for their
                                    deployment needs.
                                </p>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                {/* Docker Ready */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <LayoutGrid className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Docker Ready
                                    </h3>
                                    <p className="text-gray-600">
                                        Pre-configured Docker environments for instant deployment
                                        of your containerized applications.
                                    </p>
                                </div>

                                {/* 24/7 Support */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Headphones className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        24/7 Support
                                    </h3>
                                    <p className="text-gray-600">
                                        Real human support available around the clock to help you
                                        with any deployment issues.
                                    </p>
                                </div>

                                {/* Auto Backups */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Cloud className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Auto Backups
                                    </h3>
                                    <p className="text-gray-600">
                                        Automated daily backups ensure your data is always safe
                                        and can be restored in minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Waitlist Section */}
                    <section
                        id="waitlist"
                        className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full border border-amber-200 mb-6">
                                Limited Early Access
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Be the First to Know When We Launch
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                Join our waitlist today and get exclusive early access, special
                                launch pricing, and updates on our progress.
                            </p>
                            <div className="max-w-md mx-auto">
                                {showSuccessBottom ? (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in-up">
                                        <div className="flex items-center justify-center mb-3">
                                            <CheckCircle className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            You're on the waitlist!
                                        </h3>
                                        <p className="text-gray-600">
                                            We'll send you exclusive updates and early access
                                            when we launch!
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmitBottom}
                                        className="flex flex-col sm:flex-row gap-3"
                                    >
                                        <div className="flex-1">
                                            <input
                                                type="email"
                                                value={emailBottom}
                                                onChange={(e) =>
                                                    setEmailBottom(e.target.value)
                                                }
                                                placeholder="Enter your email"
                                                required
                                                className="w-full px-6 py-4 text-base border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-base px-8 py-4 shadow-lg hover:shadow-xl whitespace-nowrap"
                                        >
                                            <Bell className="w-5 h-5 mr-2" />
                                            Join the Waitlist
                                        </button>
                                    </form>
                                )}
                                <p className="text-sm text-gray-500 mt-4">
                                    Join the waitlist • Get launch updates • Exclusive early
                                    access
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src="/images/logo-white.svg"
                                alt="logo"
                                width="40"
                                height="40"
                            />
                            <span className="ml-2 text-xl font-bold">
                                Dock<span className="text-blue-400">Ploy</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © 2026 DockPloy. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}
