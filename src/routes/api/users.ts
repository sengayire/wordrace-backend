import { Router } from 'express';

import { createUser } from '../../controller/users';

const router: Router = Router();

router.route('/register').post(createUser);

export default router;
