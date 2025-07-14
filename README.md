# Fix Broken Dockerfile for Web Application Build

## Task Description
You are provided with a basic Node.js web application set up for containerization. The application requires the `APP_SECRET` environment variable to start. However, the current configuration in `docker-compose.yml` does not assign a value to this variable, causing the application to fail at startup with an environment variable error.

## Your Task
- Inspect the configuration files, identify why the application does not start successfully, and resolve the issue so the application launches without any environment variable errors.
- After your fix, running `docker-compose up` should start the web application successfully, and you should be able to access it via [http://localhost:3000](http://localhost:3000).

## Setup Instructions
1. **Install Docker and Docker Compose** if you do not have them already.
2. Run the installation script:
   ```
   ./install.sh
   ```
3. Start the application:
   ```
   ./run.sh
   ```

## Validation
- The application should start with no `APP_SECRET` environment variable errors.
- Visit [http://localhost:3000](http://localhost:3000) in your browser. You should see the message: "App is running!"
