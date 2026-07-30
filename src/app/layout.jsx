import './globals.css'

export const metadata = {
  title: 'KA-MO DESIGN - Mobilier la Comandă',
  description: 'Mobilier personalizat, consiliere, proiectare și montaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
