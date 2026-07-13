const express = require('express');

// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('DevSecOps Demo Application');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});