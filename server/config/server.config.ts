import { registerAs } from '@nestjs/config';

export default registerAs('server', () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.SERVER_PORT, 10) || 4200,
  jwtSecret: process.env.JWT_SECRET,
}));
