import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white text-[#212529]">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="container max-w-3xl mx-auto">
                    <Reveal width="100%">
                        <div className="text-center mb-16 border-b border-gray-100 pb-12">
                            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Privacy Policy</h1>
                            <p className="text-gray-500 font-medium">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} width="100%">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#212529] prose-a:text-blue-600 hover:prose-a:text-blue-700 transition-colors">
                            <p className="lead text-xl text-gray-600 mb-12 font-medium">
                                At Sarpyx, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                            </p>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-lg font-bold mb-3 text-[#004c8c] mt-0">Quick Summary</h3>
                                <ul className="mb-0 space-y-2 text-gray-600">
                                    <li>We collect information to provide better services.</li>
                                    <li>We do not sell your personal data to third parties.</li>
                                    <li>You have the right to access and control your data.</li>
                                </ul>
                            </div>

                            <h3>1. Information We Collect</h3>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
                            </p>
                            <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include:</p>
                            <ul>
                                <li><strong>Names and Contact Data:</strong> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                                <li><strong>Credentials:</strong> We collect passwords, password hints, and similar security information used for authentication and account access.</li>
                            </ul>

                            <h3>2. Use of Your Information</h3>
                            <p>
                                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>

                            <h3>3. Information Sharing</h3>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                            </p>
                            <ul>
                                <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                                <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            </ul>

                            <h3>4. Data Security</h3>
                            <p>
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                            </p>

                            <hr className="my-12 border-gray-100" />

                            <h3>Contact Us</h3>
                            <p>
                                If you have questions or comments about this policy, you may email us or contact us by post at:
                            </p>
                            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
                                <strong>Sarpyx</strong><br />
                                Jaypee Aman, Noida Sector 151<br />
                                Noida<br />
                                <a href="mailto:ishupachouri817@gmail.com" className="text-blue-600 hover:underline">ishupachouri817@gmail.com</a>
                            </address>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
