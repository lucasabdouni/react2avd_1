import styled from 'styled-components';

export const Container = styled.div`
  width: 100;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  ul li {
    display: flex;

    justify-content: space-between;
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-top: 30px;
    list-style: none;
  }

  ul li a {
    text-decoration: none;

    color: #2f4f4f;
  }

  button {
    border: none;
    background: none;

    padding: 3px;
  }
`;
