import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./App/index";
import { themes } from "./colors";
export const ThemeContext = React.createContext(themes[0]);

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
function App() {
  const [themeIndex, setThemeIndex] = React.useState(0);
  const toggleTheme = () => {
    if (themeIndex === themes.length - 1) {
      setThemeIndex(0);
    } else setThemeIndex(themeIndex + 1);
  };
  return (
    <AppWrapper>
      <ThemeContext.Provider value={themes[themeIndex]}>
        <Main toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
    </AppWrapper>
  );
}

export default App;
