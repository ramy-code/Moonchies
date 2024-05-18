# Use the official Node.js image as a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

RUN npm install -g serve
# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["serve","-p","3000","build/"]