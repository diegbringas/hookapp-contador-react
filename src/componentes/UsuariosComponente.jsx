import { useFetch } from "../hooks/useFetch"

export const UsuariosComponente = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <h1>Lista de Usuarios</h1>

            {isLoading ? (
                <h4>Cargando...</h4>
            ) : errors ? (
                <p>Ha ocurrido un error: {errors}</p>
            ) : (
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
