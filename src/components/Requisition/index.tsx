import React from 'react';

import { Container, MethodTag, UrlTag } from './styles';

interface RequisitionProps {
  url: string;
  method: string;
}

const Requisition: React.FC<RequisitionProps> = ({
  url,
  method,
}: RequisitionProps) => {
  function handleClick() {
    console.log('show');
  }
  return (
    <Container method={method} onClick={() => handleClick()}>
      <MethodTag method={method}>{method}</MethodTag>
      <UrlTag>{url}</UrlTag>
    </Container>
  );
};

export default Requisition;
