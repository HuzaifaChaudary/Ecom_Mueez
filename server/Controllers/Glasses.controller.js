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

const getGlassById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters
    const glass = await Glasses.findById(id); // Query the database for the glass
    if (!glass) {
      return res.status(404).json({ message: 'Glass not found' }); // If no glass is found, return a 404 error
    }
    res.status(200).json(glass); // Return the glass data
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch glass by ID', error }); // Handle server errors
  }
};
const orderimagechange = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters
    const { mainImage, additionalImages } = req.body; // Extract the new image data from the request body

    const updatedGlass = await Glasses.findByIdAndUpdate(
      id, // ID of the glass to update
      { mainImage, additionalImages }, // New image data
      { new: true } // Return the updated document
    );

    if (!updatedGlass) {
      return res.status(404).json({ message: 'Glass not found' }); // If no glass is found, return a 404 error
    }

    res.status(200).json({ message: 'Glass images updated successfully', updatedGlass }); // Return success response
  } catch (error) {
    res.status(500).json({ message: 'Failed to update glass images', error }); // Handle server errors
  }
};
const getItemById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters
    const item = await Glasses.findById(id); // Query the database for the item
    if (!item) {
      return res.status(404).json({ message: 'Item not found' }); // If no item is found, return a 404 error
    }
    res.status(200).json(item); // Return the item data
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch item by ID', error }); // Handle server errors
  }
};


module.exports = { GlassesPost, getAllGlasses, getGlassById, orderimagechange, getItemById };