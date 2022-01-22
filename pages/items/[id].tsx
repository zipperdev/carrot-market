import type { NextPage } from "next";
import Link from "next/link";
import Button from "../../components/button";
import Layout from "../../components/layout";

const ItemDetail: NextPage = () => {
    return (
        <Layout title="삼성 Galaxy S50" canGoBack>
            <div className="py-3.5 px-4">
                <div className="mb-6">
                    <div className="h-96 bg-gray-300" />
                    <div className="flex py-3 cursor-pointer border-y items-center space-x-3">
                        <div className="w-12 h-12 rounded-full aspect-square bg-gray-300" />
                        <div>
                            <p className="text-sm font-medium text-gray-700">푸바</p>
                            <p className="text-xs font-medium text-gray-500">프로필 보기 &#xE001;</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-gray-900">삼성 Galaxy S50</h1>
                        <span className="text-3xl block mt-3 text-gray-900">&#x20a9;140</span>
                        <p className="text-base my-6 text-gray-700">
                            이는 얼마나 듣기만 것은 것이다. 주는 그들의 따뜻한 황금시대다. 소리다.이것은 있을 우리 낙원을 시들어 구할 미인을 무엇이 사막이다.
                            우리의 심장은 타오르고 그들에게 사라지지 없으면 동산에는 있는가? 그러므로 기쁘며, 안고, 피가 심장의 위하여서. 용기가 가치를 소담스러운 따뜻한 황금시대의 있다.
                            뼈 무엇을 생생하며, 부패를 황금시대다. 인생을 가지에 설산에서 미인을 가치를 소담스러운 영락과 때에, 보라. 능히 얼음에 이것이야말로 풀밭에 위하여서.
                        </p>
                        <div className="flex items-center justify-between space-x-2">
                            <Button text="판매자와 대화하기" isLarge />
                            <button className="p-3 rounded-md mt-2.5 flex items-center justify-center transition-colors text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                <svg
                                    className="h-6 w-6 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">비슷한 물건</h2>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((v, i) => (
                        <Link key={i} href={`/items/${v}`}>
                            <a className="cursor-pointer">
                                <div className="h-56 w-56 mb-4 aspect-square bg-gray-300" />
                                <h3 className="text-gray-700 -mb-1">삼성 Galaxy S60</h3>
                                <span className="text-xs font-medium text-gray-900">&#x20a9;200</span>
                            </a>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;