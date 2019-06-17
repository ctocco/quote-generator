# Envinronmental Quotes Generator

## Project Synopsis

Idea: With the current political climate heavily focused on climate change and action, I decided
to collate quotes I have come across, relating to the environment. The app randomly picks a quote
and background. Users can then share the tweet on twitter or tumblr.

I plan to submit this to [World Environment Day](https://www.worldenvironmentday.global/) 2020
as an open source project where they can share with other users who in turn could
use the project to create a list of their own quotes and share with their friends.

## Folder Structure

```
├── public
└── src
    ├── api
    ├── components
    │   ├── Button
    │   ├── QuoteText
    │   └── Social_Media
    ├── helpers
    ├── images
    └── scss
        └── base
```

## Usage

1. api

The api folder is where you will find quoteCollection.js. This is where you can edit and add to the list of quotes. They will then automatically be generated for you.

2. components

These are all my react components _button_,_quoteText_,_SocialMedia_. They are reusable and take the prop element from the QuoteBox.js parent element. Not that I am also using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) with react to make sure the currect type of props are being used.

3. helpers

These are the helper functions that help randomise the text and background that is then imported into QuoteBox.js

4. scss

I am using [css modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and [css-bem]https://css-tricks.com/bem-101/ method however the project is not currently big enough to exhibit full bem structure

5. eslint and prettier

For cleaner code I have configured these based on the Airbnb eslint style to insure my code stays clean
and readable. [eslint](https://www.npmjs.com/package/eslint-config-airbnb)

6. jest

For testing I am using [jest](https://jestjs.io/)

#### Preview of my [Quote App](https://eco-quotes-claudio.now.sh/) !!not online

#### [!] I am currently working on the first release.

### Tech Stack Overview

HTML
SASS
Javascript es6
React.js

## Contributing

I'll be happy to hear your feedback and if you have any quotes you would like to add to the app
feel free to message me

### Contributors

This project exists thanks to:

Billiana
Oliver
Free Code Camp

## License
