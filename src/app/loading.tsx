export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 shadow-md"></div>
        
        <p className="animate-pulse text-sm font-medium text-slate-500">
          Memuat halaman...
        </p>
      </div>
    </div>
  );
}