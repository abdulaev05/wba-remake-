import type { Metadata } from 'next';
import '@styles/globals.css';

//icons
import wbaIcon from '@images/favicons/favicon.ico';

export const metadata: Metadata = {
  title: 'WBA',
  description: 'ПВХ окна',
  icons: {
    icon: [
      {
        url: wbaIcon.src,
      },
    ],
  },
  keywords: 'пластиковые окна,пластиковые двери, фасад, алюминиевые двери, теплый алюминий, холодный алюминий',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
