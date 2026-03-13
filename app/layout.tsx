import "./globals.css"

export const metadata = {
  title: "Tımarhane27",
  description: "Gaziantep Korku Evi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
