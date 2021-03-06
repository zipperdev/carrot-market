import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Loved: NextPage = () => {
    return (
        <Layout title="관심목록" canGoBack>
            <div className="flex flex-col space-y-5 divide-y-[1px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((v, i) => <Item
                    key={i}
                    id={v}
                    title="애플 iPhone 14"
                    price={95}
                    hearts={1}
                    comments={1}
                />)}
            </div>
        </Layout>
    );
};

export default Loved;