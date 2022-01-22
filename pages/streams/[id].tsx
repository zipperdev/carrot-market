import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const StreamDetail: NextPage = () => {
    return (
        <Layout title="푸바표 만두 맛집 !세일중!" canGoBack>
            <div className="pb-4 px-4 space-y-4">
                <div className="flex flex-col">
                    <div className="w-full rounded-md shadow-sm bg-gray-300 aspect-video" />
                    <div className="mt-2">
                        <h3 className="text-gray-800 font-semibold text-2xl mt-2">푸바표 만두 맛집 !세일중!</h3>
                        <span className="text-3xl block mt-3 text-gray-900">&#x20a9;10</span>
                        <p className="text-base my-6 text-gray-700">
                            이는 얼마나 듣기만 것은 것이다. 주는 그들의 따뜻한 황금시대다. 소리다.이것은 있을 우리 낙원을 시들어 구할 미인을 무엇이 사막이다.
                            우리의 심장은 타오르고 그들에게 사라지지 없으면 동산에는 있는가? 그러므로 기쁘며, 안고, 피가 심장의 위하여서. 용기가 가치를 소담스러운 따뜻한 황금시대의 있다.
                            뼈 무엇을 생생하며, 부패를 황금시대다. 인생을 가지에 설산에서 미인을 가치를 소담스러운 영락과 때에, 보라. 능히 얼음에 이것이야말로 풀밭에 위하여서.
                        </p>
                    </div>
                </div>
                <div className="h-[50vh] py-5 overflow-y-scroll px-2 space-y-4 rounded-md">
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이요" reversed />
                    <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                    <Message comment="20만원이라고오오오오ㅗ오오오오오ㅗㅗ오ㅗ" reversed />
                    <div className="sticky w-full mx-auto max-w-md bottom-0 inset-x-0">
                        <div className="flex relative items-center">
                            <input type="text" className="shadow-sm rounded-full w-full border-gray-300 transition-colors focus:ring-orange-500 focus:border-orange-500 pr-12" />
                            <div className="absolute inset-y-0 flex items-start py-1.5 pr-1.5 right-0">
                                <button className="flex items-center justify-center bg-orange-500 rounded-full h-full px-4 text-sm select-none text-white transition focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500 hover:bg-orange-600">&#xE001;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default StreamDetail;