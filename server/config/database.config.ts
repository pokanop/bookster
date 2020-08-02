import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  mongoServer: process.env.MONGO_SERVER,
}));
