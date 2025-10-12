# 1. Node waali image le rahe hain (builder ke liye)
FROM node:18-alpine AS builder

# 2. Kaam karne wali jagah bana rahe hain
WORKDIR /app

# 3. Package files copy karo (dependency install karne ke liye)
COPY package*.json ./

# 4. Dependencies install karo
RUN npm install

# 5. Baaki sari files copy karo
COPY . .

# 6. Build command chalao (Vite ka)
RUN npm run build

# 7. Nayi image - sirf production ke liye
FROM nginx:alpine

# 8. Vite ka dist folder Nginx me copy karo
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. Nginx config (optional, default se kaam chal jata hai)
EXPOSE 80

# 10. Nginx chalu rakho
CMD ["nginx", "-g", "daemon off;"]
