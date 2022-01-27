import { useState } from "react";

interface UserMutationState {
    loading: boolean;
    data?: object;
    error?: object;
}

type UseMutationResult = [
    (data: any) => void, 
    UserMutationState
];

export default function useMutation(url: string): UseMutationResult {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ data, setData ] = useState<undefined | any>(undefined);
    const [ error, setError ] = useState<undefined | any>(undefined);
    function mutation(data: any) {
        setLoading(true);
        fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        })
        .then(res => res.json().catch(() => {}))
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    };
    return [
        mutation, 
        {
            loading, 
            data, 
            error
        }
    ];
};