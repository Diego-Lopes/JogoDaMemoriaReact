import { CardElement } from "./CardElement";


export function GameBoard(props) {
  return (
    <div id="gameBoard" >
      {props.cards.map((card, index) => <CardElement onHandleFlip={props.onHandleFlip} card={card} key={index} />)}
    </div>
  )
}