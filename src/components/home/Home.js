import foquete from "../../foquete.json";
import { FoqueteContainer, Imagem } from "./style";

const Home = ({ carrinho,
 setCarrinho,
 ordenacao,
 valorMax,
 valorMin,
 nome
  }) => {
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
      {foquete
      .sort((foquete1, foquete2)=>{
        return ordenacao === "crescente" ? foquete1.nome.localeCompare(foquete2.nome) 
        : 
        foquete2.nome.localeCompare(foquete1.nome)
      })
      .filter((foquete)=>{
        return valorMax ? foquete.valor <= valorMax : foquete
      })
      .filter((foquete)=>{
        return valorMin ? foquete.valor >= valorMin : foquete
      })
      .filter((foquete)=>{
        return foquete.nome.toLowerCase().includes(nome.toLowerCase())
      })
      .map((foquete) => {
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
