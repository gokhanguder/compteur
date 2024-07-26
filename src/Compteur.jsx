import React from "react";

class Compteur extends React.Component{

    render() {

        const {count, onClickAdd, onClickSubstract} = this.props;

return(

    <div>
        <h1>Compteur: {count} </h1>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSubstract}>-</button>
    </div>
)
}
}

export default Compteur;