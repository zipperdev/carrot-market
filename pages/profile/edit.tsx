import type { NextPage } from "next";
import Input from "../../components/input";
import Layout from "../../components/layout";

const EditProfile: NextPage = () => {
    return (
        <Layout title="프로필 편집하기" canGoBack>
            <div className="px-4 space-y-5">
                <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 aspect-square rounded-full bg-gray-300" />
                    <label htmlFor="avatar" className="cursor-pointer px-2 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none text-gray-700">
                        아바타 편집하기
                        <input id="avatar" type="file" accept="image/*" className="hidden" />
                    </label>
                </div>
                <Input label="이메일 주소" name="email" kind="text" type="email" required />
                <Input label="휴대폰 번호" name="phone" kind="phone" type="number" required />
                <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    프로필 편집하기
                </button>
            </div>
        </Layout>
    );
};

export default EditProfile;