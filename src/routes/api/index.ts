import { Router } from 'express';

import words from './words';

const router: Router = Router();

router.use('/', words);

export default router;
