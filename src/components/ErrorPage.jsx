// src/components/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    color: '#333',
    textAlign: 'center',
    padding: '2rem',
  },
  code: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: 0,
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  link: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default ErrorPage;
