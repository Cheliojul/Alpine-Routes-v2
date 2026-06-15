import '../scss/main.scss';

export const metadata = {
  title: 'Alpine Routes — Premium Alpine Transfers',
  description:
    'Alpine Routes — premium private airport shuttles and ski-resort transfers across the Alps. Chauffeured, weather-ready, and timed to your flight.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Bricolage Grotesque (display) + Inter (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
