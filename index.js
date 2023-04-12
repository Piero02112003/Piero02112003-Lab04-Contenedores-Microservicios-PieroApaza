const express = require('express');

const app = express();

const clientes = [
  { id: 1, nombre: 'Piero Apaza' },
  { id: 2, nombre: 'Gian Marco Flores' },
  { id: 3, nombre: 'Mariana Torres' },
];

const productos = [
  { id: 1, nombre: 'Lavadora' },
  { id: 2, nombre: 'Microondas' },
  { id: 3, nombre: 'Televisión' },
];

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

const port = 5000;
app.listen(port, () => {
  console.log(`El servidor se ejecuta en el puerto ${port}`);
});
