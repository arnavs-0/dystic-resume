# Deployment

This is a guide on how to build the source from scratch, along with setting up Firebase and related cloud functions to be able to export PDFs just like the original deployment of dystic-resume

### Requirements

- A Firebase project
- Works on both Linux, macOS and Windows
- Requires Node.js & NPM installed on the machine

### Setting up Firebase

1. Create a new Firebase project by visiting [Firebase Console](https://console.firebase.google.com/) and clicking on `Add Project`

2. Disable Google Analytics, or keep it enabled as per your requirements. Most people wouldn't need it.

3. Wait until Project is created, then click on Continue

4. Navigate to Realtime Database, and click on `Create Database`

5. Select any location that's nearby to you, and most importantly, create the database in `Test Mode` and click on Enable

6. Go back to Project Overview and click on `Web` and skip through every other step by clicking `Next`.

7. Copy configuration variables of your project, or keep this page open as you will need it later


### Cloning the Repository

1. Run this command on your machine's terminal or Command Prompt

```
git clone https://github.com/arnavs-0/dystic-resume.git
```

2. Copy the file `.env.example` to `.env` and start editing the file

```
cp .env.example .env
```

3. Copy configuration variables from last step to the .env file, it's fine to have `FIREBASE_MEASUREMENTID` empty if you had Google Analytics disabled.

4. Run `npm install` on the terminal/command prompt

5. After that's done, run `npm run build` and allow some time for the process to build
