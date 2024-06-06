# SaaS AI Platform with NextJs13 , React , Tailwind , Prisma & Stripe

## Features

  +  Tailwind design
  +  Tailwind animations and effects
  +  Full responsiveness
  +  Clerk Authentication (Email, Google, 9+ Social Logins)
  +  Server error handling using react-toast
  +  Image Generation Tool (Open AI)
  +  Video Generation Tool (Replicate AI)
  +  Conversation Generation Tool (Open AI)
  +  Music Generation Tool (Replicate AI)
  +  Page loading state
  +  Stripe monthly subscription
  +  Free tier with API limiting
  +  Premium Tier


### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/aressss1/saas-ai-platform.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Preview

![prismify-render-1716801042283](https://github.com/aressss1/genius-ai/assets/127649710/c95dc492-b64f-419c-afad-2aa7e0310c9f)
![prismify-render-1716801027461](https://github.com/aressss1/genius-ai/assets/127649710/58d30ba9-38a1-41de-97db-997e23d67fb4)
![prismify-render-1716801016291](https://github.com/aressss1/genius-ai/assets/127649710/b5e9484c-ad7f-4fe4-9754-da9d5484e005)
![prismify-render-1716801136648](https://github.com/aressss1/genius-ai/assets/127649710/23ccbebf-a3e2-4974-ac33-4b07432d9b2f)
![prismify-render-1716801121151](https://github.com/aressss1/genius-ai/assets/127649710/22e94324-c7ce-4d3b-92d5-2c8f829045ca)
![prismify-render-1716801086647](https://github.com/aressss1/genius-ai/assets/127649710/55d5e6da-ca8f-4f6d-96dd-765b8032768a)
![prismify-render-1716801069138](https://github.com/aressss1/genius-ai/assets/127649710/a5c4c173-6adb-4568-a91c-3bc4169f6683)
