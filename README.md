# messenger-backend

## User stories

1. As a new user I want to be able to sign up to use the app.

As an existing use I want to be able to:

2. login and logout to protect my privacy
3. have an option for persistent login.
4. add an contact by searching user database by emails
5. tap a contact to open a chat window to send messages.
6. see my chat rooms and read older messages.
7. be notified on my phone whenever I receive a message
8. see that the person I chat with is typing...
9. create multi person chat-rooms and/or add people to existing ones
10. see who is online atm.
11. send media rich messages (pictures, video, voice)
12. Have a wonderful and easy experience using the app

# Server template

This is a simple server template to for my students to start projects quickly.

## Table of contents:

- **[Setup](#setup-how-to-use-this-template)**
- **[Endpoints](#endpoints)**
- **[Sample requests with axios](#sample-requests-with-axios)**
- **[Sample requests with httpie](#sample-requests-with-httpie)**
- **[History of this project (pullrequests)](#history-of-this-project)**

## SETUP How to use this template

2. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

3. cd into your project

```
cd YOUR_PROJECT_NAME
```

4. install dependencies

```
npm install
```

5. Configure your database in `config/config.json`

```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

And you must revert the changes on this line in models/index.js: https://github.com/Codaisseur/express-template/commit/ada7711c8b19c8f240bc61f94743213efe4a77d2#diff-18c449caa39363f82bacb4f7489e7783L15

6. Create database, run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)

```
npm run dev
```

8. or start normally

```
npm start
```

## Endpoints

| Method | Path | Purpose                        | required parameters | auth |
| ------ | ---- | ------------------------------ | ------------------- | ---- |
| GET    | '/'  | Test if your server is running | none                | no   |
