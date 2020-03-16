export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
    {
        item: 'Set up state',
        completed: false,
        id: 2
    },
    {
        item: 'Build reducer',
        completed: false,
        id: 3
    },
    {
        item: 'Build todo',
        completed: false,
        id: 4
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                item: action.payload,
                completed: false,
                id: new Date()
                }
            ];
        case 'TOGGLE_COMPLETED':
            return action.payload;

        case 'CLEAR_COMPLETED':
            return action.payload;
    }
}