import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import Textarea from "@components/textarea";

const Write: NextPage = () => {
    return (
        <Layout title="물어보기" canGoBack>
            <div className="px-4">
                <Textarea placeholder="질문하고 싶은게 있다면 물어보세요!" />
                <Button text="물어보기" />
            </div>
        </Layout>
    );
};

export default Write;