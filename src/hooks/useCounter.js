import { useState } from "react";

export const useContador = (initialValue = 0) => {
    const [contador, setContador] = useState(initialValue);

    const incrementar = (valor = 1) => {
        setContador(contador + valor);
    };

    const decrementar = (valor = 1, negativo) => {
        if (!negativo && contador < 1) return  
        setContador(contador - valor);
    };

    const resetear = () => {
        setContador(0);
    };

    return { contador, incrementar, decrementar, resetear };
};

