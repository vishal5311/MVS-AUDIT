// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import global styles
import './styles/animations.css';
import './styles/components.css';
import './styles/main.css';

// Error boundary for the entire app
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          margin: '20px',
          border: '1px solid red',
          borderRadius: '4px'
        }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Get the root element
const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Root creation/rendering error:', error);
    container.innerHTML = `
      <div style="color: red; padding: 20px;">
        Failed to start the application. Please check the console for more details.
      </div>
    `;
  }
} else {
  console.error('Root element not found. Make sure there is a <div id="root"> in your HTML.');
}