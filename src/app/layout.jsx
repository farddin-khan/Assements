
import './globals.css';
import Providers from '@/components/Providers';
import Nav from '@/components/Nav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
