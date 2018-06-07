import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redoTask } from '../actions';


class completedBox extends Component {

    constructor(props) {
        super(props)

        this.renderTask = this.renderTask.bind(this);
    }

    renderTask(chore) {
        return ( 
            <div key={this.props.tasks.indexOf(chore)} className={`slot ${chore.finished ? 'slot_chore' : 'slot_goal'}`}>
                <div className="slot_title">{chore.finished ? chore.description : 'Goal to Complete' }</div>
                <a className={`action slot_remove ${chore.finished ? 'show-content' : 'hide-content'}`} onClick={() => this.props.redoTask(chore)}>remove task</a>
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


export default connect(mapStateToProps, mapDispatchToProps)(completedBox);
