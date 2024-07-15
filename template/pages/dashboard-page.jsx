export default function Page() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">{/* 4's Summary Card */}</div>
      <div className="mt-6 pb-12">{/* Latest Transaction */}</div>
    </main>
  );
}
