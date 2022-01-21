import type { NextPage } from "next";

const Write: NextPage = () => {
    return <div className="px-4 py-10">
        <textarea
            rows={4}
            placeholder="질문하고 싶은게 있다면 물어보세요!"
            className="mt-1 shadow-sm w-full transition-colors focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300"
        />
        <button className="mt-2.5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">물어보기</button>
    </div>;
};

export default Write;