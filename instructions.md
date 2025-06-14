# Quick Start: Customizing This Boilerplate

1. **Clone this repo:**
   ```
   git clone <this-repo-url> <your-new-project-name>
   cd <your-new-project-name>
   ```

2. **Change the database name:**
   - Open `server/config/db.js` and set your new database name in the `dbName` variable or where it's passed to `mongoose.connect`.

3. **Create a new Clerk app:**
   - Go to [Clerk dashboard](https://dashboard.clerk.com/), create a new app, and copy the new publishable key.

4. **Update Clerk key:**
   - Edit `.env` and set `VITE_CLERK_PUBLISHABLE_KEY` to your new key.

---

That's it! Now install dependencies and run the project as usual. 