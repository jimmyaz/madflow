const app = require('./server');

// Start server, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
