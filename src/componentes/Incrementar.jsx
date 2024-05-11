import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {

    return (
        <button onClick={() => incrementar(5)}>+1</button>
    );
});
