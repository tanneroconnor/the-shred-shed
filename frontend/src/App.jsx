import './App.css';
import {useEffect, useState} from 'react';
import {LoadingOverlay, MantineProvider} from '@mantine/core';

import Calculator from "./components/music-calculator/Calculator";
import AppHeader from "./components/AppHeader";
import Fretboard from "./components/fretboard/Fretboard.jsx";

export default function App() {

    const [harmonyData, setHarmonyData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode")) && true);
    const [rootNote, setRootNote] = useState("C");
    const [harmony, setHarmony] = useState("major");
    const [isActive, setIsActive] = useState({
        "calculator": false,
        "fretboard": true
    });

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    useEffect(() => {
        const musicTheoryDataFetch = async () => {
            try {
                const data = await fetchWithRetry("http://localhost:8080/music-theory");
                console.log(data);
                setHarmonyData(data.harmony);
                setIsLoading(false);
            } catch (error) {
                // handle the error here
                console.error(error);
            }
        };
        musicTheoryDataFetch();
    }, []);

    async function fetchWithRetry(url, retries = 3, delay = 1000) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchWithRetry(url, retries - 1, delay * 2);
            } else {
                throw error;
            }
        }
    }

    const handleToggle = () => {setIsDarkMode(prevState => !prevState);};

    function handleRootButtonClick(root) {setRootNote(root);}

    function handleHarmonyChange(harmony) {setHarmony(harmony);}

    function handleNavLinkClick(navLinkName) {
        setIsActive(prevState => {
            const updatedState = {...prevState};
            for (const key in updatedState) {
                updatedState[key] = false;
            }
            updatedState[navLinkName] = true;
            return updatedState
        })
    }


    return (
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: isDarkMode ? 'dark' : 'light' }}>
          <AppHeader
              isDarkMode={isDarkMode}
              handleToggle={handleToggle}
              handleNavLinkClick={handleNavLinkClick}
              isActive={isActive}/>
          {isLoading
              ?
              <LoadingOverlay
                  loaderProps={{size: 'xl', color: 'blue', variant: 'bars'}}
                  overlayOpacity={0.3}
                  overlayColor="#c5c5c5"
                  visible={true}
              />
              :
              isActive.calculator
              ?
              <Calculator
                isDarkMode={isDarkMode}
                harmonyData={harmonyData}
                rootNote={rootNote}
                harmony={harmony}
                handleRootButtonClick={handleRootButtonClick}
                handleHarmonyChange={handleHarmonyChange}/>
                  :
              <Fretboard
                  isDarkMode={isDarkMode}
                  harmonyData={harmonyData}
                  rootNote={rootNote}
                  harmony={harmony}
                  handleRootButtonClick={handleRootButtonClick}
                  handleHarmonyChange={handleHarmonyChange}/>
          }
      </MantineProvider>
    );
}

