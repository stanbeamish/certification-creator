/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { writeToLocalStorage, readFromLocalStorage } from '../utils/storage';
import _ from 'lodash';

// A custom React hook to return the selected Theme from LocalStorage
export const useTheme = () => {
  // get all themes
  const themes = readFromLocalStorage('all-themes');
  // set current theme to state
  const [theme, setTheme] = useState(themes.data.day);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    writeToLocalStorage('theme', mode)
    setTheme(mode);
  };

  // get fonts from the themes file
  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = readFromLocalStorage('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.night);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};