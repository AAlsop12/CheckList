import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';

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
              {/* <a className={`course_add action ${chore.finished ? 'chore_add' : 'chore_remove'}`} onClick={() => this.props.finishTask(chore)}></a> */}
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
        // finishTask:(chore) => {
        //     dispatch(finishTask(chore))
        // },
        // redoTask:(chore) => {
        //     dispatch(redoTask(chore))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoBox);