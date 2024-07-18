import { Suspense } from 'react';
import LatestTransaction from '../_components/latest-transaction';
import { CardSkeleton, TransactionsSkeleton } from '../_components/skeleton';
import AllSummary from '../_components/all-summary';

export default async function Page() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Suspense
          fallback={
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          }
        >
          <AllSummary />
        </Suspense>
      </div>
      <div className="mt-6 pb-12">
        <Suspense fallback={<TransactionsSkeleton />}>
          <LatestTransaction />
        </Suspense>
      </div>
    </main>
  );
}
