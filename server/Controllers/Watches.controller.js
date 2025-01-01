const Watch = require('../Modals/Watches.modal');

const WatchesPost = async (req, res) => {
  try {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
    const mainImage = req.files?.mainImage?.[0]?.path || null;
    const additionalImages = req.files?.additionalImages?.map(file => file.path) || [];

    if (!name || !discountPercentage || !description || !oldPrice || !newPrice || !mainImage) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newWatch = new Watch({
      name,
      discountPercentage,
      mainImage,
      additionalImages,
      description,
      oldPrice,
      newPrice,
    });

    await newWatch.save();
    res.status(201).json({ message: 'Watch added successfully', watch: newWatch });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add watch', error });
  }
};

const getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.find();
    res.status(200).json(watches);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch watches', error });
  }
};

module.exports = { WatchesPost, getAllWatches };
