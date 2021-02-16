import { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';

export function useDarkMode(defaultMode) {
    //This custom hook merely composes useLocalStorage
    const [theme, setTheme] = useLocalStorage('darkMode', defaultMode);
    return [theme, setTheme];
}