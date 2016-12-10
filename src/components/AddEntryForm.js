import React from "react"
import { fromJS } from "immutable"


const AddEntryForm = React.createClass({
    handleSubmit(e){
        e.preventDefault()

        let playerName = this.refs.playerName.value
        let kompo      = fromJS({
            kompo: this.refs.kompo.value,
            points: parseInt(this.refs.points.value)    
        })

        if (!playerName || !kompo.get("kompo") || !kompo.get("kompo")){
            return
        }

        this.props.addPlayerEntry(playerName, kompo)

        this.refs.playerName.value = ""
        this.refs.points.value = ""
        //this.refs.addPlayerForm.reset()
        this.refs.playerName.focus()
    },
    render() {
        return (
            <div className="entryForm_div">
                <form className="entryForm" ref="addPlayerForm">
                    <input type="text"
                    ref="playerName"
                    placeholder="Player name"/>
                    <br/>
                    <input type="number"
                    ref="points"
                    placeholder="Position"/>
                    <br/>
                    <input type="text"
                    ref="kompo"
                    placeholder="Game"/>
                    <br/>
                    <input className="entryForm_button" onClick={this.handleSubmit} type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
})

export default AddEntryForm