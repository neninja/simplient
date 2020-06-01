import axios from 'axios';

type AxiosMethod =
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'PATCH'
  | 'DELETE'
  | 'get'
  | 'delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'put'
  | 'patch'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'
  | undefined;

type Props = {
  method: string;
  url: string;
  body: object;
};

export default {
  call: async function ({ method, url, body }: Props): Promise<object> {
    const response = await axios({
      method: method as AxiosMethod,
      url: url,
    });
    return response.data;
  },
};
