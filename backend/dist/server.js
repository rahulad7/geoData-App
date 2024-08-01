"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./routes/auth"); 
const upload_1 = require("./routes/upload"); 
const DatasetRoute_1 = require("./routes/DatasetRoute");
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// MongoDB connection
const mongoURI = '';
mongoose_1.default.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
// Routes
app.use('/api/auth', auth_1.authRoutes);
app.use('/api/upload', upload_1.uploadRoutes);
app.use('/api/datasets', DatasetRoute_1.datasetRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
