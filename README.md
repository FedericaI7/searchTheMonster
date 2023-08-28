## Project README

### Monster Search App
(https://federicai7.github.io/searchTheMonster/)
This project is a React application that allows users to search and filter through a list of monster data fetched from an API. The application consists of two main components: **Header** and **Card**, and it utilizes React's state management and `useEffect` hook for fetching and filtering data.

#### Features

- **Search Functionality**: Users can search for monsters by typing their names in the search input field.
- **Data Fetching**: The app fetches monster data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API using the `fetch` function.
- **Filtering**: The fetched monster data is filtered based on the search input. The list of monsters displayed is dynamically updated as the user types.

#### Components

##### `App`

The main component `App` is responsible for the overall structure of the application. It manages the state for the search input value, the fetched monster data, and the filtered monster list. It also contains two `useEffect` hooks:

1. The first `useEffect` hook is responsible for fetching monster data from the API when the component mounts. It sets the fetched data using the `setMonster` function.

2. The second `useEffect` hook is triggered whenever there's a change in the `monster` or `inputValue` state. It filters the `monster` array based on the search input and updates the `monsterFiltered` state accordingly.

##### `Header`

The **Header** component displays the title and a search input field. It receives the `changeValue` function as a prop, which is used to handle changes in the search input.

##### `Card`

The **Card** component is responsible for rendering the list of monsters. It receives two props: `stateMonster`, which holds the full monster data, and `monsterFiltered`, which holds the filtered monster data based on the search input. It maps through the `monsterFiltered` array and renders individual monster cards.

Each monster card includes:

- **Monster Name**
- **Monster Illustration**: An image generated using the [RoboHash API](https://robohash.org/) with the `set2` set and a size of 180x180 pixels.
- **Email**: The email associated with the monster.

#### Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to (https://localhost:3000) to see the app in action.

#### Technologies Used

- React: A JavaScript library for building user interfaces.
- `useState`: A React hook for managing component state.
- `useEffect`: A React hook for handling side effects, like data fetching.

#### Acknowledgments

This project was built for educational purposes and serves as a simple demonstration of React's state management, data fetching capabilities, and integrating external resources like the [RoboHash](https://robohash.org/) API for generating monster illustrations.

Feel free to explore the code and modify it according to your needs. Happy coding!
