/* eslint-disable @next/next/no-page-custom-font */
import { ThemeProvider } from "@/components/Global/Theme-Provider";
import "./globals.css";

export const metadata = {
  title: "Abul Hashem Mohon",
  description: "Portfolio of Abul Hashem Mohon",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="https://i.ibb.co.com/7xZ5sTJH/Mohon-Hero-for-Preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abul Hashem Mohon" />
        <meta property="og:description" content="Portfolio of Abul Hashem Mohon" />
        <link rel="icon" href="/favicon2.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
