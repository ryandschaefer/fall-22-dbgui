const knex = require('../database/knex');
const POSTS_TABLE = 'posts';
const fetchAllPosts = async () => {
    const query = knex(POSTS_TABLE);
    const results = await query;
    return results;
}
const fetchPostsById = async (post_id) => {
    const query = knex(POSTS_TABLE).where({ post_id });
    const results = await query;
    return results;
}
const fetchPostsByName = async (title) => {
    const query = knex(POSTS_TABLE).where({ title });
    const results = await query;
    return results;
}
const fetchPostsByUser = async (user) => {
    const query = knex(POSTS_TABLE).where({ user });
    const results = await query;
    return results;
}
const fetchPostsByChannel = async (channel) => {
    const query = knex(POSTS_TABLE).where({ channel });
    const results = await query;
    return results;
}
const updatePost = async (post_id, post)  => {
    if (post.title) {
        const title = post.title;
        const query = await knex(POSTS_TABLE).update({title}).where({post_id});
    }
    if (post.contents) {
        const contents = post.contents;
        const query = await knex(POSTS_TABLE).update({contents}).where({post_id});
    }
    if (post.likes) {
        const likes = post.likes;
        const query = await knex(POSTS_TABLE).update({likes}).where({post_id});
    }
    const results = await knex(POSTS_TABLE).where({ post_id });
    return results;
}
const createPost = async (body) => {
    const query = knex(POSTS_TABLE).insert({...body});
    const results = await query;
    return results;
}
const deletePost = async (post_id) => {
    const query = knex(POSTS_TABLE).delete().where({post_id});
    const results = await query;
    return results;
}
   module.exports = {
    fetchAllPosts,
    fetchPostsById,
    fetchPostsByName,
    fetchPostsByUser,
    fetchPostsByChannel,
    createPost,
    updatePost,
    deletePost
 }