import { Router } from 'express';

import words from './words';
import users from './users';
import records from './record';
import games from './games';

const router: Router = Router();

router.use('/', words);
router.use('/users', users);
router.use('/records', records);
router.use('/games', games);

export default router;
