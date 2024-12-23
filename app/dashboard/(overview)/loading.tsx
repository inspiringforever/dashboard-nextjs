import '@/app/ui/dashboard/animate/load.css'
import DashboardSkeleton from '@/app/ui/skeletons'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Loading',
};

export default function Loading() {
  return (
  <>
      <DashboardSkeleton/>

    {/* <div className="flex  items-center justify-center min-h-screen flex-col">
        <h1 className="text-3xl font-bold text-gray-600 mb-4 p-4 rounded-[28px] bg-gray-100">Loading</h1>
        <div className="loader h-8 w-8">
          <span></span>
          <span></span>
        </div>
    </div> */}
  </>
  )
}
