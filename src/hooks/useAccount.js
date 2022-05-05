import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useAccount = () => {
    const [logged, setLogged] = useState(true);
    const router = useRouter();

    useEffect(() => {
        router.push('/');
        console.log(logged);
    }, []);

    const login = (email, password) => {
        console.log(email);
        console.log(password);
        setLogged(true);
    };

    return {
        logged,
        login,
    };
};

export default useAccount;