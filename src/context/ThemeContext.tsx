import React, { createContext } from 'react';

export const INITIAL_THEME = {
    theme: 'light',
    fontSize: 16
};

export type STATE_TYPE = {
    theme: string;
    fontSize: number;
};

/*
 * Discriminated Union là một kỹ thuật trong TypeScript
 * cho phép bạn xác định các kiểu khác nhau cho một thuộc tính
 * dựa trên giá trị của một thuộc tính khác trong cùng một đối tượng.
 * 3 đoạn bên dưới đang sử dụng kỹ thuật này
 */
type COLOR_ACTION_TYPE = {
    type: 'CHANGE_THEME';
};

type SIZE_ACTION_TYPE = {
    type: 'CHANGE_FONT_SIZE';
    payload: number;
};

export type ACTION_TYPE = COLOR_ACTION_TYPE | SIZE_ACTION_TYPE;

export const ThemeContext = createContext<{
    state: STATE_TYPE;
    dispatch: React.Dispatch<ACTION_TYPE>;
}>({
    state: INITIAL_THEME,
    dispatch: () => {}
});
