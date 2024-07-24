const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Create a new post
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    await post.save();
    res.redirect('/');
});

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});

// Get a specific post
router.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('show', { post });
});

// Edit a post
router.get('/posts/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
});

router.post('/posts/:id/edit', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
    });
    res.redirect(`/posts/${req.params.id}`);
});

// Delete a post
router.post('/posts/:id/delete', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;
