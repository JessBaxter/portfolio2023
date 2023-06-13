import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="container py-20 m-auto">
      <h1 className="text-4xl font-bold pt-2 pb-10">Privacy Policy</h1>
      <p className="pb-10 px-2">
        I am committed to protecting your privacy and ensuring the
        confidentiality of your personal information. This Privacy Policy
        explains how I collect, use, and disclose personal information in
        accordance with the Australian Privacy Principles (APPs) outlined in the
        Privacy Act 1988 (Cwlth).
      </p>
      <h2 className="text-2xl font-bold py-4">
        Collection of Personal Information
      </h2>
      <p className="pb-10 px-2">
        I collect personal information that is necessary for our business
        operations. This may include your name, contact details, and other
        relevant information. I will collect this information directly from you
        unless it is unreasonable or impracticable to do so.
      </p>
      <h2 className="text-2xl font-bold py-4">
        Use and Disclosure of Personal Information
      </h2>
      <p className="pb-10 px-2">
        I use and disclose personal information for the purposes for which I
        collected it, and for other related purposes that you would reasonably
        expect. I will not use or disclose your personal information for other
        purposes unless I have your consent, or the use or disclosure is
        required or permitted by law.
      </p>
      <h2 className="text-2xl font-bold py-4">Data Quality and Security</h2>
      <p className="pb-10 px-2">
        I take reasonable steps to ensure that the personal information I
        collect is accurate, up-to-date, and complete. I also take reasonable
        steps to protect the personal information I hold from misuse,
        interference, loss, unauthorized access, modification, or disclosure.
      </p>
      <h2 className="text-2xl font-bold py-4">
        Access and Correction of Personal Information
      </h2>
      <p className="pb-10 px-2">
        You have the right to access the personal information I hold about you.
        I will respond to any requests for access to personal information within
        a reasonable period. If you find that the information I have is not
        up-to-date or is inaccurate, you have the right to ask me to correct it.
      </p>
      <h2 className="text-2xl font-bold py-4">Data Breaches</h2>
      <p className="pb-10 px-2">
        In the unlikely event of a data breach, I will promptly notify you and
        the Office of the Australian Information Commissioner (OAIC) if there is
        a high risk of serious harm to you.
      </p>
      <h2 className="text-2xl font-bold py-4">Anonymity and Pseudonymity</h2>
      <p className="pb-10 px-2">
        Where practicable, you have the option of not identifying yourself or
        using a pseudonym when dealing with me. However, this will not be
        possible if I am required or authorized by law to deal with identified
        individuals, or if it is impracticable for me to deal with you
        anonymously or pseudonymously.
      </p>
      <h2 className="text-2xl font-bold py-4">
        Cross-Border Disclosure of Personal Information
      </h2>
      <p className="pb-10 px-2">
        If I transfer your personal information overseas, I will comply with
        requirements of the APPs that relate to cross-border disclosure of
        personal information.
      </p>
      <h2 className="text-2xl font-bold py-4">
        Changes to this Privacy Policy
      </h2>
      <p className="pb-10 px-2">
        I may update our Privacy Policy from time to time. I will notify you of
        any changes by posting the new Privacy Policy on our website.
      </p>
      <h2 className="text-2xl font-bold py-4">Contacting Me</h2>
      <p className="pb-10 px-2">
        If you have any questions or complaints about how I handle your personal
        information,{" "}
        <Link href="#contact" alt="Contact form" className="text-primary">
          please contact me using the method below
        </Link>
        . I take all complaints seriously, and will respond to your complaint
        within a reasonable period.
      </p>
      <p className="italic">Last updated: 9 June, 2023</p>
    </main>
  );
}
