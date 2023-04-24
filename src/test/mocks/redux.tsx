export const MOCK_INITIAL_STATE = {
  loading: {
    userReducer: {
      isLoading: true,
      hasError: false,
      dataList: null,
      dataUser: null,
      error: null,
    },
  },
  loaded: {
    userReducer: {
      isLoading: false,
      hasError: false,
      dataList: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'John',
          username: 'John123',
          email: 'john@gmail.com',
        },
      ],
      dataUser: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      error: null,
    },
  },
  error: {
    userReducer: {
      isLoading: false,
      hasError: true,
      dataList: null,
      dataUser: null,
      error: 'error',
    },
  },
};
