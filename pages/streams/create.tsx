import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const CreateStream: NextPage = () => {
    return (
        <Layout title="라이브하기" canGoBack>
            <div className="px-4 space-y-5">
                <Input label="이름" name="name" kind="text" required />
                <Input label="가격" name="price" kind="price" type="number" placeholder="0.00" required />
                <div>
                    <label className="mb-1 block text-sm font-medium text-zinc-700">설명</label>
                    <Textarea />
                </div>
                <Button text="라이브 시작하기" />
            </div>
        </Layout>
    );
};

export default CreateStream;