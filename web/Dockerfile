# Specify the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the app files to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["npm", "start"]