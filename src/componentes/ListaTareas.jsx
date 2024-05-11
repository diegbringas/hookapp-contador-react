import React, { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar reducer',
    finalizada: false
}];

const tareaReducer = (state, action) => {
    switch (action.type) {
        case '[TAREA] Agregar Tarea':
            return [...state, action.payload];
        case '[TAREA] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    };
                }
                return tarea;
            });
        case '[TAREA] Eliminar Tarea':
            return state.filter(item => item.id !== action.payload.id);
        case '[TAREA] Borrar Tarea':
            return [];
        default:
            return state;
    }
};

export const ListaTareas = () => {
    const [state, dispatch] = useReducer(tareaReducer, initialState);
    const { tarea, formState, onInputChange } = useForm({ tarea: '' });

    const agregarTareaForm = (event) => {
        event.preventDefault();
        if (!formState.tarea) return;
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        };
        dispatch({ type: '[TAREA] Agregar Tarea', payload: tarea });
    };

    const finalizarTarea = ({ id }) => {
        const action = {
            type: '[TAREA] Finalizar Tarea',
            payload: id
        };
        dispatch(action);
    };

    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREA] Eliminar Tarea',
            payload: { id } // Pass id as an object
        };
        dispatch(action);
    };


    const reset = () => {
        const action = {
            type :'[TAREA] Borrar Tarea',
            payload: ''
        };
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTareaForm}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Ingresa nueva tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresa tarea"
                        value={formState.tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
                <button className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
                {state.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>{item.tarea}</span>
                        <div>
                            <input
                                type="checkbox"
                                checked={item.finalizada} // Use checked attribute to control checkbox state
                                onChange={() => finalizarTarea(item)}
                            />
                            <button
                                className="btn btn-danger"
                                onClick={() => eliminarTarea(item)}
                            >
                                Borrar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
