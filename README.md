# 🧱 Full-Stack Boilerplate for New Projects

Welcome! This repository is a boilerplate for starting new full-stack projects with React, Tailwind CSS, MongoDB, and Clerk authentication.

**Follow the steps below to quickly set up your own project and be ready to start building.**

---

1. **Clone this repo:**
   ```sh
   git clone <this-repo-url> <your-new-project-name>
   cd <your-new-project-name>
   ```

2. **Create a `.env` file in the project root with these variables:**
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   MONGODB_URI=your_mongodb_connection_string
   MONGODB_DBNAME=your_database_name
   ```
   - Set `VITE_CLERK_PUBLISHABLE_KEY` to your Clerk publishable key.
   - Set `MONGODB_URI` to your MongoDB connection string (without a database name).
   - Set `MONGODB_DBNAME` to the name of the database you want to use for this project.

3. **Create a new Clerk app:**
   - Go to [Clerk dashboard](https://dashboard.clerk.com/), create a new app, and copy the new publishable key.

4. **Update Clerk key:**
   - Edit `.env` and set `VITE_CLERK_PUBLISHABLE_KEY` to your new key.

---

That's it! Now install dependencies and run the project as usual. 