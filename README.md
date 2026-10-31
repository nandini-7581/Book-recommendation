# Book Recommendation System

A web-based application that helps users discover books using the Google Books API.

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Axios](https://axios-http.com/)
- [Nodemon](https://nodemon.io/) for development
- [Google Books API](https://developers.google.com/books)

## Prerequisites

Before running the application, install:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- A Google Books API key

## Installation

Install the project dependencies from the project root:

```bash
npm install
```

## API Key Configuration

The application requires a Google Books API key.

Create a `.env` file in the project root:

```env
GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

Install `dotenv` if it is not already listed as a dependency:

```bash
npm install dotenv
```

Then load the environment variables at the top of `index.js`:

```js
import "dotenv/config";
```

The API key can then be read with:

```js
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
```

Do not commit `.env` or your API key to GitHub. Add the following entries to
`.gitignore`:

```gitignore
.env
node_modules/
```

## Running the Application

Start the application with Node.js:

```bash
node index.js
```

For development with automatic server restarts:

```bash
npx nodemon index.js
```

Open the application in your browser:

```text
http://localhost:3000
```

## Available npm Scripts

The following scripts can be added to `package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

After adding them, use:

```bash
npm start
```

or:

```bash
npm run dev
```

## Project Structure

```text
Capstone_Books_filter/
├── index.js
├── package.json
├── README.md
├── public/
│   └── main.css
└── views/
    └── index.ejs
```

- `index.js` — Express server and Google Books API integration
- `views/index.ejs` — Dynamic page template
- `public/main.css` — Custom styles
- `package.json` — Project metadata and dependencies
- `README.md` — Project documentation

## Features

- Retrieves books from the Google Books API
- Displays book titles in the web interface
- Groups books into sections
- Uses Express.js to serve the application
- Uses EJS to render dynamic HTML
- Supports automatic server restarts during development with Nodemon

## Troubleshooting

### API key is not configured

If you see:

```text
GOOGLE_BOOKS_API_KEY is not configured
```

Check that:

1. The `.env` file exists in the project root.
2. The variable name is exactly:

   ```env
   GOOGLE_BOOKS_API_KEY=your_google_books_api_key
   ```

3. `dotenv` is installed:

   ```bash
   npm install dotenv
   ```

4. `index.js` contains:

   ```js
   import "dotenv/config";
   ```

Restart the server after changing the environment configuration.

### Port already in use

If port `3000` is already being used, stop the other application or change the
port in `index.js`:

```js
const port = 3001;
```

## Security

Never place your Google Books API key directly in source code or commit it to a
public repository.

If the key has already been exposed, regenerate or restrict it through the
[Google Cloud Console](https://console.cloud.google.com/).

## License

This project was created for educational purposes.
