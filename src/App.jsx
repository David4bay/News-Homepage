import './App.css'
import Main from './components/Main/Main';
import styled from 'styled-components';

const AppStyle = styled.div`
  display: block;
  max-width: 1440px;
  margin: auto;
` ;

function App() {
  return (
    <AppStyle>
      <Main />
    </AppStyle>
  )
}

export default App;
