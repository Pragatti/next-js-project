
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Car Hub',
  description: 'Discover the Best Car in the World.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>{children}<Footer/></body>
    </html>
  )
}
