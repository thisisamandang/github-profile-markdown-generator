import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
