import React from 'react'

function Acertou({proximo}) {
    return (
        <div>
        <center>
          <p> Essa foi fácil. Deseja começar um novo jogo? </p>
          <button type="button" className="btn btn-success"  onClick={() => {proximo(-2)}}>Começar de novo</button>
       </center>
      </div>
    )
}

export default Acertou
