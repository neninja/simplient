import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Requisition from './index';

type ApiProps = {
  method: string;
  url: string;
  body: object;
};

jest.mock('../../utils/api.ts', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ method, url, body }: ApiProps) => {
    if (method === 'get' && url === 'https://localhost:3030/users/1') {
      return { name: 'Felipe' };
    }
    return { error: url };
  }),
}));

describe('Requisition', () => {
  it('should render correct response on submit request', async () => {
    let mock = { name: 'Felipe' };

    const { getByTestId } = render(
      <Requisition
        url="https://localhost:3030/users/1"
        method="get"
        body={{}}
      />,
    );

    const bt = getByTestId('btn');
    const pre = getByTestId('pre');

    fireEvent.click(bt);
    // expect(call).toHaveBeenCalledTimes(1);

    await waitForElement(() => pre);

    await waitForElement(() => getByTestId('pre'));
    expect(pre?.textContent).toBe(JSON.stringify(mock, undefined, 4));
  });
});
