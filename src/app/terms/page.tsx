import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Animations/Reveal"

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white text-[#212529]">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="container max-w-3xl mx-auto">
                    <Reveal width="100%">
                        <div className="text-center mb-16 border-b border-gray-100 pb-12">
                            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Terms of Service</h1>
                            <p className="text-gray-500 font-medium">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} width="100%">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#212529] prose-a:text-blue-600 hover:prose-a:text-blue-700 transition-colors">
                            <p className="lead text-xl text-gray-600 mb-12 font-medium">
                                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Kalatram website. By accessing or using our Service, you agree to be bound by these Terms.
                            </p>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
                                <h3 className="text-lg font-bold mb-3 text-[#004c8c] mt-0">Agreement to Terms</h3>
                                <p className="mb-0 text-gray-600">
                                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                                </p>
                            </div>

                            <h3>1. Intellectual Property</h3>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Kalatram and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries.
                            </p>

                            <h3>2. Use License</h3>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on Kalatram's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul>
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on Kalatram's website;</li>
                            </ul>

                            <h3>3. Links To Other Web Sites</h3>
                            <p>
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by Kalatram. Kalatram has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                            </p>

                            <h3>4. Limitation of Liability</h3>
                            <p>
                                In no event shall Kalatram, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>

                            <h3>5. Governing Law</h3>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                            </p>

                            <h3>6. Changes</h3>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>

                            <hr className="my-12 border-gray-100" />

                            <p className="text-sm text-gray-500">
                                If you have any questions about these Terms, please <a href="/contact">contact us</a>.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    )
}
