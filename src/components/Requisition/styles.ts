import styled, { css } from 'styled-components';

type RequisitionProps = {
  method: string;
};

export const Container = styled.li<RequisitionProps>`
  cursor: pointer;
  display: flex;
  background: #5c6370;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const MethodTag = styled.span<RequisitionProps>`
  font-weight: 700;
  min-width: 100px;
  color: #282c34;

  text-align: center;

  margin: .2rem;
  padding: .2rem 1rem;

  background: #000;
  ${(props) =>
    props.method === 'POST' &&
    css`
      background: #61afef;
    `}

  ${(props) =>
    props.method === 'PUT' &&
    css`
      background: #e06c75;
    `}

  ${(props) =>
    props.method === 'PATCH' &&
    css`
      background: #e5c07b;
    `}

  ${(props) =>
    props.method === 'GET' &&
    css`
      background: #98c379;
    `}

  ${(props) =>
    props.method === 'DELETE' &&
    css`
      background: #c678dd;
    `}
`;

export const UrlTag = styled.span`
  font-size: 1.1rem;
  font-family: monospace;
  font-weight: 600;

  color: #282c34;
  display: flex;

  margin: 0.2rem 0.2rem 0.2rem 0rem;
  padding: 0.2rem 1rem;

  align-items: center;

  flex-grow: 1;
`;
