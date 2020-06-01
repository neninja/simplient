import React, { useState } from 'react';
import api from '../../utils/api';

import {
  Container,
  MethodTag,
  UrlTag,
  Header,
  Body,
  Request,
  Response,
  Editor,
} from './styles';

interface RequisitionProps {
  url: string;
  method: string;
  body: object;
}

const Requisition: React.FC<RequisitionProps> = ({
  url,
  method,
  body,
}: RequisitionProps) => {
  const [urlRequest, setUrlRequest] = useState(url);
  const [bodyRequest, setBodyRequest] = useState(
    JSON.stringify(body, undefined, 4),
  );
  const [bodyResponse, setBodyResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit() {
    const body = JSON.parse(bodyRequest);
    const response = await api.call({ method, url, body });
    setBodyResponse(JSON.stringify(response, undefined, 4));
  }

  function handleOpenLi() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <Container method={method}>
      <Header onClick={() => handleOpenLi()}>
        <MethodTag method={method}>{method}</MethodTag>
        <UrlTag>{url}</UrlTag>
      </Header>
      <Body style={{ display: isOpen ? '' : '' }}>
        <Request>
          <input
            type="text"
            value={urlRequest}
            onChange={(e) => setUrlRequest(e.target.value)}
          />
          <Editor
            rows={10}
            value={bodyRequest}
            onChange={(e) => setBodyRequest(e.target.value)}
          ></Editor>
          <button data-testid="btn" onClick={() => handleSubmit()}>
            Enviar
          </button>
        </Request>

        <Response>
          <pre data-testid="pre">{bodyResponse}</pre>
        </Response>
      </Body>
    </Container>
  );
};

export default Requisition;
