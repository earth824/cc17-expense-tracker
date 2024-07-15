import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default async function LatestTransaction() {
  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-4 text-2xl">Latest Transactions</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6 border-b">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/food.png"
                alt={`'s profile picture`}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">Food</p>
                <p className="text-sm text-gray-500">17/12/2024</p>
              </div>
            </div>
            <p className="truncate font-medium">121.50</p>
          </div>
        </div>
        <div className="bg-white px-6 border-b">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/food.png"
                alt={`'s profile picture`}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">Food</p>
                <p className="text-sm text-gray-500">17/12/2024</p>
              </div>
            </div>
            <p className="truncate font-medium">121.50</p>
          </div>
        </div>
        <div className="bg-white px-6 border-b">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/food.png"
                alt={`'s profile picture`}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">Food</p>
                <p className="text-sm text-gray-500">17/12/2024</p>
              </div>
            </div>
            <p className="truncate font-medium">121.50</p>
          </div>
        </div>
        <div className="bg-white px-6 border-b">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/food.png"
                alt={`'s profile picture`}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">Food</p>
                <p className="text-sm text-gray-500">17/12/2024</p>
              </div>
            </div>
            <p className="truncate font-medium">121.50</p>
          </div>
        </div>
        <div className="bg-white px-6">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/food.png"
                alt={`'s profile picture`}
                className="mr-4 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">Food</p>
                <p className="text-sm text-gray-500">17/12/2024</p>
              </div>
            </div>
            <p className="truncate font-medium">121.50</p>
          </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
