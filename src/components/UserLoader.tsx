export default function UserLoader() {
  return (
    <div className="flex justify-center">
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white-600 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
