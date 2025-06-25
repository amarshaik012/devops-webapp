const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(' Hello from Azure DevOps - WebApp'));
app.get('/health', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
