import type { NextPage } from "next";
import FloatingButton from "@components/floatingButton";
import Item from "@components/item";
import Layout from "@components/layout";

const Home: NextPage = () => {
    return (
        <Layout title="홈" hasTabBar>
            <div className="flex flex-col relative space-y-5 divide-y-[1px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((v, i) => <Item
                    key={i}
                    id={v}
                    title="애플 iPhone 14"
                    price={95}
                    hearts={1}
                    comments={1}
                />)}
                <FloatingButton link="/items/upload">
                    <svg
                        className="h-8 w-8"
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export default Home;