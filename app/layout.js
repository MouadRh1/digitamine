import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContactButton from "./components/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⚠️ IMPORTANT : Anton n'a QU'UN SEUL poids (400).
// C'est une police "mono-poids" → elle est déjà très épaisse visuellement.
const anton = Anton({
  variable: "--font-display",   // ← même nom que dans globals.css
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "DIGITAMINE — Creative Digital Agency",
  description: "DIGITAMINE combines strategy, creative direction, content and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}