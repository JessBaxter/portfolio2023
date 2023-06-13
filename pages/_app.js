import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

// Rendered on both server and client

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div data-theme="myTheme">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
