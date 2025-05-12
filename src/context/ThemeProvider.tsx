import { useReducer } from 'react';

import {
    INITIAL_THEME,
    ThemeContext,
    type ACTION_TYPE,
    type STATE_TYPE
} from '@/context/ThemeContext';

const reducer: React.Reducer<STATE_TYPE, ACTION_TYPE> = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        case 'CHANGE_FONT_SIZE':
            return {
                ...state,
                fontSize: action.payload
            };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_THEME);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};
