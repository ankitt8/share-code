curl -X GET http://localhost:3000/api/health


curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}' \
  -c cookies.txt



  curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password123"}' \
  -c cookies.txt

  curl -X GET http://localhost:3000/api/auth/profile -b cookies.txt