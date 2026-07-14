const express = require('express');

// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('DevSecOps Demo Application');
});
app.get('/unsafe', (req, res) => {
    const command = req.query.command;

    require('child_process').exec(command, (error, stdout) => {
        if (error) {
            return res.status(500).send(error.message);
        }

        res.send(stdout);
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});