import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import UserList from './UserList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOCK_INITIAL_STATE } from '../../../../test/mocks/redux';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));
describe('UserList', () => {
  describe('UserList loading', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.loading);
    it('should render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserList />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('Loading')).toBeInTheDocument;
    });
  });
  describe('UserList loaded', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.loaded);
    it('should render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserList />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('User List')).toBeInTheDocument;
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument;
      expect(screen.getAllByTestId('user-item').length).toBe(2);
    });
  });

  describe('Delete User', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.loaded);
    it('should delete successfully', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserList />
          </BrowserRouter>
        </Provider>
      );
      const btnDelete = screen.getAllByText('Delete');
      fireEvent.click(btnDelete[0]);
      expect(screen.getAllByTestId('user-item').length).toBe(1);
    });
  });

  describe('Error', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.error);
    it('should navigate correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserList />
          </BrowserRouter>
        </Provider>
      );
      expect(mockUseNavigate).toBeCalled();
      expect(mockUseNavigate).toBeCalledWith('/user/error');
    });
  });
});
