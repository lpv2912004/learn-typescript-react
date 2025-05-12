import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

const UseContextExample = () => {
    const { state, dispatch } = useContext(ThemeContext);
    console.log(state);
    return (
        <div>
            <button onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
                Change Theme
            </button>
            <button
                onClick={() => dispatch({ type: 'CHANGE_FONT_SIZE', payload: 20 })}
            >
                Change Font Size
            </button>
        </div>
    );
};

export default UseContextExample;
