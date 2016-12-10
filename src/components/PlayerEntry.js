import React from "react"

export default function PlayerEntry(props){
    const { players, addPoints, removePlayer, addPlayerEntry } = props

    return (
        <div className="leaderboard_div">
            {players.map(function(player, i) {
                const name = player.get("name")
                const kompot = player.get("kompot")
                const totalPoints = countPlayerTotalPoints(kompot)
                return (
                    <div key={i}>
                        <div className="playername">
                           {totalPoints}p. <b>{name}</b>
                            <div className="pull-right">
                                <button className="remove_player" onClick={removePlayer.bind(null, i)}>
                                X
                                </button>
                            </div>
                        </div>
                        {
                            kompot.map(function(kompo, j) {
                               return <PlayerKompo key={j} kompo={kompo} {...kompo}/>
                            })
                        }
                        {/*<button onClick={addPoints.bind(null, i, 1)}>+</button>
                        <button onClick={addPoints.bind(null, i, -1)}>-</button>
                        */}
                        <hr/>
                    </div>    
                )
            })}
        </div>
    )
}
function PlayerKompo({kompo}) {
    const kompoName = kompo.get("kompo")
    const kompoPoints = kompo.get("points")
    return (
        <div>
            <button className="delete_kompo" onClick={remove>X</button><i>{kompoName}: {kompoPoints}p.</i><br/>
        </div>
    )
}
function countPlayerTotalPoints(kompot){
    return kompot.reduce(function(sum, d){
        return sum + d.get("points")
    }, 0)
}