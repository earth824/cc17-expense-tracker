import CreateButton from './_components/create-button';
import Pagination from './_components/pagination';
import Search from './_components/search';
import TransactionList from './_components/transaction-list';

export default function Page() {
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Transactions</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search transactions..." />
        <CreateButton />
      </div>
      <TransactionList />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={5} />
      </div>
    </main>
  );
}
