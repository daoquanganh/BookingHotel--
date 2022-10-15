import express from 'express';

import hotel from './route.hotel.js';
import room from './route.room.js';
import customer from './route.customer.js';
import booking from './route.booking.js';
import auth from './route.auth.js'
const router = express.Router();

router.use('/hotel', hotel);
router.use('/room', room);
router.use('/customer', customer);
router.use('/booking', booking);
router.use('/auth', auth)

export default router;