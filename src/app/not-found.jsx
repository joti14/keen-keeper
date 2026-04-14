import Link from 'next/link';
import { RiHome2Line, RiErrorWarningLine } from 'react-icons/ri';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center">
            <div className="text-center flex flex-col items-center gap-6">

                <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center">
                    <RiErrorWarningLine className="text-[#244D3F] text-5xl" />
                </div>

                <div>
                    <h1 className="text-8xl font-bold text-[#244D3F]">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</h2>
                    <p className="text-gray-400 mt-2 max-w-sm">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <Link
                    href="/"
                    className="btn bg-[#244D3F] text-white gap-2 px-8"
                >
                    <RiHome2Line className="text-lg" />
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;