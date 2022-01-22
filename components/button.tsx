import { className } from "../libs/utils";

interface ButtonProps {
    isLarge?: boolean;
    text: string;
    [key: string]: any;
};

export default function Button({ isLarge = false, onClick, text, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={className(
                "mt-2.5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500", 
                isLarge ? "py-3 text-base" : "py-2 text-sm"
            )}
        >
            {text}
        </button>
    );
};