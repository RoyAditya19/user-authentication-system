# User Authentication System

This project is a user authentication system built with React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. It includes features for user registration, login, and profile display.

## Project Structure

- `backend/`: Contains the Node.js and Express backend server.

## Getting Started with Create React App

This project was bootstrapped with [Create React App].

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests] for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <repository-directory>
    ```

3. **Install the required packages:**

    ```bash
    npm install
    ```

4. **Start both frontend and backend servers:**

    ```bash
    npm run both
    ```

    This command uses `concurrently` to start both the React development server and the backend server.

## Usage

1. **Register a new user:**
   - Navigate to the registration page (`/signup`).
   - Fill out the registration form and submit.

2. **Login:**
   - After registration, navigate to the login page (`/login`).
   - Enter the registered email and password to log in.

3. **View User Profile:**
   - Upon successful login, you will be redirected to the home page (`/`), which displays the user's name and email.

## Project Details

- **Frontend**: Built with React, styled with Tailwind CSS (Bootstrap CSS has been removed).
- **Backend**: Built with Node.js and Express.
- **Database**: MongoDB for data storage.
- **Authentication**: JWT (JSON Web Token) for secure authentication.

## Learn More

You can learn more about Create React App and React in the following resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

### Code Splitting

Learn more about [code splitting](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

Learn more about [analyzing the bundle size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

Learn more about [making a progressive web app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

Learn more about [advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Deployment

Learn more about [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` fails to minify

Learn more about [troubleshooting build issues](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).


---

Feel free to reach out if you have any questions or need further assistance!
