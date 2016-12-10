import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';

import * as playerActions from "../actions/player"
import PlayerEntry from "../components/PlayerEntry"

function mapStateToProps(state){
    const { PlayersReducer } = state

    return {
        players: PlayersReducer.get("players")
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(playerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEntry)