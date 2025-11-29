import React from "react";
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Cookies = () => {
  return (
    <div>
        <Header/>
        <div className="min-h-screen bg-white px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cookie Policy
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
            This Cookie Policy explains how we use cookies and similar tracking
            technologies on our website. By continuing to browse or use our site,
            you consent to the use of cookies as described here.
            </p>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device when you visit a
                website. They help us remember your preferences, understand how you
                use our site, and improve your browsing experience.
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Types of Cookies We Use
            </h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                <strong>Essential Cookies:</strong> Required for core website
                functions such as navigation and security.
                </li>
                <li>
                <strong>Analytics Cookies:</strong> Help us understand how users
                interact with the website so we can improve performance.
                </li>
                <li>
                <strong>Preference Cookies:</strong> Store your settings and
                choices (e.g., language).
                </li>
                <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant ads
                and measure campaign performance (only if explicitly accepted).
                </li>
            </ul>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                How We Use Cookies
            </h2>

            <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze traffic,
                personalize content, and remember your preferences. Some cookies are
                set by third-party services such as analytics tools or embedded
                content providers.
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Managing Cookies
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
                You can control or delete cookies through your browser settings.
                Please note that disabling essential cookies may affect the website
                functioning.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Adjust cookie settings in your browser preferences.</li>
                <li>Delete existing cookies anytime.</li>
                <li>
                Disable analytics or marketing cookies using a cookie-consent
                panel (if available).
                </li>
            </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Updates to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will
                be posted on this page with an updated revision date.
            </p>
            </section>

            <footer className="mt-12 text-gray-600">
            Last updated: {new Date().getFullYear()}
            </footer>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Cookies;
