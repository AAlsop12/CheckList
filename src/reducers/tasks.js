import { FETCH_TASKS, REDO_TASK, FINISH_TASK, FORGET_TASK } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {

        case FETCH_TASKS:
            return [ ...state, ...action.payload ]


        case REDO_TASK:
                return [ 
                    ...state.map((chore, index) => {
                        if(chore == action.payload) {
                            chore.finished = false,
                            chore.fluff = false
                        }
                        return chore
                    })
                 ]

        case FINISH_TASK:
            return [ 
                ...state.map((chore, index) => {
                    if(chore == action.payload) {
                        chore.finished = true
                    }
                    return chore
                })
        ]

        case FORGET_TASK:
                return [ 
                    ...state.map((chore, index) => {
                        if(chore == action.payload) {
                            chore.fluff = true
                        }
                        return chore
                    })
                 ]


        default: return state
    }
}

