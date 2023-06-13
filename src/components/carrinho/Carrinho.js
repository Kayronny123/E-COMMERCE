import { Imagem } from "./style";

const Carrinho = ({ carrinho, setCarrinho }) => {
  const removerCarrinho = (foquete) => {
    const novoCarrinho = carrinho
      .map((item) =>
        item.nome === foquete.nome
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0);
    setCarrinho(novoCarrinho);
  };
  const total = carrinho.reduce((acumulo, foquete) => {
    return acumulo + foquete.valor * foquete.quantidade;
  }, 0);
  return (
    <div>
      <p>Carrinho</p>
      {carrinho.map((item) => {
        return (
          <div key={item.id}>
            <Imagem src={item.image} alt={item.nome} />
            <p>Nome: {item.nome} </p>
            <p>Quantidade: {item.quantidade} </p>
            <button onClick={() => removerCarrinho(item)}>Remover</button>
          </div>
        );
      })}
      <p>Total:{total}</p>
    </div>
  );
};
export default Carrinho;
