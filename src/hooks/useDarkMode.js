
import useLocalStorage from './useLocalStorage.js'

export default function useDarkMode(defaultMode) {
    //This custom hook merely composes useLocalStorage
    const [theme, setTheme] = useLocalStorage('darkMode', defaultMode);
    return [theme, setTheme];
}