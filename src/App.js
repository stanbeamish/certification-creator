/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';
import ThemeSelector from './components/themeSelector';
import './index.css';
import CertificationForm from './components/certificationForm';

// create a Container component using CSS styles and styled-Component
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // get the selected theme, font list etc.
  const { theme, themeLoaded, getFonts } = useTheme(); 
  const [selectedTheme, setSelectedTheme] = useState(theme); // state variables

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // React hook to load all fonts and keep track of any state variables and their changes
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>                    
          <div className="App">
            <div className="wrapper">
              <CertificationForm selectedTheme={ selectedTheme } />
              <p className="version--text">Version 0.1 - vandijk - 2021</p>
            </div>
          </div>
          
        </Container>
        <ThemeSelector setter={setSelectedTheme} />
      </ThemeProvider>
    }
    </>
  );
}

export default App;
