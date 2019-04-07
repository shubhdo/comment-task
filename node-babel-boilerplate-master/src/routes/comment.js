import CommentController from '../controllers/comment';
module.exports = (app) => {
    let routeURL = '/comment/'	
    app.post('/comment/', CommentController.addComment);
    app.get('/post/:id', CommentController.getComments);
    app.get('/post/', CommentController.getPost);
}