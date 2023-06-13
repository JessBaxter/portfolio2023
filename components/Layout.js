import Head from "next/head";
import ScrollToTopButton from "./utils/ScrollToTopButton";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jess Baxter: A fullstack web developer and qualified teacher, with a special interest in accessibility."
        />

        <title>Jess Baxter: Fullstack Web Dev</title>
        <link rel="canonical" href="https://jessbaxter.info" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        {children}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
