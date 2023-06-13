import { InputContainer } from "./style";

const Filtro = ({
  ordenacao,
  setOrdenacao,
  setValorMax,
  setValorMin,
  setNome
}) => {
  return (
    <div>
      <p>Filtro</p>
      <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>

      <InputContainer>
        <input
          onChange={(e) => setValorMax(e.target.value)}
          placeholder="Valor Máximo"
          type="number"
        />
        <input
          onChange={(e) => setValorMin(e.target.value)}
          placeholder="Valor Mínimo"
          type="number"
        />
        <input
          onChange={(e) => setNome(e.target.value)}
          placeholder="Busca por nome"
          type="text"
        />
      </InputContainer>
    </div>
  );
};
export default Filtro;
