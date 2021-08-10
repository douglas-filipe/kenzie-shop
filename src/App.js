import { Nav } from "./pages/Nav";
import { Routes } from "./routes";
import { Container } from "./styles";
import logo from './assets/logo.png'


const App = () => {
  return (
    <Container>
      <img className="logo" src={logo}/>
      <Routes/>
      <Nav>

      </Nav>
    </Container>
  );
}

export default App;
