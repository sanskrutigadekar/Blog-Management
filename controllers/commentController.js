const Comment = require('../models/Comment');

// Add a comment to a blog post
exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const blogId = req.params.blogId;

    const comment = new Comment({
      content,
      author: req.user.userId,
      blog: blogId,
    });

    await comment.save();
    res.status(201).json({ message: 'Comment added', comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all comments for a blog
exports.getCommentsForBlog = async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blogId })
      .populate('author', 'name email')
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a comment (Admin only)
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    await comment.remove();
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
