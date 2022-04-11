import PostService from '../services/post.service.js';

async function createPost(req, res, next) {
  try {
    let post = req.body;
    await PostService.createPost(post);
    logger.info(`POST /post - ${JSON.stringify(post)}`);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function getPost(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info(`GET /post`);
  } catch (error) {
    next(error);
  }
}

async function createComentario(req, res, next) {
  try {
    let params = req.body;
    if (!params.id) {
      throw new Error('Id é obrigatório');
    }
    await PostService.createComentario(params.comentario, params.id);
    logger.info(`PUT /post/comentario`);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createPost,
  getPost,
  createComentario,
};
