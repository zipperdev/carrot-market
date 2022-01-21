import type { NextPage } from "next";

const Chats: NextPage = () => {
    return <div className="py-10 divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
            <div key={i} className="flex px-4 py-3 cursor-pointer items-center space-x-3">
                <div className="w-12 h-12 rounded-full aspect-square bg-gray-300" />
                <div>
                    <p className="text-gray-700">푸바</p>
                    <p className="text-sm text-gray-500">내일 푸바빌라 주차장에서 오후 2시에 만나요!</p>
                </div>
            </div>
        ))}
    </div>;
};

export default Chats;