import { Inter } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "@/components/Auth/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "daulric",
  description: "About Ulric",
  icons: {
    apple: "/logo.png",
    icon: "/logo.png"
  },

  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session} >{children}</SessionProvider> 
      </body>
    </html>
  );
}
