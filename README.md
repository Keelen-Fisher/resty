# Phase 1: Changing the functions to classes

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
