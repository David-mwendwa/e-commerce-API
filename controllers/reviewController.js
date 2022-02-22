const createReview = async (req, res) => {
  res.send('createReview');
};

const getAllReviews = async (req, res) => {
  res.send('getAllReviews');
};

const getSingleReview = async (req, res) => {
  res.send('getSingleReview');
};

const updateReview = async (req, res) => {
  res.send('updateReview');
};

const deleteReview = async (req, res) => {
  res.send('deleteReview');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
