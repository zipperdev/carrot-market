import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
    return (
        <Layout title="푸바님과의 채팅" canGoBack>
            <div className="pb-14 px-4 space-y-4">
                <Message comment="안녕하세요? 구매할려고 하는데 지금 얼마에 파나요?" />
                <Message comment="20만원이요" reversed />
                <Message comment="미쳤어" />
                <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
                    <div className="flex relative items-center">
                        <input type="text" className="shadow-sm rounded-full w-full border-gray-300 transition-colors focus:ring-orange-500 focus:border-orange-500 pr-12" />
                        <div className="absolute inset-y-0 flex items-start py-1.5 pr-1.5 right-0">
                            <button className="flex items-center justify-center bg-orange-500 rounded-full h-full px-4 text-sm select-none text-white transition focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-orange-500 hover:bg-orange-600">&#xE001;</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatDetail;