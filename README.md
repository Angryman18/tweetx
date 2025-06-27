## About

This is simple tweet application where user can create an account and login on the website. Post some text as to be tweet and also find other users on the platform. Users are also able to follow and unfollow each other and following one will make the post appear on the news feed.

## Tech
* NextJS
* Typescript
* TailwindCSS
* Mongodb
* NextJS API Routes
* Express
* JWT
* Bcrypt

## Deployment
Application is deployed on https://tweetx.junior-dev.com

## How to run it locally?

just create a env variable called .env and add these two variable
```
NEXT_PUBLIC_JWT_SECRET = <jwt-secret>
NEXT_PUBLIC_MONGO_URI = <mongo-db-uri>
```

and after that to start the dev server just hit `npm run dev`
