import { useState, useEffect } from "react";

import HeaderIconSelector from "../../assets/icons/HeaderIconSelector";

const ThemeToggler = () => {
    const themes = {
        dark: 'dark',
        light: 'light',
    }
    const onChange = () => {
        if (theme === themes.light) {
            setTheme(themes.dark);
            document.querySelector('.lightToggleIcon').classList.add('active');
            document.querySelector('.darkToggleIcon').classList.remove('active');
        }
        if (theme === themes.dark) {
            setTheme(themes.light);
            document.querySelector('.lightToggleIcon').classList.remove('active');
            document.querySelector('.darkToggleIcon').classList.add('active');
        }
    }
    const getTheme = () => {
        const theme = `${window?.localStorage?.getItem('theme')}`;
        if (Object.values(themes).includes(theme)) return theme;

        const userMedia = window.matchMedia('(prefers-color-scheme: light)');
        if (userMedia.matches) return themes.light;

        return themes.dark;
    }
    const [theme, setTheme] = useState(getTheme);
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        document.querySelector('.lightToggleIcon').classList.remove('active');
        document.querySelector('.darkToggleIcon').classList.remove('active');
        document.querySelector(`.${theme}ToggleIcon`).classList.add('active');
    }, [theme]);

    return (
        <div className="header__theme" onClick={onChange}>
            <HeaderIconSelector id = 'theme'/>
        </div> 
    );
}
 
export default ThemeToggler;