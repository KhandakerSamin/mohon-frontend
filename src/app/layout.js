import "./globals.css";
 
export const metadata = {
  title: "Abul Hashem Mohon",
  description: "Portfolio of Abul Hashem Mohon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Film grain/hazy texture overlay */}
        <div className="grain-overlay"></div>
        
        {children}
      </body>
    </html>
  );
}