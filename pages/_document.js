import { Head, Html, Main, NextScript } from "next/document";

// Only rendered on server

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
