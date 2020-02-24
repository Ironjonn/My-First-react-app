import React from 'react';

const Card = (props) => {


    
    let tipo = '';
   

    if (props.tipo === "Fuego") {
        tipo = 'bg-danger card text-white text-center bg-primary mb-3';
    }
    
    if (props.tipo === "Agua") {
        tipo = 'bg-primary card text-white text-center bg-primary mb-3';
    }

    if (props.tipo === "Roca") {
        tipo = 'bg-secondary card text-white text-center bg-primary mb-3';
    }

    if (props.tipo === "electrico") {
        tipo = 'bg-warning card text-white text-center bg-primary mb-3';
    }
    

    return (
        <div>


            <div className={tipo} style={{ maxwidth: "15rem", width: "15rem" }}>
                <div className="card-header">{props.pokemon}</div>
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={props.imagen}></img>
                    </h5>
                    <p className={tipo}>{props.tipo}</p>
                    
                </div>
            </div>


        </div>
    );
}

export default Card;