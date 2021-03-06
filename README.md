# Q3 Storybook workshop

This repository is the starter code for the Storybook workshop we ran on 2019-12-11, as part of the front-end team’s [Q3 Storybook rock](https://docs.google.com/document/d/1RxxItgp3pObVdPqcHu4EYhcAXokAZOrUbnCbcXqeDsM/edit).

## Resources

> 🎥 **Recording of the workshop**: [Q3 React components development with Storybook workshop 20191211](https://drive.google.com/file/d/1jOSg58WvTPVnRMaH79mgBWkN5QFQfqAz/view)

Useful links:

- [Storybook documentation](https://storybook.js.org/)
- [Official Storybook tutorials](https://www.learnstorybook.com/)
- Example: [Sue Ryder OBCS](https://counselling.staging.sueryder.org/storybook/)
- Example: [Draftail](https://demo.draftail.org/storybook/)
- Example: [Airbnb’s react-dates](https://airbnb.io/react-dates/)
- Example: [GOV.UK React](https://govuk-react.github.io/govuk-react/)

## Workshop instructions

Please go through the following steps to set up the workshop project locally:

```sh
git clone git@git.torchbox.com:thibaudcolas/llamastories.git
cd llamastories
nvm use
npm install
npm run storybook
```

If the project is set up correctly this last command should have started a Storybook build in watch mode and opened a new tab in your browser.

```txt
│   Storybook 5.2.6 started                          │
│   12 s for manager and 12 s for preview            │
│                                                    │
│   Local:            http://localhost:9009/         │
```

## Workshop material

### Why Storybook

- Similar to django pattern library (& patternlab)
- Not a standalone styleguide
- Plays well to the strengths of React – component-driven development, functional programming, static analysis
- Similar to TDD but for visual aspects

### Using Storybook for development

We’ll go through the stories in this order:

- `App.stories.js` – the basics
- `FizzBuzz.stories.js` – writing stories 101
- `Icon.stories.js` – design systems ftw
- `Button.stories.js`
- `InfoBox.stories.js`

### Design systems

MDX

https://www.learnstorybook.com/design-systems-for-developers/

https://medium.com/storybookjs/storybook-docspage-e185bc3622bf

---

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
