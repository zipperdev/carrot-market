import { className } from "@libs/client/utils"

interface MessageProps {
    comment: string;
    reversed?: boolean;
};

export default function Message({ comment, reversed=false }: MessageProps) {
    return (
        <div className={className("flex items-start space-x-2", reversed ? "flex-row-reverse space-x-reverse" : "")}>
            <div className="w-8 h-8 aspect-square rounded-full bg-gray-300 mt-[0.14rem]" />
            <div className="max-w-[50%] text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>{comment}</p>
            </div>
        </div>
    );
};