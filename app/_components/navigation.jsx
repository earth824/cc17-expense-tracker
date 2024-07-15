import Image from 'next/image';
import Link from 'next/link';
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
      <Link
        className="flex items-center gap-3 rounded-md bg-gray-900 p-4"
        href="/"
      >
        <Image alt="logo" src="/logo.png" width={40} height={40} />
        <span className="text-yellow-400 font-bold text-lg">
          Expense Tracker
        </span>
      </Link>
      <div className="flex flex-col grow gap-2">
        {links.map(link => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-rose-50 hover:text-red-500"
            >
              <LinkIcon className="w-6" />
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
