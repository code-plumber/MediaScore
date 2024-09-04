import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.send('Welcome to the MediaScore API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});