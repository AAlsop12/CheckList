import React, { Component } from 'react';
import { connect } from 'react-redux';


class notImportantBox extends Component {

    constructor(props) {
        super(props)

        this.renderTask = this.renderTask.bind(this);
    }

    renderTask(chore) {
        return ( 
            <div key={this.props.tasks.indexOf(chore)} className="slot">
                <div className="slot_title">{chore.description}</div>
                <a className="action slot_remove">Ditch this Task</a>
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



export default connect(mapStateToProps)(notImportantBox);
