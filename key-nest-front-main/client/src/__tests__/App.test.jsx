import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import store from '../store/store';

describe('App Component', () => {
  // Arrange
  const renderApp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  test('renders without crashing', () => {
    // Act
    const { container } = renderApp();
    
    // Assert
    expect(container).toBeInTheDocument();
  });

  test('renders with Redux Provider', () => {
    // Act
    const { container } = renderApp();
    
    // Assert
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  test('contains main routes', () => {
    // Act
    const { getByText } = renderApp();
    
    // Assert
    expect(getByText(/home/i)).toBeInTheDocument();
  });
});
