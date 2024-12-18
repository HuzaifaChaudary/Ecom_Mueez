const Glasses = require('../Modals/Glasses.modal');

const GlassesPost = async (req, res) => {
  try {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
    const mainImage = req.files?.mainImage?.[0]?.path || null;
    const additionalImages = req.files?.additionalImages?.map(file => file.path) || [];

    if (!name || !discountPercentage || !description || !oldPrice || !newPrice || !mainImage) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newGlasses = new Glasses({
      name,
      discountPercentage,
      mainImage,
      additionalImages,
      description,
      oldPrice,
      newPrice,
    });

    await newGlasses.save();
    res.status(201).json({ message: 'Glasses added successfully', glasses: newGlasses });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add glasses', error });
  }
};

const getAllGlasses = async (req, res) => {
  try {
    const glasses = await Glasses.find();
    res.status(200).json(glasses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch glasses', error });
  }
};

module.exports = { GlassesPost, getAllGlasses };
