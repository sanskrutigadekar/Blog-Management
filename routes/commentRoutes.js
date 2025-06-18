const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { authMiddleware, authorizeRoles } = require('../middleware/authMiddleware');

// Add a comment to a blog post (authenticated users)
router.post('/:blogId', authMiddleware, commentController.addComment);

// Get all comments for a blog post (public)
router.get('/:blogId', commentController.getCommentsForBlog);

// Delete comment (admin only)
router.delete('/delete/:commentId', authMiddleware, authorizeRoles('admin'), commentController.deleteComment);

module.exports = router;
