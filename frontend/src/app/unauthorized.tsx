import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">401 - Unauthorized</h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. Please log in with an account that has the required permissions.
        </p>
        <div className="flex flex-col space-y-4">
          <Link 
            href="/login" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
          >
            Go to Login
          </Link>
          <Link 
            href="/" 
            className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 text-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
