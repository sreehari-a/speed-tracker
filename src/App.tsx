
import styled from 'styled-components';
import './App.css';
import Main from './App/index';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
function App() {
  return (
    <AppWrapper>
      <Main />
    </AppWrapper>
  );
}

export default App;
