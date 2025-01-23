const Bags = require('../Modals/Bags.modal');

const Bagspost = async (req, res) => {
  try {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;

    const mainImage = req.files?.mainImage?.[0]?.path || null;
    const additionalImages = req.files?.additionalImages?.map(file => file.path) || [];

    if (!name || !discountPercentage || !description || !oldPrice || !newPrice || !mainImage) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newBag = new Bags({
      name,
      discountPercentage,
      mainImage,
      additionalImages,
      description,
      oldPrice,
      newPrice,
    });

    await newBag.save();

    res.status(201).json({ message: 'Bag added successfully', bag: newBag });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add bag', error });
  }
};

const getAllBags = async (req, res) => {
  try {
    const bags = await Bags.find();
    res.status(200).json(bags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch bags', error });
  }
};

const getBagById = async (req, res) => {
  try {
    const { id } = req.params;
    const bag = await Bags.findById(id);
    if (!bag) {
      return res.status(404).json({ message: 'Bag not found' });
    }
    res.status(200).json(bag);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bag by ID', error });
  }
};

module.exports = { Bagspost, getAllBags, getBagById };
