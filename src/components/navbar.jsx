import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Bell } from 'lucide-react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/tools', label: 'Tools & Docs' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo (Left) */}
                    <div className="flex items-center shrink-0">
                        <Link to="/" className="shrink-0">
                            <div className="flex items-center">
                                <img src="/images/logo.svg" alt="logo" width="70" height="70" />
                                <span className="ml-2 text-xl font-bold text-gray-900">
                                    Dock<span className="text-blue-600">Ploy</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links (Center) - Desktop Only */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-base font-medium transition-colors hover:text-blue-700 cursor-pointer ${
                                        isActive(link.path)
                                            ? 'text-blue-600'
                                            : 'text-gray-800'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons (Right) - Desktop Only */}
                    <div className="hidden md:flex items-center space-x-3 shrink-0">
                        <a
                            href="#waitlist"
                            className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-sm px-5 py-2.5 shadow-sm hover:shadow-md"
                        >
                            <Bell className="w-4 h-4 mr-1.5" />
                            Join Waitlist
                        </a>
                    </div>

                    {/* Hamburger Menu Button - Mobile Only */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    isActive(link.path)
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="#waitlist"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <Bell className="w-4 h-4 inline mr-1.5" />
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
