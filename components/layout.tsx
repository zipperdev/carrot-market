import Link from "next/link";
import { useRouter } from "next/router";
import { className } from "../libs/utils";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
};

export default function Layout({ title, canGoBack, hasTabBar, children }: LayoutProps) {
    const router = useRouter();
    const onClick = () => {
        router.back();
    };
    return <div>
        <div className="bg-white z-10 w-full max-w-xl text-lg font-medium py-3 fixed texet-gray-700 border-b top-0 flex items-center justify-center text-gray-700">
            {canGoBack ? <button onClick={onClick} className="absolute left-5 text-2xl h-10 w-10 roundedsmd aspect-square transition-colors hover:bg-gray-50">&#xE000;</button> : null}
            {title ? <span>{title.slice(0, 22)}{title.length > 22 ? "..." : ""}</span> : null}
        </div>
        <div className={className("pt-16", hasTabBar ? "pb-2" : "")}>
            {children}
        </div>
        {hasTabBar ? <nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-5 py-3 flex justify-between text-xs">
            <Link href="/">
                <a className={className(
                        "flex-grow flex flex-col items-center space-y-1", 
                        router.pathname === "/" ? "text-orange-500" : "hover:text-gray-500 transition-colors")
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    <span className="font-medium">홈</span>
                </a>
            </Link>
            <Link href="/community">
                <a className={className(
                        "flex-grow flex flex-col items-center space-y-1", 
                        router.pathname === "/community" ? "text-orange-500" : "hover:text-gray-500 transition-colors")
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                    </svg>
                    <span className="font-medium">동네생활</span>
                </a>
            </Link>
            <Link href="/chats">
                <a className={className(
                        "flex-grow flex flex-col items-center space-y-1", 
                        router.pathname === "/chats" ? "text-orange-500" : "hover:text-gray-500 transition-colors")
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                    <span className="font-medium">채팅</span>
                </a>
            </Link>
            <Link href="/streams">
                <a className={className(
                        "flex-grow flex flex-col items-center space-y-1", 
                        router.pathname === "/streams" ? "text-orange-500" : "hover:text-gray-500 transition-colors")
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                    <span className="font-medium">라이브</span>
                </a>
            </Link>
            <Link href="/profile">
                <a className={className(
                        "flex-grow flex flex-col items-center space-y-1", 
                        router.pathname === "/profile" ? "text-orange-500" : "hover:text-gray-500 transition-colors")
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    <span className="font-medium">마이캐럿</span>
                </a>
            </Link>
        </nav> : null}
    </div>;
};