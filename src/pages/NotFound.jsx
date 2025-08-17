export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-blue-950">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for doesn’t exist.</p>
      <a
        href="/"
        className="mt-4 text-2xl px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go to Home
      </a>
    </div>
  );
}