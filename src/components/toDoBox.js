import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, finishTask } from '../actions';

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
              <a>arrow</a>
              <a className={`action ${chore.finished ? 'hide-content' : 'show-content'}`} onClick={() => this.props.finishTask(chore)}>add</a>
              <a className={`action ${chore.finished ? 'show-content' : 'hide-content'}`} onClick={() => this.props.redoTask(chore)}>remove</a>
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
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoBox);