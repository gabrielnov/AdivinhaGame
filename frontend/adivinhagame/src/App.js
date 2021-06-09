import React, { useState } from 'react';
    
    function App() {

      
      const numeroAleatorio = parseInt(Math.random() * (+1000 - +0) + + 0)     
      const [numero, setNumero] = useState(numeroAleatorio)
      const [novoJogo, setNovoJogo] = useState(false)
      const [jogador, setJogador] = useState('anônimo')
      const [inicio, setInicio] = useState(true)
      const [acertou, setAcertou] = useState(false)   

      
      const handleInputChange = (event) => {            
        setJogador(event.target.value)
      }

      const enviarDados = (event) => {       
        event.preventDefault()
        setInicio(false)
        setNovoJogo(true)
        comecarNovoJogo(jogador)        
      }

      if(inicio)
      return(
      <div className="form-group">
       
        <form onSubmit={enviarDados}>
          <input type="text" maxLength="50" placeholder="Digite seu nome..." onChange={handleInputChange}/><br/>
          <input className="btn btn-secondary mt-3" type="submit" value="Play" />
          
        </form>
      </div>
    )         

      if(novoJogo){
        return (              
        <div>
          <center>
          <h1> Meu palpite é: </h1>
          <h2> {numero} </h2>
          <button type="button" className="btn btn-dark mr-3" onClick={() => {pegarDados('MENOR')}}>Menor</button>
          <button type="button" className="btn btn-dark mr-3" onClick={() => {pegarDados('MAIOR')}}>Maior</button>
          <button type="button" className="btn btn-success" onClick={() => {pegarDados('IGUAL'); setAcertou(true); setNovoJogo(false)}}>Igual</button><br/>
          <button type="button" className="btn btn-danger mt-2"  onClick={() => {setInicio(true); setAcertou(false)}}>Sair</button>
          </center>
        </div>)       
      }

      if(acertou){      
            return(          
          <div>
            <center>
              <p> Essa foi fácil. Deseja começar um novo jogo? </p>
              <button type="button" className="btn btn-success"  onClick={() => {setInicio(true);setAcertou(false) }}>Começar de novo</button>
           </center>
          </div>
            )}        

    
      async function comecarNovoJogo(jogador){
        await fetch("http://localhost:8080/api/novoJogo?jogador=" + jogador)
        setNovoJogo(true)        
      }
      
      async function pegarDados(status){
        const data = await fetch('http://localhost:8080/api/novoNumero?' +
        'numeroAtual=' + numero + '&status=' + status).then(response => response.json())
        if (data === 9999 || typeof(data) !== 'number'){
          alert('Opa! Parece que seu número é impossível. Vamos começar de novo?')
          setInicio(true)
          setNovoJogo(true)  
        }
        else{          
          setNumero(data)
        }
      }
    

  }
    export default App;