import { FETCH_TASKS,
         REDO_TASK } from './types';


export function fetchTasks() {
    return {
        type: FETCH_TASKS,
        payload: [
            {
                description: 'Do some coding homework',
                finished: true
            },

            {
                description: 'Make dinner',
                finished: true
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

// export function finishTask(chore) {
//     return {
//         type: FINISH_TASK,
//         payload: chore
//     }
// }

