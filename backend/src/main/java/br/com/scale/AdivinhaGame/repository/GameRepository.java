package br.com.scale.AdivinhaGame.repository;

import br.com.scale.AdivinhaGame.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}
