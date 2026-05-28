# Use Node.js 18 on Alpine Linux for small image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port 7860 (default for Hugging Face Spaces)
EXPOSE 7860

# Set environment variable for port
ENV PORT=7860

# Start the application
CMD ["npm", "start"]
