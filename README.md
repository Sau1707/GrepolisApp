# GREPO App

Created with [Expo](https://expo.dev/) is a remade version of the new grepolis app.

<br />
## Get started
Install nodejs dependencies

```bash
npn install
```

Create a second terminal and run

```bash
npm run script
```

It will start a nodemon istance to watch for updates into the script folder.
Every time a script it's updated get compiled and minified into the `out` directory with the same filename

Finally to tart the development server

```
npm start
```

scan the qrcode with the Expo mobile app to see the live preview on your mobile. \
Updated on the code will automatically reload the application

<br />

## How it works

Works by taking the browser version of the game and injecting js to add or modify features and change graphics

I have not yet found a way to add the scripts (grepodata, grcrt, ...) but it is possible to program new ones and inject them in the application

<br />

## Features

-   ✅ Swipe to switch polis
-   ✅ Make City UI Bigger

## Fixes

-   ✅ Move Context Menu to click position

<br />

## Build

#### Android:

To create the `apk` file to install it, use:

```bash
eas build -p android --profile preview
```

#### Ios:

TODO

<br />

## Planned:

-   [ ] Keep fixing UI to make everything clickable in an easy way
-   [ ] A way to convert the reports
-   [ ] Better trading
-   [ ] Add script like grepodata, grcrt, diotool, ecc
