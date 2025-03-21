
import './globals.css'

export const metadata = {
  title: 'Simple Click Logger',
  description: 'A simple app that logs clicks to MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
