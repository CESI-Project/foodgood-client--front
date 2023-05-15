# FoodGood Client Front

## Setup Web

### With NVM

Install [NVM](https://github.com/nvm-sh/nvm)

```shell
nvm install
nvm use
```

### Without NVM

Install the same [Node](https://nodejs.org/en) version of the `.nvmrc` file.

### Dependencies

```shell
npm ci
```

### Launch project

```shell
npm run start
```

### Launch test

```shell
npm run test
```

## Setup Mobile

### Create Android App

```shell
npx cap add android
```

### Sync with code

```shell
npx cap sync
```

### Use Android Studio

Open `/android` and create Virtual Device [Android Studio](https://developer.android.com/studio/run/managing-avds)

You can run App with Android Studio :
![img.png](img.png)

Or with command line :

```shell
npx cap run android
```
