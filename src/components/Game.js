import React from 'react'

let cards = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let suits = ['SPADES', 'CLUBS', 'HEARTS', 'DIAMONDS']

export default class Game extends React.Component {

    state = {
        currentHand: [],
        dealerHand: [],
        deck: []
    }


    shuffle() {

    }

    drawCard() {
        //return this.state.deck.shift()
    }

    render() {
        return (
            <div>
                Blackjack
            </div>
        )
    }
}