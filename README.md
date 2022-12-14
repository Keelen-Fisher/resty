# Resty REACT System Application: Week-Long assignment

## Phase 1: Changing the functions to classes

## Lab 26's branch is from BASE

## Phase 1 Requirements

- Beginning of the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

## Goals

- Convert all child components of App.js from classes to functions
  - The App component serves as the container for all sub-components of this application.
  - Leave this component as a Class.
  - Make sure all base styles for App are included in a .scss imported within App.js.
  - Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.

- Use .scss files to style each component
  - Each of the components use their own .scss file for styling.

- Core application functionality should remain unchanged:
  - The `<Form>` component should:
    - Call a function on submit that updates the `<App/>` component via a function sent down as a prop so that the app can process the form values.
  - The `<Results/>` component should show mock API results.

## Phase 1: Application Setup

- Basic React Application
- Scaffolding
- Basic State
- Rendering

UML: Lab 26

![26](public/assets/UML%20Rough%20Draft%20Lab%2026.png)

[Link to Code Sandbox:](https://singular-duckanoo-e22a19.netlify.app/)

Starter Code from [Seattle Code Javascript-401d48](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26/lab/starter-code)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Phase 2: `useState()` Hook

## Lab 27' Branch is from STATE

## Phase 2 Requirements

- In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the `useState()` hook in our functional components. In order to properly manage state with the useState hook, we will now convert `App.js` to a functional component.

## User Stories

- As a user, I want to enter the REST Method and URL to an API
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format

- User enters an API URL
- Chooses a REST Method
- Clicks the ???Go??? button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be ???pretty printed??? JSON

## Lab 27 Goals

Refactor any components using this.setState to implement the useState react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

### Suggested Component Hierarchy and Application Architecture

- `index.js` - Entry Point
- `App.js` - Container
  - Holds application state: The Request (from the form) and the Response (from the API)
  - Hook that can update state
  - Renders 2 Child Components

- `<Form />`
  - Expects a function to be sent to it as a prop
  - Renders a URL entry form
  - A selection of REST methods to choose from (???get??? should be the default)
    - The active selection should be displayed/styled differently than the others
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request
  - On submit
    - Send the Form entries back to the `<App>` using the method sent down in props
    - Form will run the API request
      - Toggle the ???loading??? status before and after the request

- `<Results />`
  - Conditionally renders ???Loading??? or the data depending on the status of the request
  - Expects the count, headers, results to be sent in as props
  - Renders the count
  - Renders the Result Headers as ???pretty??? JSON
  - Renders the Result Body as ???pretty??? JSON

UML: Lab 27

![UML](public/assets/UML%20Rough%20Draft%20For%20Lab%2027.png)

[Link to Code Sandbox:](https://codesandbox.io/p/github/Keelen-Fisher/resty/draft/epic-lena?file=%2FREADME.md)

Starter Code from [Seattle Code Javascript-401d48](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26/lab/starter-code)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Phase 3: `useEffect()` Hook

## Lab 28' Branch is from EFFECT-HOOK

## Phase 3 Requirements

- In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests.

## Users Stories

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it???s data
- As a user, I want to see the results returned from an API request in my browser in a readable format

- User enters an API URL
- Chooses a REST Method
- Clicks the ???Go??? button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be ???pretty printed??? JSON

## Lab 28 Goals

- Refactor application methods to allow for browser side HTTP requests to be sent.
  - Your implementation should allow the user to set a url, method, and request body.
- Make sure all relevant request and response data is displayed to the User.

### Suggested approach

- `<Form />` component, onSubmit() sends the user???s entries to the `<App />` via method sent in through props
- `<App />`does a check on the request data from the form and updates the request variable in state with the url, method, and potentially the body
- `<App />`has an effect hook that???s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state
- `<App />`updates state with the results of the API Request
- `<Results />` sees the new API data as a prop and renders the JSON

UML: Lab 27

![UML](public/assets/UML%20Rough%20Draft%20for%20Lab%2028.png)

[Link to Code Sandbox:](https://codesandbox.io/p/github/Keelen-Fisher/resty/draft/elegant-raman?file=%2FREADME.md)

Starter Code from [Seattle Code Javascript-401d48](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26/lab/starter-code)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Phase 4: Track History

## Lab 29's Branch is from REDUCER-HOOK

## Code Reviewed with Luis Rosales, Stephen Clemmer and Brandon Pitts

## Phase 4 Requirements

- In phase 4, we will be tracking every API call and storing it in history

## User stories

- As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly.

- User enters an API URL
- Chooses a REST Method
- Clicks the ???Go??? button
- Application fetches data from the URL given, with the method specified
- Application stores the API request and returned data into state
  - Updates the list of previous API calls

- Application Displays the response headers and results separately
- Both headers and results should be ???pretty printed??? JSON

## Lab 29 Goals

> Refactor your state management within the App component to use the `useReducer` hook.

- Replace any component state managements to use derived state from `useReducer` with a reducer function and initial state.

### Suggested Approach

- `<App />`: Use a reducer to store and manage all application state: loading, results, history
  - Add to history array in state after every api call
    - method, url, results (json)

- `<History />`: Iterates the history array in state and shows the previous API calls
  - When one is clicked on, show the results in the results component
    - Note: the results component renders whatever is in state ???

UML: Lab 29

![UML](public/assets/UML%20Rought%20Draft%20for%20Lab%2029.png)

[Link to Code Sandbox:]()

Starter Code from [Seattle Code Javascript-401d48](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26/lab/starter-code)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
