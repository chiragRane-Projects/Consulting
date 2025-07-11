import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
 weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Consulting - Business Agency",
  description: "Developed by Chirag Rane. Design inspired from Framer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
