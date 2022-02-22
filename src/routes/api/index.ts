import { Router } from 'express';

import words from './words';
import users from './users';

const router: Router = Router();

router.use('/', words);
router.use('/users', users);

export default router;
