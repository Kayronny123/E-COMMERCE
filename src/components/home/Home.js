import foquete from "../../foquete.json";
import { FoqueteContainer, Imagem } from "./style";

const Home = ({ carrinho, setCarrinho }) => {
  const addFoqueteCarrinho = (foquete) => {
    const foqueteExisteCarrinho = carrinho.find(
      (item) => item.nome === foquete.nome
    );
    if (foqueteExisteCarrinho) {
      const novoCarrinho = carrinho.map((item) =>
        foqueteExisteCarrinho.nome === item.nome
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...foquete, quantidade: 1 }]);
    }
  };

  return (
    <div>
      {foquete.map((foquete) => {
        return (
          <FoqueteContainer key={foquete.id}>
            <Imagem src={foquete.image} alt={foquete.nome} />
            <p>{foquete.nome}</p>
            <p>Preço: {foquete.valor}</p>
            <button onClick={() => addFoqueteCarrinho(foquete)}>Comprar</button>
          </FoqueteContainer>
        );
      })}
    </div>
  );
};
export default Home;
