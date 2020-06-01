import configParser from './configParser';
describe('configParser', () => {
  it('should divide urls from entity', () => {
    const config = {
      baseUrl: 'localhost:3030',
      routes: [
        {
          method: 'POST',
          url: '/user',
          body: {},
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
    const expected = {
      routes: [
        {
          name: '/user',
          routes: [
            {
              method: 'POST',
              url: 'localhost:3030/user',
              body: {},
            },
            {
              method: 'POST',
              url: 'localhost:3030/user/createWithArray',
              body: {},
            },
            {
              method: 'POST',
              url: 'localhost:3030/user/createWithList',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/user/{username}',
              body: {},
            },
            {
              method: 'PUT',
              url: 'localhost:3030/user/{username}',
              body: {},
            },
            {
              method: 'DELETE',
              url: 'localhost:3030/user/{username}',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/user/login',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/user/logout',
              body: {},
            },
          ],
        },
        {
          name: '/pet',
          routes: [
            {
              method: 'POST',
              url: 'localhost:3030/pet/{petId}/uploadImage',
              body: {},
            },
            {
              method: 'POST',
              url: 'localhost:3030/pet',
              body: {},
            },
            {
              method: 'PUT',
              url: 'localhost:3030/pet',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/pet/findByStatus',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/pet/{petId}',
              body: {},
            },
            {
              method: 'POST',
              url: 'localhost:3030/pet/{petId}',
              body: {},
            },
            {
              method: 'DELETE',
              url: 'localhost:3030/pet/{petId}',
              body: {},
            },
          ],
        },
        {
          name: '/store',
          routes: [
            {
              method: 'POST',
              url: 'localhost:3030/store/order',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/store/order/{orderId}',
              body: {},
            },
            {
              method: 'DELETE',
              url: 'localhost:3030/store/order/{orderId}',
              body: {},
            },
            {
              method: 'GET',
              url: 'localhost:3030/store/inventory',
              body: {},
            },
          ],
        },
      ],
    };

    expect(configParser(config)).toEqual(expected);
  });
});
