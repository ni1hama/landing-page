import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EFFECTIVE_DATE = "21 April 2026";

export default function Legal() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <p className="section-label">Legal</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
          Privacy &amp; Terms
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Effective: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
        </p>
        <nav aria-label="Legal sections" className="mt-6 flex gap-4 text-sm">
          <a
            href="#privacy"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Terms of Service
          </a>
        </nav>
      </header>

      <article id="privacy" className="legal">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy explains how PPKA.AI (&ldquo;PPKA.AI&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects
          information when you visit our website, use our products, or otherwise
          interact with our services.
        </p>

        <h3>Who we are</h3>
        <p>
          PPKA.AI is an AI engineering company headquartered in Singapore. We
          build software and LLM agent systems for developers and end-users. For
          privacy-related enquiries, contact{" "}
          <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>.
        </p>

        <h3>Information we collect</h3>
        <ul>
          <li>
            <strong>Account information</strong> — if you create an account, we
            collect the identifiers you provide (such as email address and
            display name) and any authentication credentials.
          </li>
          <li>
            <strong>Usage data</strong> — we collect technical logs about how
            our products are used, including device and browser information, IP
            address, pages or features accessed, and timestamps, in order to
            operate and improve the service.
          </li>
          <li>
            <strong>Content you submit</strong> — prompts, files, and other
            inputs you send to our agents or APIs, together with the outputs
            produced, for the duration required to deliver the service.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — strictly
            necessary cookies for session management, and optional analytics
            cookies that you can refuse without loss of core functionality.
          </li>
        </ul>

        <h3>How we use information</h3>
        <ul>
          <li>To provide, maintain, and secure our products and website.</li>
          <li>
            To debug, monitor, and improve reliability, safety, and performance.
          </li>
          <li>
            To communicate with you about the service, including security and
            policy updates.
          </li>
          <li>
            To comply with applicable law and enforce our Terms of Service.
          </li>
        </ul>
        <p>
          We do not sell personal information. We do not use the content you
          submit to train third-party foundation models without your explicit
          opt-in.
        </p>

        <h3>Legal bases</h3>
        <p>
          Where the GDPR, Singapore PDPA, or similar frameworks apply, we
          process personal information on the bases of contractual necessity,
          legitimate interests (operating and securing the service), consent
          (where required), and legal obligation.
        </p>

        <h3>Sharing</h3>
        <p>
          We share information only with service providers acting on our behalf
          (such as hosting, inference, and analytics providers), with
          authorities when legally required, and with successors in the event of
          a corporate transaction. We require providers to protect information
          consistent with this policy.
        </p>

        <h3>International transfers</h3>
        <p>
          PPKA.AI operates from Singapore and may use providers located in other
          jurisdictions. Where personal data is transferred across borders, we
          rely on recognised safeguards such as standard contractual clauses.
        </p>

        <h3>Retention</h3>
        <p>
          We retain personal information only as long as necessary to deliver
          the service, comply with legal obligations, resolve disputes, and
          enforce our agreements. Operational logs are retained for a limited
          period and then deleted or anonymised.
        </p>

        <h3>Your rights</h3>
        <p>
          Subject to applicable law, you may request access to, correction of,
          deletion of, or portability of your personal information, and you may
          object to or restrict certain processing. To exercise these rights,
          email <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>. You also
          have the right to lodge a complaint with your local supervisory
          authority.
        </p>

        <h3>Security</h3>
        <p>
          We apply administrative, technical, and physical safeguards designed
          to protect information against unauthorised access, loss, or
          alteration. No system is perfectly secure; if we become aware of a
          qualifying incident, we will notify affected users as required by law.
        </p>

        <h3>Children</h3>
        <p>
          Our products are not directed at children under 13 (or the applicable
          age of digital consent). We do not knowingly collect personal
          information from children.
        </p>

        <h3>Changes</h3>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be indicated by updating the effective date above and, where
          appropriate, by a more prominent notice.
        </p>
      </article>

      <div className="my-16 h-px w-full bg-stone-200" />

      <article id="terms" className="legal">
        <h2>Terms of Service</h2>
        <p>
          These Terms of Service govern your use of the PPKA.AI website,
          products, and APIs (collectively, the &ldquo;Service&rdquo;). By
          accessing or using the Service you agree to these Terms.
        </p>

        <h3>The Service</h3>
        <p>
          PPKA.AI provides software and LLM agent systems, including developer
          tooling and end-user applications. Some features depend on third-party
          models or infrastructure and may be modified, suspended, or
          discontinued.
        </p>

        <h3>Accounts</h3>
        <p>
          You are responsible for information provided during registration, for
          keeping your credentials secure, and for activity under your account.
          You must be at least 13 years old (or the minimum age in your
          jurisdiction) to use the Service.
        </p>

        <h3>Acceptable use</h3>
        <ul>
          <li>
            Do not use the Service to violate law, infringe intellectual
            property, or harm others.
          </li>
          <li>
            Do not attempt to disrupt the Service, probe it for vulnerabilities
            without authorisation, or bypass rate or safety controls.
          </li>
          <li>
            Do not use the Service to generate content that is deceptive,
            abusive, or that targets individuals without lawful basis.
          </li>
          <li>
            Do not submit personal data you do not have the right to submit.
          </li>
        </ul>

        <h3>Your content</h3>
        <p>
          You retain ownership of the inputs you submit and, to the extent
          permitted by law, of the outputs generated from them. You grant
          PPKA.AI a limited licence to process your content solely as needed to
          provide, secure, and support the Service.
        </p>

        <h3>AI-generated output</h3>
        <p>
          Outputs from LLM agents may be inaccurate, incomplete, or unsuitable
          for a given purpose. You are responsible for reviewing outputs before
          relying on them, and for complying with any licences or obligations
          that apply to how you use them.
        </p>

        <h3>Fees</h3>
        <p>
          Paid features, if offered, are described at the point of purchase.
          Unless otherwise stated, fees are non-refundable except where required
          by law.
        </p>

        <h3>Intellectual property</h3>
        <p>
          The Service, including the PPKA.AI name and logo, is owned by PPKA.AI
          and protected by applicable intellectual-property laws. No rights are
          granted except as expressly set out in these Terms.
        </p>

        <h3>Disclaimers</h3>
        <p>
          The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. To the maximum extent permitted by law,
          PPKA.AI disclaims all warranties, express or implied, including
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h3>Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, PPKA.AI will not be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          or for loss of profits, revenues, data, or goodwill. PPKA.AI&rsquo;s
          total aggregate liability arising out of or relating to these Terms
          will not exceed the greater of the amounts paid by you to PPKA.AI in
          the twelve months preceding the claim or one hundred Singapore dollars
          (SGD 100).
        </p>

        <h3>Termination</h3>
        <p>
          You may stop using the Service at any time. We may suspend or
          terminate access if you breach these Terms or if required by law.
          Provisions that by their nature should survive termination will do so.
        </p>

        <h3>Governing law</h3>
        <p>
          These Terms are governed by the laws of Singapore, without regard to
          conflict-of-laws principles. Disputes will be submitted to the
          exclusive jurisdiction of the courts of Singapore, except where
          mandatory law provides otherwise.
        </p>

        <h3>Changes to these Terms</h3>
        <p>
          We may update these Terms. If changes are material, we will update the
          effective date and, where appropriate, provide additional notice.
          Continued use of the Service after changes become effective
          constitutes acceptance of the revised Terms.
        </p>

        <h3>Contact</h3>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:legal@ppka.ai">legal@ppka.ai</a>. PPKA.AI is
          headquartered in Singapore.
        </p>
      </article>
    </section>
  );
}
