import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floatingButton";
import Layout from "@components/layout";

const Community: NextPage = () => {
    return (
        <Layout title="동네생활" hasTabBar>
            <div className="flex flex-col relative space-y-8">
                {[1, 2, 3, 4, 5, 6].map((v, i) => (
                    <Link href={`/community/${v}`} key={i}>
                        <a className="flex cursor-pointer flex-col items-start">
                            <span className="flex ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">동네질문</span>
                            <div className="mt-2 px-4 text-gray-700">
                                <span className="text-orange-500 font-medium">Q.</span> 근처에 푸바표 만두 맛집 있나요?
                            </div>
                            <div className="mt-5 px-4 flex item-center justify-between w-full text-gray-500 font-medium text-xs">
                                <span>푸바</span>
                                <span>18시간 전</span>
                            </div>
                            <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full">
                                <span className="flex space-x-2 items-center text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <span>궁금해요 1</span>
                                </span>
                                <span className="flex space-x-2 items-center text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        ></path>
                                    </svg>
                                    <span>답변 1</span>
                                </span>
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton link="/community/write">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export default Community;