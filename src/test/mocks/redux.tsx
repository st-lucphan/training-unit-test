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
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "John",
          username: "John123",
          email: "john@gmail.com",
        },
      ],
      dataUser: null,
      error: null,
    },
  },
  error: {
    userReducer: {
      isLoading: false,
      hasError: true,
      dataList: null,
      dataUser: null,
      error: "error",
    },
  },
};
