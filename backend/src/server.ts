import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRoutes } from './routes/auth'; 
import { uploadRoutes } from './routes/upload';
import { datasetRoutes  } from './routes/DatasetRoute';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const mongoURI = '';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/datasets', datasetRoutes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
