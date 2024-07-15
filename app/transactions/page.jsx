import CreateButton from './_components/create-button';
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
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table
          query={searchParams?.term || ''}
          currentPage={Number(searchParams?.page) || 1}
        />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </main>
  );
}
