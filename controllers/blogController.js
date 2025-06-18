const Blog = require('../models/Blog');

// Create a new blog post (writer or admin)
exports.createBlog = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;

    const newBlog = new Blog({
      title,
      content,
      category,
      tags,
      author: req.user.userId, // comes from JWT middleware
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all published blogs (reader)
exports.getAllBlogs = async (req, res) => {
  try {
    const filter = {};

    // Optional filters
    if (req.query.category) filter.category = req.query.category;
    if (req.query.tag) filter.tags = req.query.tag;
    filter.isPublished = true;

    const blogs = await Blog.find(filter).populate('author', 'name email');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name email');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update blog (author or admin)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Only author or admin can update
    if (blog.author.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this blog' });
    }

    Object.assign(blog, req.body); // update fields
    await blog.save();

    res.json({ message: 'Blog updated', blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete blog (author or admin)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this blog' });
    }

    await blog.remove();
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};