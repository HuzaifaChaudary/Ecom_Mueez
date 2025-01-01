const express = require('express')
const upload = require('../Middlewares/Multer')
const { WatchesPost, getAllWatches } = require('../Controllers/Watches.controller')





const router = express.Router()



router.post('/watches-post', upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'additionalImages', maxCount: 4 }]), WatchesPost);
router.get('/watches-get', getAllWatches)






module.exports = router