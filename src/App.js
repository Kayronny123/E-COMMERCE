import { useEffect, useState } from "react";
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import Home from "./components/home/Home";
import { AppContainer } from "./style";
import "./styles.css";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [ordenacao, setOrdenacao] = useState("crescente");
  const [valorMax, setValorMax] = useState(0);
  const [valorMin, setValorMin] = useState(0);
  const [nome, setNome] = useState("");

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
      <Filtro
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
        setValorMax={setValorMax}
        setValorMin={setValorMin}
        setNome={setNome}
      />
      <Home carrinho={carrinho} setCarrinho={setCarrinho} 
      ordenacao={ordenacao}
      valorMax={valorMax}
      valorMin={valorMin}
      nome={nome}
      />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </AppContainer>
  );
}
