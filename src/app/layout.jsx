import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "Clean, modern portfolio showcasing projects, skills, and experience of a MERN full‑stack developer.",
  keywords: [
    "Full Stack Developer",
    "MERN",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Internship",
    "Portfolio",
  ],
  
  applicationName: "Deepti Devi Portfolio",
  authors: [{ name: "Deepti Devi" }],
  creator: "Deepti Devi",
  publisher: "Deepti Devi",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FAF7F2] text-[#18181B]">
        {children}
      </body>
    </html>
  );
}
