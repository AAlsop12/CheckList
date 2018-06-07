import { FETCH_TASKS,
         REDO_TASK,
         FINISH_TASK,
         FORGET_TASK } from './types';


export function fetchTasks() {
    return {
        type: FETCH_TASKS,
        payload: [
            {
                description: 'Do some coding homework',
                finished: false,
                fluff: false
            },

            {
                description: 'Make dinner',
                finished: false,
                fluff: false
            },


            {
                description: 'Go to the Play',
                finished: false,
                fluff: false
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

export function forgetTask(chore) {
    return {
        type: FORGET_TASK,
        payload: chore
    }
}

