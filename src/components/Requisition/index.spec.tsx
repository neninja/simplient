import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import formatStringOfObject from '../../utils/formatStringOfObject';

import Requisition from './index';

/* mocks of 3rd party functions {{{*/
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

jest.mock('../../utils/formatStringOfObject.ts', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((obj: object) => {
    return JSON.stringify(obj);
  }),
}));
/*}}}*/

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
    expect(pre?.textContent).toBe(formatStringOfObject(mock));
  });
});
