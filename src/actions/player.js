export function addPlayer(name = "anon", points = 0) {
    return (dispatch, getState) => {
        const { PlayersReducer } = getState()

        let skip = false
        PlayersReducer.get("players").forEach((player) => {
            if (player.get("name") === name && !skip) {
                skip = true
            }
        })
        if (skip) {
            return
        }
        
        dispatch({ type: "ADD_PLAYER", name, points })
    }
}

export function addPlayerEntry(name = "", kompo = {}) {
    return (dispatch, getState) => {
        const { PlayersReducer } = getState()
        let addNewPlayer = true

        PlayersReducer.get("players").forEach((player) => {
            if (player.get("name") === name && addNewPlayer) {
                addNewPlayer = false
            }
        })
        // Let's add new player
        if (addNewPlayer) {
            dispatch({ type: "ADD_PLAYER", name, kompo })
        } else {
        // Let's update existing player
            dispatch({ type: "UPDATE_PLAYER", name, kompo })
        }

    }
}

export function removePlayer(i){
    return (dispatch, getState) => {
        const { PlayersReducer } = getState()

        dispatch({ type: "REMOVE_PLAYER", i})
    }
}

export function addPoints(index, points) {
    return { type: "ADD_POINTS", index, points }
}
