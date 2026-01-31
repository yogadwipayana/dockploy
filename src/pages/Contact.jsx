import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import {
    Mail,
    Clock,
    Instagram,
    ArrowLeft,
    Send,
    Building2,
    CheckCircle,
    Loader2,
} from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSuccess(false)
        }, 5000)
    }

    const contactInfo = [
        {
            icon: Building2,
            label: 'Company Name',
            value: 'DockPloy',
            color: 'blue',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'admin@dockploy.online',
            href: 'mailto:admin@dockploy.online',
            color: 'blue',
        },
        {
            icon: Clock,
            label: 'Business Hours',
            value: '24 Hours',
            color: 'green',
        },
        {
            icon: Instagram,
            label: 'Instagram',
            value: '@dockploy.online',
            href: 'https://instagram.com/dockploy.online',
            color: 'pink',
        },
    ]

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:border-blue-300',
            green: 'bg-green-100 text-green-600 border-green-200',
            pink: 'bg-pink-100 text-pink-600 border-pink-200 hover:border-pink-300',
        }
        return colors[color] || colors.blue
    }

    return (
        <>
            <Helmet>
                <title>Contact Us - DockPloy</title>
                <meta
                    name="description"
                    content="Get in touch with DockPloy. Contact us for support, inquiries, or partnership opportunities."
                />
            </Helmet>

            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navbar />

                <main className="grow pt-8 pb-16">
                    {/* Header Section */}
                    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Link
                                to="/"
                                className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Contact Us
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Have questions or need support? We're here to
                                help. Reach out to us and we'll get back to you
                                as soon as possible.
                            </p>
                        </div>
                    </section>

                    {/* Contact Content */}
                    <section className="py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Contact Information */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Get in Touch
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Whether you have a question about our
                                        services, need technical support, or want
                                        to explore partnership opportunities,
                                        our team is ready to assist you.
                                    </p>

                                    {/* Contact Info Cards */}
                                    <div className="space-y-4">
                                        {contactInfo.map((item) => {
                                            const Wrapper = item.href
                                                ? 'a'
                                                : 'div'
                                            return (
                                                <Wrapper
                                                    key={item.label}
                                                    href={item.href}
                                                    target={
                                                        item.href?.startsWith(
                                                            'http'
                                                        )
                                                            ? '_blank'
                                                            : undefined
                                                    }
                                                    rel={
                                                        item.href?.startsWith(
                                                            'http'
                                                        )
                                                            ? 'noopener noreferrer'
                                                            : undefined
                                                    }
                                                    className={`flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-200 transition-all ${
                                                        item.href
                                                            ? 'hover:shadow-md cursor-pointer'
                                                            : ''
                                                    }`}
                                                >
                                                    <div
                                                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getColorClasses(
                                                            item.color
                                                        )}`}
                                                    >
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">
                                                            {item.label}
                                                        </p>
                                                        <p className="text-gray-900 font-semibold text-lg">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </Wrapper>
                                            )
                                        })}
                                    </div>

                                    {/* Additional Info */}
                                    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Why Contact Us?
                                        </h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">
                                                    •
                                                </span>
                                                Technical support and
                                                troubleshooting
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">
                                                    •
                                                </span>
                                                Questions about our services and
                                                pricing
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">
                                                    •
                                                </span>
                                                Partnership and business inquiries
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">
                                                    •
                                                </span>
                                                Feedback and feature requests
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div>
                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            Send us a Message
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            Fill out the form below and we'll
                                            respond within 24 hours.
                                        </p>

                                        {isSuccess ? (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-up">
                                                <div className="flex items-center justify-center mb-4">
                                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    Message Sent!
                                                </h3>
                                                <p className="text-gray-600">
                                                    Thank you for reaching out.
                                                    We'll get back to you as soon
                                                    as possible.
                                                </p>
                                            </div>
                                        ) : (
                                            <form
                                                onSubmit={handleSubmit}
                                                className="space-y-5"
                                            >
                                                {/* Name Field */}
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        data-clarity-mask
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        placeholder="Your full name"
                                                    />
                                                </div>

                                                {/* Email Field */}
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        data-clarity-mask
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>

                                                {/* Subject Field */}
                                                <div>
                                                    <label
                                                        htmlFor="subject"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Subject
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                        data-clarity-mask
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        placeholder="How can we help?"
                                                    />
                                                </div>

                                                {/* Message Field */}
                                                <div>
                                                    <label
                                                        htmlFor="message"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        data-clarity-mask
                                                        rows={5}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                                        placeholder="Tell us more about your inquiry..."
                                                    />
                                                </div>

                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-base px-6 py-3.5 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-5 h-5 mr-2" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
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
