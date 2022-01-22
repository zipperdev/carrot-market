interface TextareaProps {
    placeholder?: string;
    [key: string]: any;
};

export default function Textarea({ placeholder, ...props }: TextareaProps) {
    return (
        <textarea
            {...props}
            rows={4}
            placeholder={placeholder}
            className="mt-1 shadow-sm w-full transition-colors focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300"
        />
    );
};