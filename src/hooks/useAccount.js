import { useState } from "react";

const useAccount = () => {
    const [logged, setLogged] = useState(true);

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