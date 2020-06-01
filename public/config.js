const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  routes: [
    {
      method: 'GET',
      url: '/posts/1',
      body: {},
    },
    {
      method: 'POST',
      url: '/user',
      body: {
        name: 'Felipe',
        adm: true,
        idade: 24,
      },
    },
    {
      method: 'POST',
      url: '/pet/{petId}/uploadImage',
      body: {},
    },
    {
      method: 'POST',
      url: '/pet',
      body: {},
    },
    {
      method: 'PUT',
      url: '/pet',
      body: {},
    },
    {
      method: 'GET',
      url: '/pet/findByStatus',
      body: {},
    },
    {
      method: 'GET',
      url: '/pet/{petId}',
      body: {},
    },
    {
      method: 'POST',
      url: '/pet/{petId}',
      body: {},
    },
    {
      method: 'DELETE',
      url: '/pet/{petId}',
      body: {},
    },
    {
      method: 'POST',
      url: '/store/order',
      body: {},
    },
    {
      method: 'GET',
      url: '/store/order/{orderId}',
      body: {},
    },
    {
      method: 'DELETE',
      url: '/store/order/{orderId}',
      body: {},
    },
    {
      method: 'GET',
      url: '/store/inventory',
      body: {},
    },
    {
      method: 'POST',
      url: '/user/createWithArray',
      body: {},
    },
    {
      method: 'POST',
      url: '/user/createWithList',
      body: {},
    },
    {
      method: 'GET',
      url: '/user/{username}',
      body: {},
    },
    {
      method: 'PUT',
      url: '/user/{username}',
      body: {},
    },
    {
      method: 'DELETE',
      url: '/user/{username}',
      body: {},
    },
    {
      method: 'GET',
      url: '/user/login',
      body: {},
    },
    {
      method: 'GET',
      url: '/user/logout',
      body: {},
    },
  ],
};
