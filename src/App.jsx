import logo from "./assets/logo.svg";
import { Container } from "./components/Container";

function App() {
  return (
    <Container>
      <aside>
        <img src={logo} alt="Logo" />
      </aside>
      <h1>Poupapp</h1>
    </Container>
  );
}

export default App;
