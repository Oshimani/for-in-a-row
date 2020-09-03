export interface IRootReducerState {
    currentPlayer: 0 | 1
    counter: number
}

const initialState: IRootReducerState = {
    currentPlayer: 0,
    counter: 0
}

export const Actions = {
    nextPlayer: 'NEXT_PLAYER'
}


export const rootReducer = (state: IRootReducerState = initialState, action: any): IRootReducerState => {
    switch (action.type) {
        case Actions.nextPlayer:
            if (state.currentPlayer === 0) return { ...state, currentPlayer: 1 }
            if (state.currentPlayer === 1) return { ...state, currentPlayer: 0 }
            return state;
        default:
            return state
    }
}
