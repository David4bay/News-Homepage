import Main from './components/Main/Main';
import styled from 'styled-components';

const AppStyle = styled.div`
overflow: hidden;
` ;

function App() {
  return (
    <AppStyle>
      <Main />
    </AppStyle>
  )
}

export default App;
