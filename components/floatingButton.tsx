import Link from "next/link";

interface FloatingButtonProps {
    children: React.ReactNode;
    link: string;
    [key: string]: any;
};

export default function FloatingButton({ children, link, ...props }: FloatingButtonProps) {
    return (
        <Link href={link}>
            <a
                {...props}
                className="sticky flex items-center justify-center h-14 w-14 box-border bottom-32 ml-auto mr-5 bg-orange-400 shadow-xl rounded-full p-3 text-white cursor-pointer border-transparent transition-colors hover:bg-orange-500"
            >
                {children}
            </a>
        </Link>
    );
};