
import "./globals.css";


export default function RootLayout({children}) {
  return (
    <>
    <html lang="en">
      <body>
        <Headers/>
      <main className="p-4">{children}</main>
      </body>
    </html>
    </>
  )
}
