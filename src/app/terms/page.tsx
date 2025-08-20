import Link from "next/link";

export default function Terms() {
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
          <h1 className="font-inter font-bold text-3xl text-foreground mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: August 20, 2025</p>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">1. Partnership Model</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              RevProcess (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a Dedicated Backend Partner for select creators and coaches. This is not a course, mastermind, or &quot;done-for-you&quot; agency. Instead, we act as a true partner, taking ownership of backend systems and operations so you can focus on your content and expertise.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Because this is a partnership-based model, there is no standard retail price or program fee. Engagements are individualized, often based on revenue-share or performance-based agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">2. No Income Guarantees</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              We make no claims, representations, or guarantees that you will achieve specific results, revenue, or outcomes by entering into a partnership with RevProcess.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              While examples of potential results and benefits may be shared for educational or illustrative purposes, these are not promises of what you will achieve. Your results will vary depending on factors including (but not limited to): your background, experience, work ethic, niche, offer quality, and market conditions.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              <strong>Important:</strong> Any revenue numbers, case studies, or performance projections are illustrative only and should not be taken as typical, average, or guaranteed outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">3. Client Responsibilities</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              By applying to work with RevProcess, you acknowledge that:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              You are responsible for your own effort, commitment, and business decisions.
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              You understand that backend systems, funnels, and automations are tools that require your continued input (content, expertise, and fulfillment) to function effectively.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              You are not relying on RevProcess for legal, financial, or investment advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">4. Limitation of Liability</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              To the fullest extent permitted by law:
            </p>
            <p className="font-inter text-foreground mb-2 leading-relaxed">
              RevProcess and its representatives are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our strategies, systems, or partnerships.
            </p>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              You assume full responsibility for your business decisions and outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">5. Testimonials &amp; Illustrations</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              Any testimonials, stories, or case studies referenced are individual experiences and do not represent typical results. They are provided solely to demonstrate what is possible when systems are implemented effectively, not to imply that you will achieve the same outcome.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">6. Governing Law</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              These Terms shall be governed and interpreted in accordance with the laws of the United States and the State of Minnesota, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-semibold text-2xl text-foreground mb-4">7. Agreement</h2>
            <p className="font-inter text-foreground mb-4 leading-relaxed">
              By visiting this site, submitting an application, or engaging in any partnership discussion with RevProcess, you acknowledge that you have read, understood, and agreed to these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}