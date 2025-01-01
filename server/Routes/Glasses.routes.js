const express = require('express')
const upload = require('../Middlewares/Multer')
const {
    GlassesPost,
    getAllGlasses,
    orderimagechange,
    getItemById,
  } = require('../Controllers/Glasses.controller');
  



const router = express.Router()



router.post('/glasses-post', upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'additionalImages', maxCount: 4 }]), GlassesPost);
router.get('/glasses-get', getAllGlasses)
router.get('/getglassesonid/:id', getItemById)
router.post('/orderchange/:id', orderimagechange)




module.exports = router