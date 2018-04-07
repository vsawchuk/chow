# Chow

## What is Chow?

Chow is a react native app designed for iPhone X for forgetful foodies who want to keep track of the restaurants they're interested in. Search for restaurants and add them to your wishlists!

## Chow Functionality
### Initial Landing Page and Restaurant Search
![gif of Chow landing page and restaurant search](https://media.giphy.com/media/5eFtTm7Qyg9cH6OD9M/giphy.gif)

### Sign in with Google
![gif of signing in with Google](https://media.giphy.com/media/wIJkTMh0roq4kz71Dr/giphy.gif)

### Add a Restaurant to a Wishlist
![gif of adding a restaurant to a wishlist](https://media.giphy.com/media/3GBOKYYVP1dWtVgoKD/giphy.gif)

### Add and Edit Wishlist
![gif of adding and editing a wishlist](https://media.giphy.com/media/lck9DO0GC3LN9C1SeX/giphy.gif)

### Delete a Wishlist
![gif of deleting a wishlist](https://media.giphy.com/media/2m0vg7Kwl3C9ccjVZz/giphy.gif)

## Get Chow up and running on your local environment
1. Fork and clone this repository
2. `cd` into the directory
3. Run `npm install` to install dependencies
4. Get a Yelp API Key [here](https://www.yelp.com/developers/v3/manage_app)
5. Follow these [Expo instructions](https://docs.expo.io/versions/latest/sdk/google.html#get-an-oauth-client-id-for-your-app) to get a Google OAuth Client ID [here](https://console.developers.google.com/apis/credentials)
6. Set up the [Chow API](https://github.com/vsawchuk/ChowAPI)
7. Add a .env file to the root directory. The .env file should look like the following:

```
YELP_API_KEY=yourYelpAPIKey
GOOGLE_OAUTH_IOS_CLIENT_ID=yourGoogleOauthIosClientId.apps.googleusercontent.com
PRODUCTION_API=linkToYourBackendAPI
```


8. Run `npm start` to launch the packager
9. Use [Expo](https://expo.io/learn) to view the running code on a device. Use the Expo phone app by scanning the QR code that results from `npm start`, or use the Expo XDE to launch the app to a simulator.
