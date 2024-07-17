import '@/app/globals.css';
import { robotoFlex } from './fonts';
import Navigation from './_components/navigation';

export const metadata = {
  title: {
    template: 'Expense Tracker : %s',
    default: 'Expense Tracker : Dashboard'
  },
  description: 'Expense Tracker - Easy manage daily income and expenditure'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} antialiased`}>
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
