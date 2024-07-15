import {
  BanknotesIcon,
  DocumentTextIcon,
  ListBulletIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  expense: BanknotesIcon,
  transaction: DocumentTextIcon,
  categoryExpense: CurrencyDollarIcon,
  categoryTransaction: ListBulletIcon
};

export default async function SummaryCard({ title, value, type }) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}
