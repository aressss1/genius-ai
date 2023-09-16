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
git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
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
![Screenshot (198)](https://github.com/aressss1/saas-ai-platform/assets/127649710/0cb48e32-f335-40e4-9110-66a3e86c7fbd)
![Screenshot (199)](https://github.com/aressss1/saas-ai-platform/assets/127649710/bc8ca62f-a13e-4aa8-af0c-242f419273f3)
![Screenshot (200)](https://github.com/aressss1/saas-ai-platform/assets/127649710/d83f4830-8269-431f-b82a-f8f0a05d86da)
![Screenshot (201)](https://github.com/aressss1/saas-ai-platform/assets/127649710/5c5454e2-8ec1-4463-b2ad-a9af9545bf24)
![Screenshot (202)](https://github.com/aressss1/saas-ai-platform/assets/127649710/57e372cb-3627-4125-94c1-ce04ba38ffdd)
![Screenshot (203)](https://github.com/aressss1/saas-ai-platform/assets/127649710/7a87e0da-8af6-43c7-aef3-c6403ea6e45f)
![Screenshot (204)](https://github.com/aressss1/saas-ai-platform/assets/127649710/edfdf40c-8f2d-4fae-aa74-6e75558a0b40)

