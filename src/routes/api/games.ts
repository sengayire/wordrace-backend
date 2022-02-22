import { Router } from 'express';

import { createGame } from '../../controller/games';

const router: Router = Router();

router.route('/').post(createGame);

export default router;
