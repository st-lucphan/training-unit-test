import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOCK_INITIAL_STATE } from '../../../../test/mocks/redux';
import UserDetail from './UserDetail';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('UserDetail', () => {
  describe('UserDetail loading', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.loading);
    it('should render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('Loading')).toBeInTheDocument;
    });
  });
  describe('UserDetail loaded', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.loaded);
    it('should render correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('User Information')).toBeInTheDocument;
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument;
    });
  });

  describe('Error', () => {
    const mockStore = configureStore();
    const store = mockStore(MOCK_INITIAL_STATE.error);
    it('should navigate correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserDetail />
          </BrowserRouter>
        </Provider>
      );
      expect(mockUseNavigate).toBeCalled();
      expect(mockUseNavigate).toBeCalledWith('/user/error');
    });
  });
});
