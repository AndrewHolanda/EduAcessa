import { app } from './app';
import { env } from './config/env';

app.listen(env.port, () => {
  console.log(`EduAcessa API running on http://localhost:${env.port}`);
});
