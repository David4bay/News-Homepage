import Main from './components/Main/Main';
import styled from 'styled-components';

const AppStyle = styled.div`
@media (min-width: 769px) {
  margin: auto;
  overflow-x:hidden;
}
` ;

function App() {
  return (
    <AppStyle>
      <Main />
    </AppStyle>
  )
}

export default App;
