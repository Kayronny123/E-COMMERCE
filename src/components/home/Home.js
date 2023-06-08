import rocket from "../../rocket.json";

const Home = ({ carrinho, setCarrinho }) => {
  console.log(rocket);

  return (
    <div>
      {rocket.map((rocket) => {
        return (
          <div key={rocket.id}>
            <img src={rocket.image} alt={rocket.name} />
            <p>Nome: {rocket.name}</p>
            <p>Preço: {rocket.valor}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
