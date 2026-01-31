import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import {
    Check,
    Zap,
    Server,
    Mail,
    Bell,
    ChevronDown,
} from 'lucide-react'

export default function Products() {
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question:
                "What's the difference between Managed Services and VPS Products?",
            answer:
                "Managed Services include ongoing support, monitoring, and maintenance by our team. VPS Products are pre-configured servers that you manage yourself, with optional add-ons for specific tools.",
        },
        {
            question: 'Can I add or remove tools later?',
            answer:
                'Yes! You can add n8n, Dockploy, Coolify, or databases to your VPS at any time. Changes are prorated for the remainder of your billing cycle.',
        },
        {
            question: 'Do I need technical knowledge to use these products?',
            answer:
                'Our VPS products come pre-configured and ready to use. Basic Docker knowledge is helpful but not required. For fully hands-off experience, consider our Managed Services.',
        },
    ]

    const vpsTiers = [
        {
            name: 'Nube 1',
            subtitle: 'Entry Level',
            price: 'Rp35.000',
            save: 'Save 65%',
            gradient: 'from-blue-500 to-blue-600',
            specs: ['1 vCPU Core', '1 GB RAM', '20 GB SSD Storage'],
        },
        {
            name: 'Nube 2',
            subtitle: 'Standard',
            price: 'Rp50.000',
            save: 'Save 60%',
            gradient: 'from-blue-600 to-purple-600',
            specs: ['1 vCPU Core', '2 GB RAM', '20 GB SSD Storage'],
            popular: true,
        },
        {
            name: 'Nube 3',
            subtitle: 'Professional',
            price: 'Rp90.000',
            save: null,
            gradient: 'from-purple-600 to-pink-600',
            specs: ['2 vCPU Cores', '2 GB RAM', '20 GB SSD Storage'],
        },
        {
            name: 'Nube 4',
            subtitle: 'Business',
            price: 'Rp160.000',
            save: null,
            gradient: 'from-pink-600 to-red-600',
            specs: ['2 vCPU Cores', '4 GB RAM', '20 GB SSD Storage'],
        },
    ]

    const addons = [
        {
            name: 'n8n',
            subtitle: 'Workflow Automation',
            iconSrc: '/images/n8n-wordmark-light.svg',
            iconBg: 'bg-white',
            description:
                'Pre-configured n8n instance for automating workflows and integrating apps.',
            features: [
                'Visual workflow builder',
                '400+ integrations',
                'Self-hosted & secure',
            ],
        },
        {
            name: 'Dockploy',
            subtitle: 'Deployment Platform',
            iconSrc: '/images/dokploy.svg',
            iconBg: 'bg-white',
            description:
                'Deployment platform pre-installed and ready to manage your Docker apps.',
            features: [
                'Web-based deployment',
                'Container management',
                'Environment variables',
            ],
            recommended: true,
        },
        {
            name: 'Coolify',
            subtitle: 'Open Source PaaS',
            iconSrc: '/images/coolify.svg',
            iconBg: 'bg-white',
            description:
                'Coolify pre-installed for an alternative deployment experience with more features.',
            features: [
                'Git-based deployments',
                'Multiple resource types',
                'Team collaboration',
            ],
        },
    ]

    return (
        <>
            <Helmet>
                <title>Products & Services - DockPloy</title>
                <meta
                    name="description"
                    content="Explore DockPloy products and services for Docker deployment"
                />
            </Helmet>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navbar />

                <main className="grow">
                    {/* Page Header */}
                    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full border border-amber-200 mb-6">
                                Early Access
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Our <span className="text-blue-600">Services & Products</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                                From managed services to ready-to-deploy VPS solutions — we
                                handle the infrastructure so you can focus on building.
                            </p>
                        </div>
                    </section>

                    {/* Database Section */}
                    <section id="database" className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">
                                    DATABASE
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Database Services
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Production-ready database instances with automated backups
                                    and monitoring.
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* MySQL */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                                                <img 
                                                    src="/images/mysql-official.svg" 
                                                    alt="MySQL"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">MySQL</h4>
                                                <p className="text-gray-500 text-sm">
                                                    Production-ready setup
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-900">
                                            Rp15.000
                                            <span className="text-sm text-gray-500">/mo</span>
                                        </span>
                                    </div>
                                    {/* PostgreSQL */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                                                <img 
                                                    src="/images/postgresql-ar21.svg" 
                                                    alt="PostgreSQL"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    PostgreSQL
                                                </h4>
                                                <p className="text-gray-500 text-sm">
                                                    Production-ready setup
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-900">
                                            Rp20.000
                                            <span className="text-sm text-gray-500">/mo</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* VPS Section */}
                    <section
                        id="vps"
                        className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                                    VPS
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Pre-Configured VPS
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Ready-to-deploy VPS instances with your favorite tools
                                    pre-installed and configured.
                                </p>
                            </div>

                            {/* VPS Products - 4 Tiers */}
                            <div className="max-w-6xl mx-auto mb-16">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                    {vpsTiers.map((tier) => (
                                        <div
                                            key={tier.name}
                                            className={`bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow ${
                                                tier.popular
                                                    ? 'border-2 border-blue-500 relative overflow-visible'
                                                    : 'border-gray-200 overflow-hidden'
                                            }`}
                                        >
                                            {tier.popular && (
                                                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full z-10 shadow-md">
                                                    Popular
                                                </span>
                                            )}
                                            <div
                                                className={`bg-gradient-to-r ${tier.gradient} px-6 py-4 ${tier.popular ? 'rounded-t-2xl' : ''}`}
                                            >
                                                <h3 className="text-xl font-bold text-white">
                                                    {tier.name}
                                                </h3>
                                                <p className="text-blue-100 text-sm">
                                                    {tier.subtitle}
                                                </p>
                                            </div>
                                            <div className="p-6">
                                                <div className="mb-4">
                                                    <span className="text-3xl font-bold text-gray-900">
                                                        {tier.price}
                                                    </span>
                                                    <span className="text-gray-500">/mo</span>
                                                </div>
                                                {tier.save && (
                                                    <div className="text-sm text-green-600 font-medium mb-4">
                                                        {tier.save}
                                                    </div>
                                                )}
                                                <ul className="space-y-3 text-sm">
                                                    {tier.specs.map((spec) => (
                                                        <li
                                                            key={spec}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <Check className="w-4 h-4 text-blue-600" />
                                                            <span className="text-gray-700">
                                                                {spec}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Optional Add-ons */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                                    Optional Pre-installed Tools
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {addons.map((addon) => (
                                        <div
                                            key={addon.name}
                                            className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl border relative ${
                                                addon.recommended
                                                    ? 'border-2 border-blue-500'
                                                    : 'border-gray-200'
                                            }`}
                                        >
                                            {addon.recommended && (
                                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                    Recommended
                                                </span>
                                            )}
                                            <div className="flex items-center justify-between mb-4">
                                                <div
                                                    className={`w-12 h-12 ${addon.iconBg} rounded-lg flex items-center justify-center p-2`}
                                                >
                                                    <img 
                                                        src={addon.iconSrc} 
                                                        alt={addon.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                {addon.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-3">
                                                {addon.subtitle}
                                            </p>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {addon.description}
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                {addon.features.map((feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Check className="w-4 h-4 text-green-600" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Managed Services Section */}
                    <section id="managed" className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">
                                    MANAGED
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Managed Services
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Let our team handle the infrastructure while you focus on
                                    your application.
                                </p>
                            </div>

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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Managed Dockploy
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        Fully managed deployment platform
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        We manage your Dockploy instance on your server —
                                        updates, monitoring, and support included.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        {[
                                            'Dockploy installation & setup',
                                            'Regular updates & patches',
                                            '24/7 monitoring & alerts',
                                            'Priority email support',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center space-x-3"
                                            >
                                                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex items-baseline justify-between">
                                            <div>
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp20.000
                                                </span>
                                                <span className="text-gray-500">/month</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2">
                                            Per Dockploy instance
                                        </p>
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Managed VPS
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        Complete server management
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        We provision, secure, and manage your VPS end-to-end.
                                        Perfect for teams without DevOps expertise.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        {[
                                            'VPS provisioning & setup',
                                            'Security hardening',
                                            'Docker & Dockploy included',
                                            'Backup & monitoring',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center space-x-3"
                                            >
                                                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex items-baseline justify-between">
                                            <div>
                                                <span className="text-3xl font-bold text-gray-900">
                                                    Rp50.000
                                                </span>
                                                <span className="text-gray-500">/month</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2">
                                            Per VPS instance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                                    >
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                                        >
                                            <span className="text-gray-900 font-medium">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                                    openFaq === index ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                openFaq === index
                                                    ? 'max-h-48 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <p className="px-6 py-4 text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Ready to get started?
                            </h2>
                            <p className="text-xl text-gray-600 mb-10">
                                Choose the solution that fits your needs, or contact us for a
                                custom setup.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/#waitlist"
                                    className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-base px-8 py-4 shadow-lg hover:shadow-xl"
                                >
                                    <Bell className="w-5 h-5 mr-2" />
                                    Join Early Access
                                </Link>
                                <a
                                    href="mailto:sales@dockploy.com"
                                    className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-blue-500 text-base px-8 py-4 shadow-sm hover:shadow-md"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Contact Sales
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {/* Logo and Copyright */}
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start mb-4">
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

                            {/* Links */}
                            <div className="text-center">
                                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                                    Legal
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            to="/terms"
                                            className="text-gray-400 hover:text-white text-sm transition-colors"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-gray-400 hover:text-white text-sm transition-colors"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Information */}
                            <div className="text-center md:text-right">
                                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                                    Contact
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-400 text-sm">
                                        Email:{' '}
                                        <a
                                            href="mailto:admin@dockploy.online"
                                            className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            admin@dockploy.online
                                        </a>
                                    </li>
                                    <li className="text-gray-400 text-sm">
                                        Support: 24hrs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
