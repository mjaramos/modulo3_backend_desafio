import express from 'express';
import PostController from '../controllers/post.controller.js';

const router = express.Router();

router.post('/', PostController.createPost);

router.get('/', PostController.getPost);

router.put('/comentario', PostController.createComentario);

export default router;
