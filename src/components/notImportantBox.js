import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redoTask } from '../actions';


class notImportantBox extends Component {

    constructor(props) {
        super(props)

        this.renderTask = this.renderTask.bind(this);
    }

    renderTask(chore) {
        return ( 
            <div key={this.props.tasks.indexOf(chore)} className={`slot ${chore.fluff ? 'slot_chore' : 'slot_goal'}`}>
                <div className="slot_title">{chore.fluff ? chore.description : 'Goal to Complete' }</div>
                <a className={`action slot_remove ${chore.fluff ? 'show-fluff-content' : 'hide-fluff-content'}`} onClick={() => this.props.redoTask(chore)}>return to list</a>
            </div>
            )
    }


       
    render() {
        return (
            <div>
                <div className="finished_slots">
                {
                    this.props.tasks.map(this.renderTask)
                }
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return { tasks: state.tasks };
}

function mapDispatchToProps(dispatch) {
    return {
        redoTask: (chore) => {
            dispatch(redoTask(chore))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(notImportantBox);
