import React from 'react'

export default class Game extends React.Component {

    state = {
        currentHand: [],
        dealerHand: [],
        deck: []
    }
    render() {
        return (
            <div>
                Blackjack
            </div>
        )
    }
}