import foquete from "../../foquete.json";
import { FoqueteContainer, Imagem } from "./style";

const Home = ({ carrinho, setCarrinho }) => {
  console.log(foquete);
  const addFoqueteCarrinho = (foquete) => {
    setCarrinho([...carrinho], foquete);
  };

  return (
    <div>
      {foquete.map((foquete) => {
        return (
          <FoqueteContainer key={foquete.id}>
            <Imagem src={foquete.image} alt={foquete.name} />
            <p>Nome: {foquete.name}</p>
            <p>Preço: {foquete.valor}</p>
            <button onClick={() => addFoqueteCarrinho(foquete)}>Comprar</button>
          </FoqueteContainer>
        );
      })}
    </div>
  );
};
export default Home;
