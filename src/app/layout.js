import './globals.css';
import Header from '@/Header/Header';
import Home from '@/Home/Home';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Home />
      </body>
    </html>
  );
}
