import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import {
    FileText,
    Shield,
    Server,
    User,
    CreditCard,
    AlertTriangle,
    Copyright,
    Scale,
    XCircle,
    Gavel,
    RefreshCw,
    Mail,
    Clock,
    Instagram,
    ArrowLeft,
    BarChart3,
} from 'lucide-react'

export default function Terms() {
    const sections = [
        {
            id: 'introduction',
            icon: FileText,
            title: '1. Introduction',
            content: [
                'Welcome to DockPloy. These Terms and Conditions ("Terms") govern your access to and use of the DockPloy platform, website, and services (collectively, the "Services").',
                'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.',
                'DockPloy is a Docker deployment platform that provides containerized application hosting, VPS management, and related services ("Service" or "Services").',
                'Please read these Terms carefully before using our Services.',
            ],
        },
        {
            id: 'definitions',
            icon: Shield,
            title: '2. Definitions',
            content: [
                '"DockPloy", "we", "us", or "our" refers to the company operating the DockPloy platform.',
                '"User", "you", or "your" refers to any individual or entity that accesses or uses our Services.',
                '"Services" refers to all products, features, applications, and services offered by DockPloy, including but not limited to Docker deployment, VPS hosting, and managed services.',
                '"Account" means a registered user account on the DockPloy platform.',
                '"Content" means any data, files, applications, or other materials uploaded, stored, or processed through our Services.',
                '"VPS" means Virtual Private Server, a virtualized server environment provided as part of our Services.',
            ],
        },
        {
            id: 'service-description',
            icon: Server,
            title: '3. Service Description',
            content: [
                'DockPloy provides Docker deployment services that enable users to deploy, manage, and scale containerized applications.',
                'Our Services include:',
                '• Pre-configured VPS instances with Docker pre-installed',
                '• Managed Docker deployment platforms (Dockploy, Coolify)',
                '• Database hosting services (MySQL, PostgreSQL)',
                '• Workflow automation tools (n8n)',
                '• Server management and monitoring services',
                '• Technical support and consulting services',
                'We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice.',
                'We strive to maintain high availability but do not guarantee uninterrupted access to the Services.',
            ],
        },
        {
            id: 'user-accounts',
            icon: User,
            title: '4. User Accounts',
            content: [
                'To access certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during registration.',
                'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
                'You agree to notify us immediately of any unauthorized use of your account or any other breach of security.',
                'You must be at least 18 years old to create an account and use our Services.',
                'We reserve the right to suspend or terminate accounts that violate these Terms or are inactive for an extended period.',
                'You may not use another user\'s account without permission.',
            ],
        },
        {
            id: 'payment-terms',
            icon: CreditCard,
            title: '5. Payment Terms',
            content: [
                'All prices are listed in Indonesian Rupiah (IDR) and are subject to applicable taxes.',
                'Payment must be made in advance for the selected billing period (monthly or annually).',
                'We accept payments through bank transfer, credit/debit cards, and other payment methods as indicated on our website.',
                'All fees are non-refundable except as expressly provided in these Terms or required by applicable law.',
                'Refund Policy:',
                '• No refunds will be provided for partial months of service.',
                '• If you cancel your subscription, you will continue to have access to the Services until the end of your current billing period.',
                '• Refunds may be considered on a case-by-case basis for technical issues that prevent service usage.',
                '• Refund requests must be submitted within 7 days of the transaction.',
                'We reserve the right to change our pricing at any time. Price changes will be effective upon posting on our website or notification to you.',
                'Failure to pay fees when due may result in suspension or termination of your account and Services.',
            ],
        },
        {
            id: 'usage-rules',
            icon: AlertTriangle,
            title: '6. Service Usage Rules',
            content: [
                'You agree to use our Services only for lawful purposes and in accordance with these Terms.',
                'Prohibited activities include but are not limited to:',
                '• Using the Services for any illegal purpose or to violate any laws',
                '• Uploading, storing, or transmitting any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable',
                '• Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services',
                '• Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure',
                '• Using the Services to send unsolicited communications, promotions, or advertisements (spam)',
                '• Attempting to access any other user\'s account or data without authorization',
                '• Using the Services to mine cryptocurrencies without explicit written permission',
                '• Engaging in any activity that disrupts or interferes with the Services',
                'We reserve the right to investigate and take appropriate legal action against anyone who violates these provisions.',
            ],
        },
        {
            id: 'intellectual-property',
            icon: Copyright,
            title: '7. Intellectual Property',
            content: [
                'All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of DockPloy or its licensors and are protected by Indonesian and international copyright, trademark, patent, trade secret, and other intellectual property laws.',
                'The DockPloy name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of DockPloy. You may not use such marks without our prior written permission.',
                'You retain ownership of any content you upload to our Services. By uploading content, you grant us a limited license to use, store, and process such content solely for the purpose of providing the Services to you.',
                'You represent and warrant that you own or have the necessary rights to any content you upload and that such content does not violate any third-party rights.',
            ],
        },
        {
            id: 'liability',
            icon: Scale,
            title: '8. Limitation of Liability',
            content: [
                'To the fullest extent permitted by applicable law, DockPloy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.',
                'Our total liability to you for any claim arising out of or relating to these Terms or the Services shall not exceed the amount you paid us for the Services during the 12 months preceding the claim.',
                'We do not warrant that the Services will be uninterrupted, timely, secure, or error-free.',
                'We are not responsible for any data loss that may occur during the use of our Services. You are responsible for maintaining backups of your data.',
                'Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.',
            ],
        },
        {
            id: 'termination',
            icon: XCircle,
            title: '9. Termination',
            content: [
                'You may terminate your account at any time by contacting us or through your account settings.',
                'We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including but not limited to:',
                '• Breach of these Terms',
                '• Non-payment of fees',
                '• Conduct that we believe is harmful to other users or our business',
                '• Extended periods of inactivity',
                'Upon termination, your right to use the Services will immediately cease.',
                'All provisions of these Terms which by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
                'We are not responsible for any loss or damage that may result from the termination of your account.',
            ],
        },
        {
            id: 'governing-law',
            icon: Gavel,
            title: '10. Governing Law',
            content: [
                'These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions.',
                'Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration in Indonesia in accordance with the rules of the Indonesian National Board of Arbitration (BANI).',
                'The seat of arbitration shall be Jakarta, Indonesia.',
                'The language of arbitration shall be Indonesian or English.',
                'You agree that any legal action or proceeding between you and DockPloy shall be brought exclusively in the courts of Indonesia.',
            ],
        },
        {
            id: 'changes',
            icon: RefreshCw,
            title: '11. Changes to Terms',
            content: [
                'We reserve the right to modify or replace these Terms at any time at our sole discretion.',
                'If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect.',
                'What constitutes a material change will be determined at our sole discretion.',
                'By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised Terms.',
                'If you do not agree to the new terms, you are no longer authorized to use the Services.',
                'We encourage you to review these Terms periodically for any changes.',
            ],
        },
        {
            id: 'analytics',
            icon: BarChart3,
            title: '12. Analytics and Tracking',
            content: [
                'We use Microsoft Clarity, a behavioral analytics service provided by Microsoft Corporation, to better understand how users interact with our website and to improve user experience.',
                'Microsoft Clarity collects the following types of data:',
                '• Session recordings of user interactions with our website',
                '• Heatmaps showing areas of user engagement and clicks',
                '• Mouse movements, scroll behavior, and click patterns',
                '• Device and browser information (such as device type, screen resolution, and browser version)',
                '• General geographic location (country/region level only)',
                'The data collected is used solely for the purpose of improving our website\'s usability, identifying technical issues, and enhancing overall user experience.',
                'Data Retention: Session recordings and associated analytics data are retained for a period of 30 days, after which they are automatically deleted.',
                'GDPR and CCPA Compliance: We are committed to protecting your privacy rights under applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Microsoft Clarity processes data in accordance with Microsoft\'s privacy practices and data processing agreements.',
                'Opt-Out: You can opt out of tracking by Microsoft Clarity by enabling the "Do Not Track" setting in your browser or by using browser extensions that block analytics scripts.',
                'For more information about how Microsoft processes your data, please review the Microsoft Clarity Terms of Service: https://clarity.microsoft.com/terms',
            ],
        },
        {
            id: 'contact',
            icon: Mail,
            title: '13. Contact Information',
            content: [
                'If you have any questions about these Terms, please contact us:',
            ],
        },
    ]

    return (
        <>
            <Helmet>
                <title>Terms & Conditions | DockPloy</title>
                <meta
                    name="description"
                    content="Terms and Conditions for using DockPloy Docker deployment services. Read our legal terms, payment policies, and user agreements."
                />
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <main className="pt-8 pb-16">
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
                                Terms & Conditions
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                Please read these terms carefully before using
                                our services. By using DockPloy, you agree to
                                these terms.
                            </p>
                            <p className="text-sm text-blue-200 mt-4">
                                Last updated: January 31, 2026
                            </p>
                        </div>
                    </section>

                    {/* Terms Content */}
                    <section className="py-16">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                {sections.map((section, index) => (
                                    <div
                                        key={section.id}
                                        className={`p-8 ${
                                            index !== sections.length - 1
                                                ? 'border-b border-gray-200'
                                                : ''
                                        }`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                                    <section.icon className="w-6 h-6 text-blue-600" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                                    {section.title}
                                                </h2>
                                                <div className="space-y-3">
                                                    {section.content.map(
                                                        (paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className={`text-gray-600 leading-relaxed ${
                                                                    paragraph.startsWith(
                                                                        '•'
                                                                    ) ||
                                                                    paragraph.startsWith(
                                                                        '"'
                                                                    )
                                                                        ? 'ml-0'
                                                                        : ''
                                                                }`}
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Contact Information Special Section */}
                                <div className="p-8 bg-gray-50">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <a
                                            href="mailto:admin@dockploy.online"
                                            className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                                        >
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <Mail className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Email
                                                </p>
                                                <p className="text-gray-900 font-medium">
                                                    admin@dockploy.online
                                                </p>
                                            </div>
                                        </a>
                                        <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-200">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Support Hours
                                                </p>
                                                <p className="text-gray-900 font-medium">
                                                    24 Hours
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href="https://instagram.com/dockploy.online"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
                                        >
                                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                                <Instagram className="w-5 h-5 text-pink-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Instagram
                                                </p>
                                                <p className="text-gray-900 font-medium">
                                                    @dockploy.online
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Acceptance Notice */}
                    <section className="py-8">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                                <p className="text-gray-700">
                                    By using DockPloy services, you acknowledge
                                    that you have read, understood, and agree to
                                    be bound by these Terms and Conditions.
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
