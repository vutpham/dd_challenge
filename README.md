## DD Coding Challenge

![image](./public/images/dd_chat.gif)

This is a chat app built using ReactJS with a provided Node server. It utilizes `Socket.IO` for real-time updates in different browser tabs.

## Set up and dependencies

1. Clone the repo
2. Install the necessary NPM modules by running `yarn install`
3. Set up server with `yarn run api-server`
4. Open up another terminal and serve the app by running `yarn start`

## Features

### Session Storage

The logged in user is stored in the browser tab's sessionStorage in order to maintain logged in state if the user refreshes their tab. This was necessary before SocketIO was added because the user would have to re-login when they refreshed to see new messages.

### Online Duration

The `userInfo` component tracks the current user's online duration by utilizing the `react-moment` component library.

### Real-time Chat Update

Slight modification was made to the `server.js` file (lines 152-173) in order to set up a SocketIO client to listen to chat messages from the frontend and update the `ChatMessages` component in real-time. By utilizing SocketIO, users can see new messages without having to refresh their tab.

### Autoscrolling

The `ChatMessages` component will render a scrollbar when the list of messages become taller than the set component height. After the scrollbar appears, new messages will automatically scroll the user to the bottom of the chat.

## Potential Improvements

### PropType Validations

One thing that I would to do improve this project would be to add PropType validations to the components to help future engineers have a better experience continuing work on this app. Right now, it is not very clear what prop types are getting passed inside of components, but having PropType validations should give new project contributors more clarity.

### React Hooks

Currently, I am using a mix of class-based components and function-based components. Switching over to React Hooks would allow the project to be more consistent and have only functional components and improve readability.

### API Error Handling

Instead of having the user wait for their submitted messsages to come back from the backend API, I could also immediately add it to the chat upon submission in order to optimize the UX. Doing this would make the chat seem more "snappy" and seamless, but I would have to catch the error in case the API fails. I would need to add `isFetching` and `hasError` to the state of components that need to make API requests and utilize loading-state components so users are aware of slow internet connections, API failures, and errors.

### Autoscrolling

Lastly, it could be frustrating to always scroll to the bottom when a new message is received--especially I'm trying to look for something and have gone up around 500 messages. One potential improvement would be to disable `scrollToBottom` if the user has more than 300px from the bottom of the chat.

### Testing-Library (React)

More tests need to be added and testing can always be improved.
