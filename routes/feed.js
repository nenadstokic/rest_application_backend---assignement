const express = require('express');
const feedController = require('../controllers/feed');
const router = express.Router();
const { body } = require('express-validator');
const isAuth = require('../middleware/is-auth');

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createPost
);

router.get('/post/:postId', isAuth, feedController.getPost);

router.put(
  '/post/:postId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePost
);

router.delete('/post/:postId', isAuth, feedController.deletePost);

router.get('/userstatus', isAuth, feedController.getUserStatus);

router.put('/setstatus', isAuth, feedController.setUserStatus);

module.exports = router;
