import { Inter } from "next/font/google";
import "./globals.css";

import ReduxProvider from "../components/provider/redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Blog App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <ReduxProvider>
            <body className={inter.className}>{children}</body>
         </ReduxProvider>
      </html>
   );
}
