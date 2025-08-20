import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 sm:mb-8 flex items-center align-middle justify-start gap-2">
          <span className="inline-flex items-center h-6 min-h-0 min-w-0">← </span>
          <Link href="/" className="text-foreground inline-flex items-center h-6 min-h-0 min-w-0 hover:underline">
            Back to Home
          </Link>
        </div>

        <div className="max-w-none">
          <h1 className="font-inter font-bold text-3xl text-foreground mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: August 20, 2025</p>

          <p className="font-inter text-foreground mb-8 leading-relaxed">
            At RevProcess (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have when engaging with our website and services.
          </p>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">1. Information We Collect</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              When you visit our site, submit an application, or interact with us, we may collect:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              <strong>Personal Information:</strong> Name, email address, phone number, and any information you voluntarily provide on the application form.
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              <strong>Business Information:</strong> Details about your business, audience, offers, and goals shared during the application process.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              <strong>Technical Data:</strong> IP address, browser type, device information, and cookies for analytics and site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We may use the information we collect to:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              Review and process partnership applications.
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              Communicate with you regarding your application or potential partnership.
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              Provide updates, resources, or relevant information about RevProcess.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Improve our website and services through analytics and user feedback.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">3. Sharing of Information</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We may share your information only in the following cases:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              <strong>With Service Providers:</strong> Trusted vendors who help us operate our website or manage communications (e.g., email platforms, analytics tools).
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              <strong>For Legal Compliance:</strong> If required by law or to protect our rights, property, or safety.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              <strong>With Your Consent:</strong> In cases where you explicitly authorize us to share information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">4. Data Security</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no system is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">5. Data Retention</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">6. Your Rights</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              The right to access, correct, or delete your personal information.
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              The right to opt out of receiving marketing communications.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              The right to request a copy of the data we hold about you.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              To exercise these rights, contact us at: jon@revprocess.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">7. Cookies &amp; Tracking</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We may use cookies and similar technologies to improve site performance, analyze usage, and deliver a better user experience. You can disable cookies in your browser settings, but some features may not function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">8. Third-Party Links</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">9. Changes to this Policy</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">10. Contact Us</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              If you have questions about this Privacy Policy or how your information is handled, please contact us:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              RevProcess
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Email: jon@revprocess.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}