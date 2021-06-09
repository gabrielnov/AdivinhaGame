package br.com.scale.AdivinhaGame.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {

    @Id @GeneratedValue
    public long id;

    private int numeroAtual;
    private String jogador;
    private int tentativas;
    private long tempoTotal;

    public Game(){}

    public Game(int numeroAtual, String jogador, int tentativas, long tempoTotal) {
        this.numeroAtual = numeroAtual;
        this.jogador = jogador;
        this.tentativas = tentativas;
        this.tempoTotal = tempoTotal;

    }

    public String getJogador() {
        return jogador;
    }

    public void setJogador(String jogador) {
        this.jogador = jogador;
    }

    public int getTentativas() {
        return tentativas;
    }

    public void setTentativas(int tentativas) {
        this.tentativas = tentativas;
    }

    public long getTempoTotal() {
        return tempoTotal;
    }

    public void setTempoTotal(long tempoTotal) {
        this.tempoTotal = tempoTotal;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getNumeroAtual() {
        return numeroAtual;
    }

    public void setNumeroAtual(int numeroAtual) {
        this.numeroAtual = numeroAtual;
    }
}
