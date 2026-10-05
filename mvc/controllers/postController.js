const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.render('posts', { posts });
    } catch (error) {
        res.status(500).send("OPS! Error retrieving posts");
    }
};