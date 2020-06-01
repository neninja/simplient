import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import api from '../../utils/api';

import Requisition from './index';

describe('Requisition', () => {
  it('should render correct response on submit request', async () => {
    let mock = { name: 'Felipe' };

    const call = jest
      .spyOn(api, 'call')
      .mockImplementationOnce(async () => mock);

    const { getByTestId } = render(
      <Requisition
        url="https://jsonplaceholder.typicode.com/posts/1"
        method="get"
        body={{}}
      />,
    );

    const bt = getByTestId('btn');
    const pre = getByTestId('pre');

    fireEvent.click(bt);
    expect(call).toHaveBeenCalledTimes(1);

    await waitForElement(() => pre);

    await waitForElement(() => getByTestId('pre'));
    expect(pre?.textContent).toBe(JSON.stringify(mock, undefined, 4));
  });
});
