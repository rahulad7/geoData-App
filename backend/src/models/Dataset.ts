import mongoose, { Document, Schema } from 'mongoose';

interface IDataset extends Document {
  name: string;
  description: string;
  geojson: object;
}

const DatasetSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  geojson: { type: Schema.Types.Mixed, required: true }
});

const Dataset = mongoose.model<IDataset>('Dataset', DatasetSchema);
export default Dataset;
