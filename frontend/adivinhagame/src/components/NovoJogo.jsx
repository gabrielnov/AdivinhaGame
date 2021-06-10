import React, {useState} from 'react'

function NovoJogo({proximo}) {
          
    const [numero, setNumero] = useState(parseInt(Math.random() * (+1000 - +0) + + 0) )

    async function pegarDados(status){
        
        const data = await fetch('http://localhost:8080/api/novoNumero?' +
        'numeroAtual=' + numero + '&status=' + status).then(response => response.json())

        if (status === 'IGUAL'){
            proximo(1)
        }

        if (data === 9999 || typeof(data) !== 'number'){
          alert('Opa! Parece que seu número é impossível. Vamos começar de novo?')
          proximo(-1)
        }
        else{          
          setNumero(data)
        }
      }

    return (
        <div>
          <center>
          <h1> Meu palpite é: </h1>
          <h2> {numero} </h2>
                    
            <button type="button" className="btn btn-dark mr-3" onClick={() => {pegarDados('MENOR')}}>Menor</button>
            <button type="button" className="btn btn-dark mr-3" onClick={() => {pegarDados('MAIOR')}}>Maior</button>

            <button type="button" className="btn btn-success" onClick={() => {pegarDados('IGUAL')}}>Igual</button><br/>
            
            <button type="button" className="btn btn-danger mt-2"  onClick={() => {proximo(-1)}}>Sair</button> 
            
          </center>
        </div>
    )

    
}

export default NovoJogo
