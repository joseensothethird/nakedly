import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text || '#333'};
    background-color: ${({ theme }) => theme.colors.background || '#fff'};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  #root {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${({ theme }) => theme.spacing.md || '1rem'} 0;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.heading || '#111'};
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.75rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }

  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.md || '1rem'} 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text || '#444'};
  }

  button {
    display: inline-block;
    border: none;
    border-radius: 6px;
    padding: ${({ theme }) => theme.spacing.sm || '0.5rem'} ${({ theme }) => theme.spacing.md || '1rem'};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    text-transform: none;
    letter-spacing: 0.3px;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary || '#00aff0'};
    color: ${({ theme }) => theme.colors.lightText || '#fff'};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark || '#008ecc'};
      transform: translateY(-1px);
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary || '#00aff0'};
    border: 2px solid ${({ theme }) => theme.colors.primary || '#00aff0'};

    &:hover:not(:disabled) {
      background-color: rgba(${({ theme }) => theme.colors.primaryRgb || '0,175,240'}, 0.08);
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary || '#00aff0'};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark || '#008ecc'};
      text-decoration: underline;
    }
  }

  input, textarea, select {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.border || '#ccc'};
    border-radius: 6px;
    width: 100%;
    max-width: 100%;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary || '#00aff0'};
    }
  }

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs || '0.25rem'};
    font-weight: 500;
  }

  .text-center { text-align: center; }
  .text-uppercase { text-transform: uppercase; }
  .text-muted { color: ${({ theme }) => theme.colors.mutedText || '#999'}; }
`
