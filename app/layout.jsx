import { Roboto_Flex } from 'next/font/google';
import './_styles/globals.css';
import Navigation from '../app/_components/navigation';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export const metadata = {
  title: 'Expense Tracker',
  description: 'Expense Tracker - Manage your daily income and expenditure'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className}`}>
        <div className="flex h-screen">
          <div className="w-64">
            <Navigation />
          </div>
          <div className="flex-grow p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
