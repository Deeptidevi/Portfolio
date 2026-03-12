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
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
