import {
  fetchMostCategoryExpense,
  fetchMostCategoryTransaction,
  fetchTotalExpense,
  fetchTotalTransaction
} from '../_lib/data';
import { formatCurrency } from '../_lib/utils';
import SummaryCard from './summary-card';

export default async function AllSummary() {
  const [
    totalExpense,
    totalTransaction,
    mostCategoryTransaction,
    mostCategoryExpense
  ] = await Promise.all([
    fetchTotalExpense(),
    fetchTotalTransaction(),
    fetchMostCategoryTransaction(),
    fetchMostCategoryExpense()
  ]);

  return (
    <>
      <SummaryCard
        title="Expense"
        value={formatCurrency(totalExpense)}
        type="expense"
      />
      <SummaryCard
        title="Transactions"
        value={totalTransaction}
        type="transaction"
      />
      <SummaryCard
        title={`${mostCategoryExpense.name} Expense`}
        value={formatCurrency(mostCategoryExpense.totalExpense)}
        type="categoryExpense"
      />
      <SummaryCard
        title={`${mostCategoryTransaction.name} Transactions`}
        value={mostCategoryTransaction.totalTransaction}
        type="categoryTransaction"
      />
    </>
  );
}
