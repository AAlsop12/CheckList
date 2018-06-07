import { FETCH_TASKS,
         REDO_TASK,
         FINISH_TASK } from './types';


export function fetchTasks() {
    return {
        type: FETCH_TASKS,
        payload: [
            {
                description: 'Do some coding homework',
                finished: false
            },

            {
                description: 'Make dinner',
                finished: false
            }


        ]
            
    }
}

export function redoTask(chore) {
    return {
        type: REDO_TASK,
        payload: chore
    }
}

export function finishTask(chore) {
    return {
        type: FINISH_TASK,
        payload: chore
    }
}

