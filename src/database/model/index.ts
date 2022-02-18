import 'dotenv/config';
import mongoose from 'mongoose';
import dbConfig from 'src/database/config/index';

const dbConfigs = () => {
  const env = process.env.NODE_ENV || 'development';
  
  const config = dbConfig[env];

  mongoose.connect(config.url);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error: '));

  db.once('open', () => {
    console.log('Connected successfully');
  });
};

export default dbConfigs;
