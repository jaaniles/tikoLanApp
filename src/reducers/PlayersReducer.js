import { fromJS, Map } from "immutable"

const initialState = fromJS({
    players: [],
})

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PLAYER":
        {
            const { name, kompo } = action

            return state.update("players", (players) => {
                return players.push(fromJS({
                    name,
                    kompot: [
                        {
                            kompo: kompo.get("kompo"),
                            points: kompo.get("points")
                        }
                    ]
                }))
            })
        }
        case "UPDATE_PLAYER":
        {
            const { name, kompo } = action
            const players = state.get("players")

            const index = players.findIndex(list => {
                return list.get("name") === name
            })

            return state.updateIn(["players", index, "kompot"], (kompot) => {
                return kompot.push(kompo)
            })
            /*
            return state.updateIn(["players", index, "points"], (value) => {
                return Math.max(0, value + points)
            })
            */
        }
        case "ADD_POINTS":
        {
            const { index, points } = action

            return state.updateIn(["players", index, "points"], (value) => {
                return Math.max(0, value + points)
            })
        }
        case "REMOVE_PLAYER":
        {
            const { i } = action

            return state.update("players", (players) => {
                return players.delete(i, 1)
            })

        }
        default:
        {
            return state
        }
    }
}
