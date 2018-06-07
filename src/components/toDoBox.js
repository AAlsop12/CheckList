import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, finishTask, redoTask, forgetTask } from '../actions';

class ToDoBox extends Component {

    constructor(props) {
        super(props)

        this.renderTask = this.renderTask.bind(this);

    }

        componentDidMount() {
        this.props.fetchTasks()
    }

    renderTask(chore) {
        return ( 
        <li key={chore.description} className="task">
            <div className="task_info_container">
                <div className="task_info">{chore.description}</div>
            </div>
              <a className={`action ${chore.finished ? 'hide-finished-content' : 'show-finished-content'}`} onClick={() => this.props.finishTask(chore)}>finished</a>
              <a className={`action ${chore.finished ? 'show-finished-content' : 'hide-finished-content'}`} onClick={() => this.props.redoTask(chore)}>remove</a>

              <a className={`action ${chore.fluff ? 'hide-fluff-content' : 'show-fluff-content'}`} onClick={() => this.props.forgetTask(chore)}>Maybe forget about it</a>
              <a className={`action ${chore.fluff ? 'show-fluff-content' : 'hide-fluff-content'}`} onClick={() => this.props.redoTask(chore)}>Maybe we should actually do that one</a>
        </li>
            )
    }


    render() {
        return (
            <ul>
            {this.props.tasks.map(this.renderTask)}

            </ul>
        )

    }

}

function mapStateToProps(state) {
    console.log(`state tasks are : ${JSON.stringify(state.tasks)}`)
    return { tasks: state.tasks }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: () => {
        dispatch(fetchTasks())
        },
        finishTask:(chore) => {
            dispatch(finishTask(chore))
        },
        redoTask:(chore) => {
            dispatch(redoTask(chore))
        },
        forgetTask:(chore) => {
            dispatch(forgetTask(chore))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoBox);