import React, { useState } from 'react';
import Acertou from './components/Acertou';
import Home from './components/Home';
import NovoJogo from './components/NovoJogo';

    
    function App() {
      
      const [etapaAtual, setEtapaAtual] = useState(0)
      const proximo = (operador) => {
        setEtapaAtual(etapaAtual + operador)
      }
            
      const telas = [<Home proximo={proximo} />,<NovoJogo proximo={proximo}/>, <Acertou proximo={proximo}/>] 
      
      return(<>{telas[etapaAtual]}</>)

  }

  export default App;