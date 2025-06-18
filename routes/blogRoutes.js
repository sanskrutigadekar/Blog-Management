const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authMiddleware, authorizeRoles } = require('../middleware/authMiddleware'); // ✅ Correct import

// Create blog (Writer/Admin only)
router.post(
  '/',
  authMiddleware,
  authorizeRoles('writer', 'admin'),
  blogController.createBlog
);

// Get all published blogs (Public)
router.get('/', blogController.getAllBlogs);

// Edit blog (only author or admin)
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles('writer', 'admin'),
  blogController.updateBlog
);

// Delete blog (only author or admin)
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles('writer', 'admin'),
  blogController.deleteBlog
);

// Get a specific blog post
router.get('/:id', blogController.getBlogById);

module.exports = router;