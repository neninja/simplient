import React from 'react';

import { Title, Container } from './styles';

type RequisitionContainerProps = {
  title: string;
};

const RequisitionContainer: React.FC<RequisitionContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ul>{children}</ul>
    </Container>
  );
};

export default RequisitionContainer;
