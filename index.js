require('isomorphic-fetch');
const server = require('./server');

const {PORT = 3000} = process.env;

// start the server on the given port
server.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}`);
});
