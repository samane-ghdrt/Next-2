import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <footer>
          <h3>footer</h3>
        </footer>
      </body>
    </html>
  );
}