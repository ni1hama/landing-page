import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const EFFECTIVE_DATE = "21 April 2026";
const VERSION = "1.0";

type Section = {
  id: string;
  num: string;
  title: string;
};

const privacyToc: Section[] = [
  { id: "p-overview", num: "1.0", title: "Overview" },
  { id: "p-who", num: "1.1", title: "Who we are" },
  { id: "p-collect", num: "1.2", title: "Information we collect" },
  { id: "p-use", num: "1.3", title: "How we use information" },
  { id: "p-ai", num: "1.4", title: "AI, models, and training" },
  { id: "p-legal-bases", num: "1.5", title: "Legal bases" },
  { id: "p-sharing", num: "1.6", title: "Sharing and sub-processors" },
  { id: "p-transfers", num: "1.7", title: "International transfers" },
  { id: "p-retention", num: "1.8", title: "Retention" },
  { id: "p-rights", num: "1.9", title: "Your rights" },
  { id: "p-security", num: "1.10", title: "Security" },
  { id: "p-cookies", num: "1.11", title: "Cookies and analytics" },
  { id: "p-children", num: "1.12", title: "Children" },
  { id: "p-apple", num: "1.13", title: "Apple platform users" },
  { id: "p-changes", num: "1.14", title: "Changes to this policy" },
  { id: "p-contact", num: "1.15", title: "Contact" },
];

const termsToc: Section[] = [
  { id: "t-acceptance", num: "2.0", title: "Acceptance" },
  { id: "t-eligibility", num: "2.1", title: "Eligibility" },
  { id: "t-accounts", num: "2.2", title: "Accounts" },
  { id: "t-service", num: "2.3", title: "The Service" },
  { id: "t-acceptable-use", num: "2.4", title: "Acceptable use" },
  { id: "t-your-content", num: "2.5", title: "Your content" },
  { id: "t-ai-output", num: "2.6", title: "AI output" },
  { id: "t-feedback", num: "2.7", title: "Feedback" },
  { id: "t-fees", num: "2.8", title: "Fees" },
  { id: "t-beta", num: "2.9", title: "Beta features" },
  { id: "t-third-party", num: "2.10", title: "Third-party services" },
  { id: "t-ip", num: "2.11", title: "Intellectual property" },
  { id: "t-warranty", num: "2.12", title: "Disclaimers" },
  { id: "t-liability", num: "2.13", title: "Limitation of liability" },
  { id: "t-indemnity", num: "2.14", title: "Indemnification" },
  { id: "t-termination", num: "2.15", title: "Termination" },
  { id: "t-export", num: "2.16", title: "Export & sanctions" },
  { id: "t-law", num: "2.17", title: "Governing law & disputes" },
  { id: "t-changes", num: "2.18", title: "Changes" },
  { id: "t-misc", num: "2.19", title: "Miscellaneous" },
  { id: "t-contact", num: "2.20", title: "Contact" },
];

export default function Legal() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  const toc = useMemo(
    () => [
      { heading: "Privacy Policy", anchor: "privacy", items: privacyToc },
      { heading: "Terms of Service", anchor: "terms", items: termsToc },
    ],
    [],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-14 max-w-3xl">
        <p className="section-label">Legal</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Privacy &amp; Terms
        </h1>
        <p className="mt-4 text-sm text-stone-600">
          The following documents govern your use of the PPKA.AI website,
          products, and APIs. They are written to meet the requirements of
          common privacy frameworks including the Singapore PDPA, the EU/UK
          GDPR, and the California CCPA/CPRA, and to reflect how an AI-native
          company operates.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-stone-500 sm:max-w-md">
          <dt className="font-mono uppercase tracking-[0.14em]">Effective</dt>
          <dd className="font-mono text-stone-700">{EFFECTIVE_DATE}</dd>
          <dt className="font-mono uppercase tracking-[0.14em]">
            Last updated
          </dt>
          <dd className="font-mono text-stone-700">{EFFECTIVE_DATE}</dd>
          <dt className="font-mono uppercase tracking-[0.14em]">Version</dt>
          <dd className="font-mono text-stone-700">{VERSION}</dd>
          <dt className="font-mono uppercase tracking-[0.14em]">Entity</dt>
          <dd className="font-mono text-stone-700">PPKA.AI · Singapore</dd>
        </dl>
      </header>

      <div className="grid gap-14 lg:grid-cols-[220px_1fr]">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <nav
            aria-label="Document sections"
            className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
          >
            {toc.map((group) => (
              <div key={group.anchor} className="mb-8">
                <a
                  href={`#${group.anchor}`}
                  className="section-label block hover:text-stone-900"
                >
                  {group.heading}
                </a>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex gap-3 text-xs leading-snug text-stone-500 hover:text-stone-900"
                      >
                        <span className="font-mono text-stone-400 group-hover:text-stone-600">
                          {s.num}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          {/* Mobile quick nav */}
          <nav
            aria-label="Quick jump"
            className="mb-10 flex gap-4 text-sm lg:hidden"
          >
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

          {/* At-a-glance */}
          <aside
            aria-label="At a glance"
            className="mb-14 rounded-lg border border-stone-200 bg-white p-6"
          >
            <p className="section-label">At a glance</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                />
                We collect the minimum information needed to run our products
                and website, and we log how the service is used to keep it
                reliable and safe.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                />
                We do not sell personal information, and we do not use your
                content to train third-party foundation models without your
                explicit opt-in.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                />
                You can access, correct, delete, export, or object to the
                processing of your personal data. Email{" "}
                <a
                  href="mailto:privacy@ppka.ai"
                  className="text-emerald-700 underline underline-offset-2"
                >
                  privacy@ppka.ai
                </a>
                .
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                />
                AI outputs may be inaccurate. Check them before you rely on
                them; we disclaim warranties to the maximum extent permitted.
              </li>
            </ul>
          </aside>

          {/* PRIVACY */}
          <article id="privacy" className="legal scroll-mt-24">
            <header className="mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Part 1
              </p>
              <h2 className="mt-2 !mb-0 font-serif text-3xl font-semibold leading-tight text-stone-900">
                Privacy Policy
              </h2>
            </header>

            <Section id="p-overview" num="1.0" title="Overview">
              <p>
                This Privacy Policy describes how PPKA.AI
                (&ldquo;PPKA.AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
                collects, uses, discloses, and protects personal information
                when you visit{" "}
                <code className="rounded bg-stone-100 px-1 font-mono text-[0.85em]">
                  ppka.ai
                </code>{" "}
                and any subdomains, use our apps, APIs, or other services
                (together, the &ldquo;Service&rdquo;), or otherwise interact
                with us. It applies to end-users, developer customers, and
                prospective customers.
              </p>
            </Section>

            <Section id="p-who" num="1.1" title="Who we are">
              <p>
                PPKA.AI is an AI engineering company headquartered in Singapore.
                We build software and LLM agent systems for developers and
                end-users. For privacy matters you can reach us at{" "}
                <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>. In markets
                where a data controller must be named, PPKA.AI acts as the
                controller of personal information you provide directly to us,
                and as a processor where we handle personal information on
                behalf of a customer under a separate agreement.
              </p>
            </Section>

            <Section id="p-collect" num="1.2" title="Information we collect">
              <ul>
                <li>
                  <strong>Account information</strong> — identifiers you provide
                  when you sign up, such as email address, display name,
                  organisation, and authentication credentials.
                </li>
                <li>
                  <strong>Content you submit</strong> — prompts, files, audio,
                  images, and other inputs you send to our agents, tools, or
                  APIs, together with the outputs produced.
                </li>
                <li>
                  <strong>Usage and device data</strong> — technical logs about
                  how the Service is used: IP address, approximate location,
                  device model, operating system, browser, feature or endpoint
                  accessed, request and response sizes, and timestamps.
                </li>
                <li>
                  <strong>Payment data</strong> — if you purchase a paid plan,
                  our payment processor receives your billing details directly;
                  we receive only the limited metadata needed to manage your
                  subscription.
                </li>
                <li>
                  <strong>Support and communications</strong> — messages you
                  send us, and records of our responses.
                </li>
                <li>
                  <strong>Cookies and similar technologies</strong> — see{" "}
                  <a href="#p-cookies">§ 1.11</a>.
                </li>
              </ul>
            </Section>

            <Section id="p-use" num="1.3" title="How we use information">
              <ul>
                <li>To provide, maintain, and secure the Service.</li>
                <li>
                  To debug, monitor, measure, and improve reliability, safety,
                  latency, and accuracy.
                </li>
                <li>
                  To prevent, detect, and respond to fraud, abuse, and
                  violations of our Terms.
                </li>
                <li>
                  To communicate with you about the Service, including security
                  and policy updates.
                </li>
                <li>
                  To comply with law, enforce our agreements, and protect the
                  rights, property, and safety of our users and third parties.
                </li>
              </ul>
              <p>
                We do not sell personal information, and we do not
                &ldquo;share&rdquo; personal information for cross-context
                behavioural advertising as that term is defined under the
                CCPA/CPRA.
              </p>
            </Section>

            <Section id="p-ai" num="1.4" title="AI, models, and training">
              <p>
                We operate agent systems that may call first-party or
                third-party foundation models. We treat your content as follows:
              </p>
              <ul>
                <li>
                  <strong>No training without opt-in.</strong> We do not use
                  customer prompts, files, or other inputs to train third-party
                  foundation models, and we do not use them to train our own
                  general-purpose models, unless you explicitly opt in.
                </li>
                <li>
                  <strong>Tenant isolation.</strong> Customer content is
                  logically separated. Our personnel access it only under a
                  least-privilege model, for support, abuse investigation, or to
                  comply with law.
                </li>
                <li>
                  <strong>Third-party model providers.</strong> When we route a
                  request to a third-party model provider to generate a
                  response, that provider processes the content under its own
                  zero-retention or short-retention terms, listed at{" "}
                  <a href="#p-sharing">§ 1.6</a>.
                </li>
                <li>
                  <strong>Output accuracy.</strong> Model outputs may be
                  inaccurate, incomplete, or biased. See{" "}
                  <a href="#t-ai-output">§ 2.6</a>.
                </li>
              </ul>
            </Section>

            <Section id="p-legal-bases" num="1.5" title="Legal bases">
              <p>
                Where the GDPR, UK GDPR, Singapore PDPA, or similar frameworks
                apply, we rely on the following legal bases:
              </p>
              <ul>
                <li>
                  <strong>Performance of a contract</strong> — to provide the
                  Service you requested.
                </li>
                <li>
                  <strong>Legitimate interests</strong> — to secure, measure,
                  and improve the Service, balanced against your rights.
                </li>
                <li>
                  <strong>Consent</strong> — for optional cookies, analytics,
                  and marketing communications, where required.
                </li>
                <li>
                  <strong>Legal obligation</strong> — to comply with tax,
                  accounting, and lawful requests from authorities.
                </li>
              </ul>
            </Section>

            <Section
              id="p-sharing"
              num="1.6"
              title="Sharing and sub-processors"
            >
              <p>
                We share personal information only with service providers acting
                on our behalf, with authorities when legally required, and with
                successors in the event of a corporate transaction. We require
                providers to protect information consistent with this policy.
              </p>
              <p>
                We use sub-processors for hosting and infrastructure, inference,
                email delivery, analytics, error reporting, and payments. A
                current list is available on request from{" "}
                <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>. We give
                customers on written agreements advance notice of material
                sub-processor changes where required.
              </p>
            </Section>

            <Section id="p-transfers" num="1.7" title="International transfers">
              <p>
                PPKA.AI operates from Singapore and may use providers in other
                jurisdictions, including the United States and the European
                Economic Area. Where personal data is transferred across
                borders, we rely on recognised safeguards such as the EU
                Standard Contractual Clauses and equivalent mechanisms under UK
                and Singapore law.
              </p>
            </Section>

            <Section id="p-retention" num="1.8" title="Retention">
              <p>
                We retain personal information for as long as needed to deliver
                the Service, comply with legal obligations, resolve disputes,
                and enforce our agreements. Operational logs are retained for a
                limited period and then deleted or anonymised. Account records
                are deleted on request, subject to legal retention requirements.
              </p>
            </Section>

            <Section id="p-rights" num="1.9" title="Your rights">
              <p>Depending on where you live, you may have the right to:</p>
              <ul>
                <li>access a copy of the personal information we hold;</li>
                <li>correct inaccurate information;</li>
                <li>delete information in certain cases;</li>
                <li>obtain a portable copy in a machine-readable format;</li>
                <li>
                  object to or restrict certain processing, including automated
                  decision-making that produces legal effects;
                </li>
                <li>
                  withdraw consent for processing that relies on consent,
                  without affecting prior lawful processing;
                </li>
                <li>
                  opt out of &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; (we do
                  not sell or share, as defined under CCPA/CPRA); and
                </li>
                <li>
                  lodge a complaint with your local supervisory authority — for
                  example, the Personal Data Protection Commission of Singapore,
                  your national data-protection authority in the EEA/UK, or the
                  California Privacy Protection Agency.
                </li>
              </ul>
              <p>
                To exercise these rights, email{" "}
                <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>. We will
                verify your request and respond within the time required by
                applicable law.
              </p>
            </Section>

            <Section id="p-security" num="1.10" title="Security">
              <p>
                We apply administrative, technical, and physical safeguards
                designed to protect information against unauthorised access,
                loss, or alteration, including encryption in transit, encryption
                at rest for sensitive data, access controls, logging, and
                periodic review. No system is perfectly secure. If we become
                aware of a qualifying incident we will notify affected users as
                required by law.
              </p>
            </Section>

            <Section id="p-cookies" num="1.11" title="Cookies and analytics">
              <p>We use a small number of cookies and similar technologies:</p>
              <ul>
                <li>
                  <strong>Strictly necessary</strong> — for session management,
                  security, and load balancing. These cannot be disabled.
                </li>
                <li>
                  <strong>Preferences</strong> — to remember your choices such
                  as theme or language.
                </li>
                <li>
                  <strong>Analytics</strong> — privacy-respecting measurement to
                  understand aggregate usage. You can refuse these without loss
                  of core functionality.
                </li>
              </ul>
              <p>
                Where required by law we ask for consent before setting
                non-essential cookies, and you can change your choice at any
                time.
              </p>
            </Section>

            <Section id="p-children" num="1.12" title="Children">
              <p>
                The Service is not directed to children under 13 (or the minimum
                age of digital consent in your jurisdiction, if higher). We do
                not knowingly collect personal information from children. If you
                believe a child has provided us personal information, please
                contact <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>.
              </p>
            </Section>

            <Section id="p-apple" num="1.13" title="Apple platform users">
              <p>
                If you access our Service through an Apple-developed application
                or through Sign in with Apple, the following also applies:
              </p>
              <ul>
                <li>
                  We do not access, collect, or use your IDFA, IDFV, or other
                  tracking identifiers except where strictly necessary for the
                  Service and, where applicable, after you grant App Tracking
                  Transparency permission.
                </li>
                <li>
                  If you sign in using Sign in with Apple, we receive only the
                  identifiers you choose to share, such as a relay email
                  address, and we use them for authentication.
                </li>
                <li>
                  In-app purchases on iOS are processed by Apple under its
                  terms. PPKA.AI receives only a subscription status and limited
                  transaction metadata.
                </li>
              </ul>
            </Section>

            <Section id="p-changes" num="1.14" title="Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be indicated by updating the effective date above
                and, where appropriate, by more prominent notice. Continued use
                of the Service after the effective date constitutes
                acknowledgment of the updated policy.
              </p>
            </Section>

            <Section id="p-contact" num="1.15" title="Contact">
              <p>
                Questions about this Privacy Policy can be sent to{" "}
                <a href="mailto:privacy@ppka.ai">privacy@ppka.ai</a>. PPKA.AI is
                headquartered in Singapore.
              </p>
            </Section>
          </article>

          <div className="my-20 h-px w-full bg-stone-200" />

          {/* TERMS */}
          <article id="terms" className="legal scroll-mt-24">
            <header className="mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Part 2
              </p>
              <h2 className="mt-2 !mb-0 font-serif text-3xl font-semibold leading-tight text-stone-900">
                Terms of Service
              </h2>
            </header>

            <Section id="t-acceptance" num="2.0" title="Acceptance">
              <p>
                By accessing or using the PPKA.AI website, products, or APIs
                (the &ldquo;Service&rdquo;), you agree to these Terms of
                Service. If you are using the Service on behalf of an
                organisation, you represent that you have authority to bind that
                organisation and &ldquo;you&rdquo; refers to the organisation.
                If you do not agree, do not use the Service.
              </p>
            </Section>

            <Section id="t-eligibility" num="2.1" title="Eligibility">
              <p>
                You must be at least 13 years old (or the minimum age of digital
                consent in your jurisdiction) to use the Service. If you are
                under the age of majority, you may only use the Service with
                consent from a parent or legal guardian.
              </p>
            </Section>

            <Section id="t-accounts" num="2.2" title="Accounts">
              <p>
                You are responsible for the information provided during
                registration, for keeping your credentials secure, and for all
                activity under your account. Notify us at{" "}
                <a href="mailto:security@ppka.ai">security@ppka.ai</a> if you
                suspect unauthorised access.
              </p>
            </Section>

            <Section id="t-service" num="2.3" title="The Service">
              <p>
                PPKA.AI provides software and LLM agent systems, including
                developer tooling, APIs, and end-user applications. Parts of the
                Service depend on third-party models or infrastructure and may
                be modified, suspended, or discontinued. We will use reasonable
                efforts to provide continuity and, where appropriate, advance
                notice of material changes.
              </p>
            </Section>

            <Section id="t-acceptable-use" num="2.4" title="Acceptable use">
              <p>You agree not to, and not to allow any third party to:</p>
              <ul>
                <li>
                  use the Service to violate law, infringe intellectual
                  property, defame, harass, or harm others;
                </li>
                <li>
                  attempt to disrupt the Service, probe it for vulnerabilities
                  without authorisation, circumvent rate or safety controls, or
                  reverse-engineer it except where permitted by law;
                </li>
                <li>
                  use the Service to generate content that sexualises minors,
                  incites violence, facilitates the creation of weapons capable
                  of mass harm, or targets individuals for unlawful
                  surveillance;
                </li>
                <li>
                  submit personal data you are not permitted to submit, or
                  sensitive data (for example health, biometric, or credit-card
                  data) except through a feature designed to handle it;
                </li>
                <li>
                  represent model output as human-authored in a way that
                  deceives, or use the Service to impersonate a person or entity
                  without consent.
                </li>
              </ul>
            </Section>

            <Section id="t-your-content" num="2.5" title="Your content">
              <p>
                You retain ownership of the inputs you submit and, to the extent
                permitted by law, of the outputs generated from them. You grant
                PPKA.AI a worldwide, non-exclusive, royalty-free licence to
                host, process, and transmit your content solely to provide,
                secure, and support the Service. You are responsible for
                ensuring you have the rights to the inputs you submit and that
                their use through the Service is lawful.
              </p>
            </Section>

            <Section id="t-ai-output" num="2.6" title="AI output">
              <p>
                Outputs from LLM agents may be inaccurate, incomplete, or
                unsuitable for a given purpose, and different users may receive
                similar or identical outputs in response to similar prompts. You
                are responsible for reviewing outputs before relying on them and
                for complying with any licences or obligations that apply to how
                you use them, including professional, legal, medical, or
                financial-advice restrictions. Do not use outputs to make
                decisions about individuals without appropriate human review.
              </p>
            </Section>

            <Section id="t-feedback" num="2.7" title="Feedback">
              <p>
                If you send us feedback, suggestions, or ideas about the
                Service, you grant PPKA.AI a perpetual, worldwide, royalty-free
                licence to use that feedback without restriction, including to
                improve the Service.
              </p>
            </Section>

            <Section id="t-fees" num="2.8" title="Fees">
              <p>
                Paid features, if offered, are described at the point of
                purchase and billed through the payment method you provide.
                Unless otherwise stated or required by law, fees are
                non-refundable. Taxes are additional where applicable.
              </p>
            </Section>

            <Section id="t-beta" num="2.9" title="Beta features">
              <p>
                We may offer features labelled as &ldquo;beta&rdquo;,
                &ldquo;preview&rdquo;, or similar. These are provided on an
                &ldquo;as is&rdquo; basis, may change or be withdrawn at any
                time, and are excluded from any service-level commitments.
              </p>
            </Section>

            <Section id="t-third-party" num="2.10" title="Third-party services">
              <p>
                The Service may interoperate with third-party services and
                foundation models. Your use of those services is governed by
                their own terms, and PPKA.AI is not responsible for them. We do
                not endorse, and are not responsible for, content delivered or
                actions taken by third parties.
              </p>
            </Section>

            <Section id="t-ip" num="2.11" title="Intellectual property">
              <p>
                The Service, including the PPKA.AI name, logo, software, and
                documentation, is owned by PPKA.AI and protected by applicable
                intellectual-property laws. No rights are granted except as
                expressly set out in these Terms. We respect the
                intellectual-property rights of others and respond to valid
                takedown notices.
              </p>
            </Section>

            <Section id="t-warranty" num="2.12" title="Disclaimers">
              <p>
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. To the maximum extent permitted by law,
                PPKA.AI disclaims all warranties, express or implied, including
                warranties of merchantability, fitness for a particular purpose,
                non-infringement, accuracy, reliability, and availability.
                PPKA.AI does not warrant that the Service will be uninterrupted,
                secure, or error-free, or that any output will be accurate or
                reliable.
              </p>
            </Section>

            <Section
              id="t-liability"
              num="2.13"
              title="Limitation of liability"
            >
              <p>
                To the maximum extent permitted by law, PPKA.AI and its
                affiliates, officers, employees, and agents will not be liable
                for any indirect, incidental, special, consequential, exemplary,
                or punitive damages, or for loss of profits, revenues, data,
                goodwill, or other intangible losses, arising out of or relating
                to the Service.
              </p>
              <p>
                PPKA.AI&rsquo;s total aggregate liability arising out of or
                relating to these Terms will not exceed the greater of the
                amounts paid by you to PPKA.AI in the twelve months preceding
                the claim or one hundred Singapore dollars (SGD&nbsp;100).
              </p>
            </Section>

            <Section id="t-indemnity" num="2.14" title="Indemnification">
              <p>
                You will defend, indemnify, and hold harmless PPKA.AI and its
                affiliates from any claim, loss, liability, or expense
                (including reasonable legal fees) arising out of (a) your use of
                the Service in violation of these Terms or applicable law, (b)
                content you submit through the Service, or (c) your violation of
                the rights of any third party.
              </p>
            </Section>

            <Section id="t-termination" num="2.15" title="Termination">
              <p>
                You may stop using the Service at any time. We may suspend or
                terminate access if you breach these Terms, if required by law,
                or if continued provision would create a security, reputational,
                or legal risk. Provisions that by their nature should survive
                termination will do so, including sections on your content, AI
                output, disclaimers, limitation of liability, indemnification,
                and governing law.
              </p>
            </Section>

            <Section id="t-export" num="2.16" title="Export & sanctions">
              <p>
                You may not access or use the Service if you are located in, or
                are a national or resident of, any country or region subject to
                comprehensive sanctions by Singapore, the United States, the
                European Union, or the United Kingdom, or if you are on a
                restricted-party list. You will comply with all applicable
                export-control and sanctions laws.
              </p>
            </Section>

            <Section id="t-law" num="2.17" title="Governing law & disputes">
              <p>
                These Terms are governed by the laws of Singapore, without
                regard to conflict-of-laws principles. The parties submit to the
                exclusive jurisdiction of the courts of Singapore, except that
                either party may seek urgent or equitable relief in any court of
                competent jurisdiction. Where mandatory local law grants you a
                right that cannot be waived, this section does not limit that
                right.
              </p>
            </Section>

            <Section id="t-changes" num="2.18" title="Changes">
              <p>
                We may update these Terms. If changes are material we will
                update the effective date and provide additional notice where
                appropriate. Continued use of the Service after changes become
                effective constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section id="t-misc" num="2.19" title="Miscellaneous">
              <ul>
                <li>
                  <strong>Entire agreement.</strong> These Terms, together with
                  our Privacy Policy and any order form or service-specific
                  terms, constitute the entire agreement between you and
                  PPKA.AI.
                </li>
                <li>
                  <strong>Severability.</strong> If any provision is found
                  unenforceable, the remaining provisions remain in full force.
                </li>
                <li>
                  <strong>Waiver.</strong> A failure to enforce any right is not
                  a waiver of that right.
                </li>
                <li>
                  <strong>Assignment.</strong> You may not assign these Terms
                  without our written consent. We may assign them in connection
                  with a merger, acquisition, or sale of assets.
                </li>
                <li>
                  <strong>Notices.</strong> We may provide notice by email,
                  through the Service, or by posting on our website.
                </li>
                <li>
                  <strong>Force majeure.</strong> Neither party is liable for
                  delays or failures caused by events beyond its reasonable
                  control.
                </li>
                <li>
                  <strong>Independent contractors.</strong> The parties are
                  independent contractors; these Terms do not create any agency,
                  partnership, or joint venture.
                </li>
              </ul>
            </Section>

            <Section id="t-contact" num="2.20" title="Contact">
              <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:legal@ppka.ai">legal@ppka.ai</a>. PPKA.AI is
                headquartered in Singapore.
              </p>
            </Section>
          </article>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h3 className="!mt-0 flex items-baseline gap-3 font-serif text-lg font-semibold text-stone-900">
        <span className="font-mono text-xs text-stone-400">§ {num}</span>
        <span>{title}</span>
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}
