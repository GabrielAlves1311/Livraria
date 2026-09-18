require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarBanco = require('./config/database');
const LivroRoutes = require('./routes/LivroRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api/livros', LivroRoutes);
app.get('/api/status', (req, res) => {
  res.status(200).json({
    api: 'online',
    banco: 'MongoDB local conectado'
  });
});
async function iniciarServidor() {
  await conectarBanco();
  app.listen(PORT, () => {
    console.log(`Backend da Livraria rodando em http://localhost:${PORT}`);
  });
}
iniciarServidor();
