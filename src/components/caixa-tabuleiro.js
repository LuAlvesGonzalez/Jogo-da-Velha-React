import React from 'react'

// Criar a caixinha
export const Caixa = (props) => {
    return (
        <button className="caixinha" onClick={props.onClick}>
            {props.value}
        </button>
    )
}