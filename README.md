# Envinronmental Quotes Generator

Preview of my [Quote App](https://eq-generator.ctocco.now.sh) now online!

## Project Synopsis

> "Sundarbans, (is) the world’s largest contiguous mangrove forest"
> _-Pete Schwarzstein._

The background image is an outline of a mangrove forest.[This article](https://www.nationalgeographic.com/magazine/2019/07/sundarbans-mangrove-forest-in-bangladesh-india-threatened-by-rising-waters-illegal-logging/) from the national geographic outlines how climate change is affecting this natural wonder. The forest like many others in the world are rapidly being destroyed either by development or by the increasingly warming climate. Often those with the most to lose are the poorer inhabitants as they rely on these forests for not only their subsistence but also income. Millions of people rely on this mangrove forest for their livelihood and now it is disappearing.

With the current political climate heavily focused on climate change and action, I decided
to collate quotes I have come across, relating to the environment to raise awareness. The app randomly picks a quoteand background. Users can then share the quotes on twitter or tumblr.

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

The api folder is where you will find quoteCollection.js. This is where you can edit and add to the list of quotes. They will then automatically be generated for you at random.

2. components

These are all my react components _button_,_quoteText_,_SocialMedia_. They are reusable and take the props element from the QuoteBox.js parent element. Not that I am also using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) with react to make sure the correct type of props types are being passed to the children.

3. helpers

These are the helper functions that help randomise the text and background that is then imported into QuoteBox.js.

4. scss

I am using [css modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and [css-bem](https://css-tricks.com/bem-101/) method however the project is not currently big enough to exhibit full bem structure.

5. eslint and prettier

For cleaner code I have configured these based on Airbnb eslint styling to insure my code stays clean
and readable. [eslint](https://www.npmjs.com/package/eslint-config-airbnb)

6. jest

For testing I am using [jest](https://jestjs.io/).

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
