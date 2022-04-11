import { connect } from './mongo.db.js';
import PostSchema from '../schemas/posts.schema.js';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    post = new Post(post);
    await post.save();
  } catch (error) {
    throw error;
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    await Post.findOneAndUpdate(
      {
        _id: post.id,
      },
      post
    );
  } catch (error) {
    throw error;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    const query = Post.find({});
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function getPost(id) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    const query = Post.findOne({ _id: ObjectId(id) });
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function createComentario(comentario, postId) {
  try {
    const post = await getPost(postId);
    post.comentarios.push(comentario);
    await updatePost(post);
  } catch (error) {
    throw error;
  }
}

export default {
  createPost,
  getPosts,
  createComentario,
};
