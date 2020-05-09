import React from 'react'

let cards = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

export default class Game extends React.Component {

    state = {
        currentHand: [],
        dealerHand: [],
        deck: []
    }


    shuffle() {

    }

    render() {
        return (
            <div>
                Blackjack
            </div>
        )
    }
}