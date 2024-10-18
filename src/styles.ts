export const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

  :root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
    --button-bg: #3498db;
    --button-text: #ffffff;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #1a1a1a;
      --text-color: #f0f0f0;
      --border-color: #444444;
      --button-bg: #2980b9;
    }
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 500px;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input[type="file"] {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  button {
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }

  button:hover {
    opacity: 0.9;
  }

  #result {
    margin-top: 2rem;
  }

  .error {
    color: #e74c3c;
    margin-top: 1rem;
  }

  a {
    color: var(--button-bg);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
