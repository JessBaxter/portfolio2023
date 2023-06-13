import Link from "next/link";

export default function TosPolicy() {
  return (
    <main className="container py-20 m-auto">
      <h1 className="text-4xl font-bold pt-2 pb-10">Terms of Service</h1>
      <p className="pb-2">
        These Terms of Service ("Terms") govern your use of my website located
        at jessbaxter.info and any related services provided by me.
      </p>
      <p className="pb-10">
        By accessing and using my website, you agree to abide by these Terms. If
        you do not agree with these Terms, please do not access or use our
        website.
      </p>

      <h2 className="text-2xl font-bold py-2">1. Privacy</h2>
      <p class="pb-10 px-2">
        Please refer to my{" "}
        <Link href="/privacy" alt="Privacy Policy" className="text-primary">
          Privacy Policy
        </Link>{" "}
        for information on how we collect, use, and disclose your personal
        information.
      </p>

      <h2 className="text-2xl font-bold py-2">2. Intellectual Property</h2>
      <p class="pb-2">
        All content available on my website, including but not limited to text,
        graphics, logos, button icons, images, audio clips, data compilations,
        and software, and the compilation thereof (collectively, the "Content")
        is the property of Jess Baxter, my affiliates, partners or licensors,
        and is protected by Australian and international copyright laws.
      </p>
      <p class="pb-10 px-2">
        Your use of my website grants no rights to you in relation to my
        intellectual property rights or the intellectual property rights of
        third parties.
      </p>

      <h2 className="text-2xl font-bold py-2">3. Use of My Website</h2>
      <p class="pb-10 px-2">
        You agree to use my website only for lawful purposes and in a way that
        does not infringe the rights of, restrict or inhibit anyone else’s use
        and enjoyment of the website. Prohibited behaviour includes harassing or
        causing distress or inconvenience to any other user, transmitting
        obscene or offensive content, or disrupting the normal flow of dialogue
        within my website.
      </p>

      <h2 className="text-2xl font-bold py-2">4. Accuracy of Information</h2>
      <p class="pb-10 px-2">
        While I endeavour to ensure that all information on my website is
        accurate, I do not guarantee the completeness or correctness of such
        information. I also do not guarantee that my website or any content on
        it will always be available or be uninterrupted.
      </p>

      <h2 className="text-2xl font-bold py-2">5. External Links</h2>
      <p class="pb-10 px-2">
        My website may include links to external websites that are not provided
        or maintained by or in any way affiliated with me. Please note that I do
        not guarantee the accuracy, relevance, timeliness, or completeness of
        any information on these external websites.
      </p>

      <h2 className="text-2xl font-bold py-2">6. Amendments</h2>
      <p class="pb-10 px-2">
        I reserve the right to amend these Terms at any time. Your continued use
        of my website will be deemed as acceptance of any updated or amended
        terms.
      </p>

      <h2 className="text-2xl font-bold py-2">7. Governing Law</h2>
      <p class="pb-10 px-2">
        These Terms shall be governed in accordance with Australian law, and all
        disputes arising from these Terms will be under the jurisdiction of the
        courts of Australia.
      </p>

      <h2 className="text-2xl font-bold py-2">8. Contact Me</h2>
      <p class="pb-10 px-2">
        If you have any questions or concerns about these Terms, please contact
        me{" "}
        <Link href="#contact" alt="Contact form" className="text-primary">
          using the method below.
        </Link>
      </p>

      <p className="italic">Last updated: 9 June, 2023</p>
    </main>
  );
}
