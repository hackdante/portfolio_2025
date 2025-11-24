FROM node:20-alpine AS deps

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the project
COPY . .

# Build Next.js
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "start"]
