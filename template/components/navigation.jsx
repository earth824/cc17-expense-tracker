import {
  TvIcon,
  HomeIcon,
  DocumentCurrencyDollarIcon
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  {
    name: 'Transactions',
    href: '/transactions',
    icon: DocumentCurrencyDollarIcon
  },
  { name: 'About', href: '/about', icon: TvIcon }
];

export default function Navigation() {
  return (
    <div className="flex h-full flex-col p-4 gap-6">
      <a
        className="flex items-center gap-3 rounded-md bg-gray-900 p-4"
        href="/"
      >
        <img alt="logo" src="/logo.png" />
        <span className="text-yellow-400 font-bold text-lg">
          Expense Tracker
        </span>
      </a>
      <div className="flex flex-col grow gap-2">
        <a
          href="/"
          className="flex items-center gap-2 rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-rose-50 hover:text-red-500"
        >
          <HomeIcon className="w-6" />
          <p>Home</p>
        </a>
      </div>
    </div>
  );
}
