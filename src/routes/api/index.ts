import { Router } from 'express';

import words from './words';
import users from './users';
import records from './record';

const router: Router = Router();

router.use('/', words);
router.use('/users', users);
router.use('/records', records);

export default router;
