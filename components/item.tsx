import Link from "next/link";

interface ItemProps {
    title: string;
    id: number;
    price: number;
    comments: number;
    hearts: number;
};

export default function Item({ title, id, price, comments, hearts }: ItemProps) {
    return (
        <Link href={`/items/${id}`}>
            <a className="flex px-4 cursor-pointer justify-between pt-4 first:pt-1.5">
                <div className="flex space-x-4">
                    <div className="w-20 h-20 aspect-square bg-gray-300 rounded-md" />
                    <div className="pt-2 flex flex-col">
                        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                        <span className="font-medium mt-1 text-gray-900">&#x20a9;{price}</span>
                    </div>
                </div>
                <div className="flex items-end justify-end space-x-2">
                    <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                        <span>{hearts}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            ></path>
                        </svg>
                        <span>{comments}</span>
                    </div>
                </div>
            </a>
        </Link>
    );
};