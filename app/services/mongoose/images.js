const Images = require('../../api/v1/images/model');
const {StatusCodes} = require('http-status-codes')

const generateUrlImage = async (req) => {
    const result = `uploads/${req.file.filename}`

    return result;
}


const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : 'uploads/avatar/default.jpeg',
  });

  return result;
};

const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
  
    if (!result) {
      const statusCode = StatusCodes.NOT_FOUND;
      const errorMessage = `Tidak ada Gambar dengan id :  ${id}`;
      throw new Error(`${statusCode} - ${errorMessage}`);
    }
  
    return result;
  };

module.exports = { createImages, generateUrlImage, checkingImage };