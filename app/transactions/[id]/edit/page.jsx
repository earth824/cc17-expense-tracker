import EditForm from '../../_components/edit-form';

export default function Page() {
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between mb-6">
        <h1 className="text-2xl">Edit Transaction</h1>
      </div>
      <EditForm />
    </main>
  );
}
