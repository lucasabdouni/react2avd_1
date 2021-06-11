import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
`;

export const Disciplinas = styled.div`
  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  a {
    background: #6495ed;
    text-decoration: none;
    margin-top: 7px;

    width: 60px;
    padding: 5px;

    a:hover {
      background-color: #6415ed;
    }
  }
`;
