interface InputProps {
    label: string;
    name: string;
    kind?: "text" | "price" | "phone";
    [key: string]: any;
};

export default function Input({ label, name, kind, ...props }: InputProps) {
    return (
        <div>
            <label htmlFor={name} className="text-sm font-medium text-zinc-700">
                {label}
            </label>
            {kind === "text" ? (
                <div className="rounded-md relative flex items-center shadow-sm mt-1">
                    <input
                        {...props}
                        id={name}
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 transition-colors focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                </div>
            ) : null}
            {kind === "price" ? (
                <div className="rounded-md relative flex items-center shadow-sm">
                    <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-sm">&#x20a9;</span>
                    </div>
                    <input {...props} id={name} className="appearance-none pl-7 pr-20 w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 transition-colors focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">원 &#40;KRW&#41;</span>
                    </div>
                </div>
            ) : null}
            {kind === "phone" ? (
                <div className="rounded-md flex shadow-sm">
                    <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">+82</span>
                    <input {...props} id={name} className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 transition-colors focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                </div>
            ) : null}
        </div>
    );
};