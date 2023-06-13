import { useState } from "react";
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import Home from "./components/home/Home";
import { AppContainer } from "./style";
import "./styles.css";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContainer>
      <Filtro />
      <Home carrinho={carrinho} setCarrinho={setCarrinho} />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </AppContainer>
  );
}
