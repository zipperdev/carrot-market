import type { NextPage } from "next";

const Upload: NextPage = () => {
    return (
        <div className="px-4 py-10">
            <div>
                <div>
                    <label className="w-full cursor-pointer transition-colors flex text-gray-600 hover:border-orange-500 hover:text-orange-500 items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                        <svg
                            className="h-12 w-12"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className="my-5">
                <label htmlFor="price" className="mb-1 block text-sm font-medium text-zinc-700">가격</label>
                <div className="rounded-md relative flex items-center shadow-sm">
                    <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-sm">&#x20a9;</span>
                    </div>
                    <input id="price" type="text" placeholder="0.00" className="appearance-none pl-7 pr-20 w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 transition-colors focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">원 &#40;KRW&#41;</span>
                    </div>
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">설명</label>
                <textarea rows={4} className="mt-1 shadow-sm w-full transition-colors focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300" />
            </div>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">물건 올리기</button>
        </div>
    );
};

export default Upload;