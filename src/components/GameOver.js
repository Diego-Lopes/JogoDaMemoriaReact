

export function GameOver(props) {


  return (
    props.show ? <div id="gameOver">
      <div>
        <p>Parabéns, você completou o jogo!</p>
      </div>
      <button id="restart" onClick={props.onRestart}>Jogue novamente</button>
    </div> : <></>
  )
}