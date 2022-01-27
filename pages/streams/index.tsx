import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floatingButton";
import Layout from "@components/layout";

const Stream: NextPage = () => {
    return (
        <Layout title="라이브" hasTabBar>
            <div className="flex flex-col relative divide-y-2 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((v, i) => (
                    <Link key={i} href={`/streams/${v}`}>
                        <a className="pt-4 px-4">
                            <div className="w-full rounded-md shadow-sm bg-gray-300 aspect-video" />
                            <h3 className="text-gray-700 text-lg mt-2">푸바표 만두 맛집 !세일중!</h3>
                        </a>
                    </Link>
                ))}
                <FloatingButton link="/streams/create">
                    <svg
                        className="h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
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
                </FloatingButton>
            </div>
        </Layout>
    );
};

export default Stream;