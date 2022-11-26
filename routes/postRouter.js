const { Router } = require("express");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.route("/").get(postController.getPosts);

postRouter
  .route(":/postId")
  .get(postController.getPostById)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = postRouter;
