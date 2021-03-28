const express = require('express');
const {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
} = require('../controllers/topics');

const router = express.Router();
router.route('/').get(getTopics).post(createTopic);
router.route('/:id').get(getTopic).put(updateTopic).delete(deleteTopic);

module.exports = router;
