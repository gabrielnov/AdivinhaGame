<h1> AdivinhaGame </h1>

<p> Para rodar o projeto você deve: </p>

<ul>
<li> Rodar a classe \backend\src\main\java\br\com\scale\AdivinhaGame\AdivinhaGameApplication.java</li>
<li> Abrir um terminal e navegar até a pasta \frontend\adivinhagame </li>
<li> rodar o comando  npm start </li>
</ul>

<p> Aplicação em funcionamento: </p>
<img src='https://github.com/gabrielnov/AdivinhaGame/blob/main/Screenshots/1.PNG'> 
<img src='https://github.com/gabrielnov/AdivinhaGame/tree/main/Screenshots/2.png'> 
<img src='https://github.com/gabrielnov/AdivinhaGame/tree/main/Screenshots/3.png'> 
<img src='https://github.com/gabrielnov/AdivinhaGame/tree/main/Screenshots/4.png'> 

<p> Rotas da API: </p>
<ul> 
<li> api/novoNumero  - retorna um novo número e salva o jogo caso acerte o número </li>
<li> api/novoJogo    - zera as configurações do jogo atual </li>
<li> api/ranking     - retorna uma lista com as partidas salvas no banco de dados (h2:mem)</li>
</ul>

<p> O que falta: </p>
<ul> 
<li> Ordenação das partidas passadas por n° tentativas e tempo </li>
<li> Exibição do ranking </li>
</ul>
