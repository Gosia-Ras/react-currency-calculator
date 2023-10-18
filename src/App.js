import Container from "./Components/Container";
import Header from "./Components/Header";
import { Form } from "./Components/Form";
import Footer from "./Components/Footer";
import Clock from "./Components/Clock";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Currency Calculator" />
      <Form />
      <Footer title="Coded in 2021 by Gosia Hildebrand. All&nbsp;rights reserved." />
    </Container>
  );
}

export default App;
