# TweetCard Component

The TweetCard component is a React component that displays a tweet card with an
avatar, follower count, and a follow button.

# Installation

You can install the TweetCard component via NPM or Yarn: bash Copy code npm
install tweet-card-component bash Copy code yarn add tweet-card-component

# Usage

To use the TweetCard component in your React application, import it from the
package and use it in your JSX code: import { TweetCard } from
'tweet-card-component'; function App() { return ( <div> <TweetCard /> </div> );
}

# Props

The TweetCard component does not accept any props.

# Local Storage

The TweetCard component uses local storage to save the state of the follow
button and follower count between page refreshes.

# Dependencies

The TweetCard component depends on the following packages: react
styled-components
