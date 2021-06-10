import React, {useState, useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Home({proximo}) {
    const [jogador, setJogador] = useState('Anônimo')
    const [ranking, setRanking] = useState([])

    const handleInputChange = (event) => {            
        setJogador(event.target.value)
      }        
      
    const enviarDados = (event) => {       
        event.preventDefault()
        comecarNovoJogo(jogador)
        proximo(1)
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/ranking')
        .then(response => response.json()).then((data) => {
        return setRanking([...ranking, ...data])
      });        
    }, [])
        
    async function comecarNovoJogo(jogador){
        await fetch("http://localhost:8080/api/novoJogo?jogador=" + jogador)                
    } 

    return (
        <div className="form-group" >
        {console.log(ranking)}
        <form onSubmit={enviarDados}>
          <input type="text" maxLength="50" placeholder="Digite seu nome..." onChange={handleInputChange}/><br/>
          <input className="btn btn-secondary mt-3" type="submit" value="Play" />  
        </form>
        <div className="mt-3">
                <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Jogador</TableCell>
                    <TableCell align="right">Número Adivinhado</TableCell>
                    <TableCell align="right">Tentativas</TableCell>                    
                </TableRow>

                </TableHead>
                <TableBody>
                {ranking.map((rank) => (
                    <TableRow key={rank.id}>
                    <TableCell align="right">{rank.id}</TableCell>
                    <TableCell align="right">{rank.jogador}</TableCell>
                    <TableCell align="right">{rank.numeroAtual}</TableCell>
                    <TableCell align="right">{rank.tentativas}</TableCell>
                   </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
        </div>
    )
}

export default Home
