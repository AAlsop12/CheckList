import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { redoChore } from '../actions'

class completedBox extends Component {

    constructor(props) {
        super(props)

        this.renderTask = this.renderTask.bind(this);
    }

    renderTask(chore) {
        return ( 
            <div key={this.props.tasks.indexOf(chore)} className="slot">
                <div className="slot_title">{chore.description}</div>
                <a className="action slot_remove">remove task</a>
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

// function mapDispatchToProps(dispatch) {
//     return {
//         redoTask:(chore) => {
//             dispatch(redoTask(chore))
//         }

//     }

// }

export default connect(mapStateToProps)(completedBox);
