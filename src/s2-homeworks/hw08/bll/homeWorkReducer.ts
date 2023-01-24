import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
                ? state.map(u=> ({...u})).sort((a, b) => a.name.localeCompare(b.name)) // need to fix
                : state.map(u=> ({...u})).sort((a, b) => b.name.localeCompare(a.name))
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
