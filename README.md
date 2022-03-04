# Braintrust Analytics dashboard

This project is an analytics dashboard of the data from the newly created [Braintrust Fee Convertor contract](https://etherscan.io/address/0x438e6416fe63863c434e4d6ee0c39d8f96880186#code).

### Tabel of Contents

-   <a href="#general">General information</a>
-   <a href="#dev">Developer guide</a>

<h2 id="general">About the project</h2>

The Braintrust fee converter contract is a recently implemented feature [proposed by the Braintrust DAO](https://snapshot.org/#/usebraintrust.eth/proposal/QmRgbnjVzTMShoT2dHa7dAQj4EYo3RMdhVUUKN9XrnBobQ) that allows nodes in the network to pay fees in the native token [$BTSRT](https://www.coingecko.com/en/coins/braintrust).<br/>
This results in a programmatic correlation between the GSV of the network and $BTRST value.<br/>
Interested? Learn more in the <a href="#resources">resources</a> section.

## Future Plans✨

-   Connect Directly with an on-chain API
-   Ability to filter and search
-   More complex analytics and charts from various data sources

## Data analytics

The project is based on the data from [fees.btrstinfo.xyz](https://fees.btrstinfo.xyz/)<br/>
The data was sorted using the [Pandas](https://pandas.pydata.org/) library in Python. You can find the notebook of the data [here](https://colab.research.google.com/drive/1B1yOhnXW2YzEuwnLZHqjMyIMPt9Du0P4?usp=sharing)

<h2 id="resources">Resources</h2>

-   [Braintrust founders on NotBoring](https://www.notboring.co/p/braintrust-fighting-capitalism-with)
-   [Article from the core dev](https://medium.com/snowfork/introducing-the-braintrust-fee-converter-21be7c8af951)
-   [My article](https://mirror.xyz/0x7c9CEfF6479439BF14621A09Ca8ab5635a26bD00/tbWNLgXQjF2ZQPCBOxSUmMd59Da-mnFqx8DJIy8G6ms)

<h2 id="dev">Tech Stack</h2>

-   [Create React App](https://github.com/facebook/create-react-app).
-   [Chakra UI](https://github.com/chakra-ui/chakra-ui)
-   [Recharts](https://recharts.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
