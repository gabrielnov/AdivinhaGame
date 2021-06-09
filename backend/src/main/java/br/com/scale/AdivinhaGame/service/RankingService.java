package br.com.scale.AdivinhaGame.service;

import br.com.scale.AdivinhaGame.model.Game;
import br.com.scale.AdivinhaGame.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankingService {

    @Autowired
    GameRepository gameRepository;

    public List<Game> listGames(){
        return gameRepository.findAll();
    }


}
