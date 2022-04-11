import PostRepository from '../repositories/post.repository.js';

async function createPost(post) {
  await PostRepository.createPost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function createComentario(comentario, id) {
  await PostRepository.createComentario(comentario, id);
}

export default {
  createPost,
  getPosts,
  createComentario,
};
