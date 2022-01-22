import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";

const CommunityPostDetail: NextPage = () => {
    return (
        <Layout title="근처에 푸바표 만두 맛집 있나요?" canGoBack>
            <div>
                <span className="inline-flex items-center my-3 mb-1 ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">동네질문</span>
                <div className="flex mb-3 cursor-pointer px-4 py-3 border-b items-center space-x-3">
                    <div className="w-10 h-10 rounded-full aspect-square bg-gray-300" />
                    <div>
                        <p className="text-sm font-medium text-gray-700">푸바</p>
                        <p className="text-xs font-medium text-gray-500">프로필 보기 &#xE001;</p>
                    </div>
                </div>
                <div>
                    <div className="mt-2 px-4 text-gray-700">
                        <span className="text-orange-500 font-medium">Q.</span> 근처에 푸바표 만두 맛집 있나요?
                    </div>
                    <div className="flex space-x-5 px-4 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full">
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
                </div>
                <div className="px-4 my-5 space-y-5">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-start space-x-3">
                            <div className="w-8 h-8 aspect-square bg-gray-300 rounded-full" />
                            <div>
                                <span className="text-sm block font-medium text-gray-700">푸바</span>
                                <span className="text-xs block text-gray-700">2시간 전</span>
                                <p className="text-gray-700 mt-1.5">
                                    최고의 푸바표 만두 맛집은 푸바로 11번가 쪽에 있어요.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-4">
                    <Textarea placeholder="답변을 달아주세요!" />
                    <Button text="답변하기" />
                </div>
            </div>
        </Layout>
    );
};

export default CommunityPostDetail;