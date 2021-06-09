package br.com.scale.AdivinhaGame.controller;

import br.com.scale.AdivinhaGame.model.Game;
import br.com.scale.AdivinhaGame.service.GameService;
import br.com.scale.AdivinhaGame.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class GameController {

    @Autowired
    GameService gameService = new GameService();

    @Autowired
    RankingService rankingService = new RankingService();


    int novoNumero;

    @GetMapping("/novoNumero")
    @ResponseBody
    public ResponseEntity<Integer> iniciar(@RequestParam int numeroAtual, @RequestParam String status){

        novoNumero = gameService.gerarNovoNumero(numeroAtual, status);
        return ResponseEntity.ok().body(novoNumero);
    }

    @GetMapping("/novoJogo")
    @ResponseBody
    public ResponseEntity<?> novoJogo(@RequestParam String jogador){

        gameService.novoJogo(jogador);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/ranking")
    @ResponseBody
    public ResponseEntity<List<Game>> ranking(){

        return ResponseEntity.ok().body(rankingService.listGames());
    }



}
