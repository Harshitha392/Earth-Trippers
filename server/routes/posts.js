import express from 'express';

import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
//import auth1 from '../middleware/auth1.js';
const router = express.Router();

// router.get('/' , (req,res) =>{
//     res.send('THIS WORKS');
// });

// router.get('/' , getPosts);
// router.post('/',createPost);
// router.patch('/:id',updatePost);
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost',likePost);


router.get('/' , getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;