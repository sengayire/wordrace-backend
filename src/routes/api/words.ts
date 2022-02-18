import { Router } from 'express';

import { getWords } from '../../controller/words';

const router: Router = Router();

router.route('/words').get(getWords);

export default router;
