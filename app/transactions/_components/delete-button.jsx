import { TrashIcon } from '@heroicons/react/24/outline';

export default function DeleteButton() {
  return (
    <form>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
