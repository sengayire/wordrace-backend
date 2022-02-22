import { Router } from 'express';

import { saveRecord } from '../../controller/record';

const router: Router = Router();

router.route('/save').post(saveRecord);

export default router;
