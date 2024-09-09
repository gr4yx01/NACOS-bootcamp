const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Handle different routes and methods
    if (req.url === '/' && req.method === 'GET') {
        // Root endpoint
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to the Home Page!' }));
    } else if (req.url === '/about' && req.method === 'GET') {
        // About endpoint
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'This is the About Page.' }));
    } else if (req.url === '/users' && req.method === 'GET') {
        // Users endpoint - returning a list of users
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        res.writeHead(200);
        res.end(JSON.stringify(users));
    } else if (req.url === '/users' && req.method === 'POST') {
        // Create a new user - handling a POST request
        let body = '';

        // Collect data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Process data once fully received
        req.on('end', () => {
            const newUser = JSON.parse(body);
            // Typically, you would save the new user to a database
            res.writeHead(201);
            res.end(JSON.stringify({ message: 'User created', user: newUser }));
        });
    } else {
        // Handle 404 - Not Found
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
})


server.listen(3000, () => {
    console.log('Server is running on port 3000');
})