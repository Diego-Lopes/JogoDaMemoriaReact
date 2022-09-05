import { useEffect, useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameOver } from './components/GameOver';
import { game } from './game/game';

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, [])

  function Restart() {
    setGameOver(!gameOver);
    game.clearCards();
    setCards(game.createCardsFromTechs());
  }

  function onHandleFlip(card) {

    game.flipCard(card.id, () => setGameOver(true), () => setCards([...game.cards]));

    setCards([...game.cards]);

  }

  return (
    <div>
      <div className="contentTitle">
        <h1>Jogo da memória</h1>
      </div>
      <GameBoard cards={cards} onHandleFlip={onHandleFlip} />
      <GameOver show={gameOver} onRestart={Restart} />
      <footer>
        Feito por <a href="https://www.diegodev.com.br">Diego Lopes</a> 💖
      </footer>
    </div>
  )
}

export default MemoryGame;