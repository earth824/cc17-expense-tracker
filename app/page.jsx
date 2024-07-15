import LatestTransaction from '../app/_components/latest-transaction';
import SummaryCard from '../app/_components/summary-card';

export default function Page() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <SummaryCard title="Expense" type="expense" value="555" />
        <SummaryCard title="Transactions" type="transaction" value="124" />
        <SummaryCard
          title="Food Expense"
          type="categoryExpense"
          value="1021.00"
        />
        <SummaryCard
          title="Food Transaction"
          type="categoryTransaction"
          value="22"
        />
      </div>

      <div className="mt-6 pb-12">
        <LatestTransaction />
      </div>
    </main>
  );
}
