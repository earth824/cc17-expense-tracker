import { Suspense } from 'react';
import { TableSkeleton } from '../_components/skeleton';
import CreateButton from './_components/create-button';
import Pagination from './_components/pagination';
import Search from './_components/search';
import TransactionList from './_components/transaction-list';
import { fetchTotalPageByQuery } from '../_lib/data';

export const metadata = {
  title: 'Transaction'
};

export default async function Page({ searchParams }) {
  const query = searchParams.term || '';
  const currentPage = +searchParams.page || 1;
  const totalPages = await fetchTotalPageByQuery(query);
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Transactions</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search transactions..." />
        <CreateButton />
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <TransactionList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
