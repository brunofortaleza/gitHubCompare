import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /*para ficar um item a baixo do outro */
  align-items: center; /*para todos os itens ficarem alinhados no centro*/
  padding-top: 60px; /*para distanciar um pouco do top da aplicação*/
`;

export const Form = styled.form`
  margin-top: 20px; /*distanciar um pouco da logo*/
  width: 100%; /*para ocupar todo os espaço horizontal possivel*/
  max-width: 400px; /*limita a 400*/
  display: flex; /*facilidade para alinhar*/

  input {
    flex: 1; /*para ocupar todo os o espaço horizontal (tirando o que o botao ocupa*/
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? "4px solid #F00" : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
  }
`;
