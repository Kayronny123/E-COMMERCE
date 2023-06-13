import { useEffect, useState } from "react";
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import Home from "./components/home/Home";
import { AppContainer } from "./style";
import "./styles.css";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);
  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem("carrinho");
    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage));
    }
  }, []);

  return (
    <AppContainer>
      <Filtro />
      <Home carrinho={carrinho} setCarrinho={setCarrinho} />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </AppContainer>
  );
}
