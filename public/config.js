const config = {
  baseUrl: 'localhost:3030',
  routes: [
    {
      method: 'POST',
      url: '/user',
    },
    {
      method: 'POST',
      url: '/pet/{petId}/uploadImage',
    },
    {
      method: 'POST',
      url: '/pet',
    },
    {
      method: 'PUT',
      url: '/pet',
    },
    {
      method: 'GET',
      url: '/pet/findByStatus',
    },
    {
      method: 'GET',
      url: '/pet/{petId}',
    },
    {
      method: 'POST',
      url: '/pet/{petId}',
    },
    {
      method: 'DELETE',
      url: '/pet/{petId}',
    },
    {
      method: 'POST',
      url: '/store/order',
    },
    {
      method: 'GET',
      url: '/store/order/{orderId}',
    },
    {
      method: 'DELETE',
      url: '/store/order/{orderId}',
    },
    {
      method: 'GET',
      url: '/store/inventory',
    },
    {
      method: 'POST',
      url: '/user/createWithArray',
    },
    {
      method: 'POST',
      url: '/user/createWithList',
    },
    {
      method: 'GET',
      url: '/user/{username}',
    },
    {
      method: 'PUT',
      url: '/user/{username}',
    },
    {
      method: 'DELETE',
      url: '/user/{username}',
    },
    {
      method: 'GET',
      url: '/user/login',
    },
    {
      method: 'GET',
      url: '/user/logout',
    },
  ],
};
