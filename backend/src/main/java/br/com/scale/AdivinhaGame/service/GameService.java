package br.com.scale.AdivinhaGame.service;

import br.com.scale.AdivinhaGame.model.Game;
import br.com.scale.AdivinhaGame.repository.GameRepository;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GameService {

    @Autowired
    GameRepository gameRepository;

    List<Integer> numerosTentados = new ArrayList<>();
    Random random = new Random();
    int min = 0;
    int max = 1000;
    int tentativas = 0;
    String jogador;
    int numeroAleatorio;
    long tempoInicial = System.currentTimeMillis();
    long tempoTotal;

    public int gerarNovoNumero(int numeroAtual, String status) {

        if (status.equals("MAIOR")) {
            min = numeroAtual + 1;
        }
        if (status.equals("MENOR")) {
            max = numeroAtual - 1;
        }
        if (status.equals("IGUAL")) {
            tempoTotal = System.currentTimeMillis() - tempoInicial;
            finalizarJogo(numeroAtual, jogador, tentativas, tempoTotal);
        }

        try {
            numeroAleatorio = random.nextInt((max - min) + 1) + min;
        }catch(BeanCreationException | IllegalArgumentException ex){
            return 9999;
        }

        System.out.println("Min: " + min + " max: " + max);
        System.out.println("numero atual: " + numeroAtual + " Status: " + status);
        System.out.println("Numero gerado agora: " + numeroAleatorio);
        System.out.println("Tempo total: " + tempoTotal);

        tentativas++;
        numerosTentados.add(numeroAleatorio);
        return numeroAleatorio;

    }

    private void finalizarJogo(int numeroAtual, String jogador, int tentativas, long tempoTotal) {

        Game game = new Game(numeroAtual, jogador, tentativas, tempoTotal);
        gameRepository.save(game);
    }

    public void novoJogo(String jogador) {
        this.jogador = jogador;
        min = 0;
        max = 1000;
        tentativas = 1;

        System.out.println("começando novo jogo! Jogador: " +jogador);

    }
}

