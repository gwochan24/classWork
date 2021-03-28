// @description   Get all topics
// @route         GET /
// access         Public
exports.getTopics = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all topics.' });
};

// @description   Get a single topic
// @route         GET /:id
// access         Public
exports.getTopic = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get a single topic ${req.params.id}.` });
};

// @description   Create a topic
// @route         POST /
// access         Private
exports.createTopic = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new topic.' });
};

// @description   Update topic
// @route         PUT /:id
// access         Public
exports.updateTopic = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update topic ${req.params.id}.` });
};

// @description   Delete a topic
// @route         DELETE /:id
// access         Public
exports.deleteTopic = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete topic ${req.params.id}.` });
};
