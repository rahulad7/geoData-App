import express from 'express';
import Dataset from '../models/Dataset';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const datasets = await Dataset.find();
    res.json(datasets);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

router.post('/', async (req, res) => {
  const { name, description, geojson } = req.body;
  try {
    const newDataset = new Dataset({ name, description, geojson });
    await newDataset.save();
    res.status(201).json(newDataset);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export { router as datasetRoutes };
