import { useMemo, useState } from "react";

export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([2, 3, 4, 5, 6, 7, 8]);
    const [show, setShow] = useState(true);  

    const getCalculo = useMemo(() => {
        console.log('calculando');
        return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]);

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
        console.log(listaNumeros)
    }

    return (
        <>
            <h2>calculo:</h2>
            <p>{show && getCalculo}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            <button onClick={agregarNumero}>Agregar Num</button>
        </>
    );
}

