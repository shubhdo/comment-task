import Comment from '../models/comment';
import Post from '../models/post';
import { sendResponse } from './function'
async function addComment (req, res) {
    try {
        let addComment = await new Comment(req.body).save();
        if(addComment) {
            sendResponse(res, 200, '', 'Successful.')
        } else {
            sendResponse(res, 400, '', 'Post not found.')
        }
    }
    catch(e) {
        console.log(e);
        sendResponse(res, '500', '', 'Something went wrong. Please try again');
    }
    
}

async function getComments(req, res) {
    try {
        let comments = await Comment.find({post_id: req.params.id});
        if(comments) {
            sendResponse(res, 200, comments , 'Successful.')
        } else {
            sendResponse(res, 400, '', 'Post not found.')
        }
    }
    catch(e) {
        console.log(e);
        sendResponse(res, '500', '', 'Something went wrong. Please try again');
    }
}

async function getPost(req, res) {
    try {
        let post= await Post.findOne({});
        if(post){
            sendResponse(res, 200, post, 'Successful.')
        } else {
            sendResponse(res, 400, '', 'Post not found.')
        }
    }
    catch(e) {
        console.log(e);
        sendResponse(res, '500', '', 'Something went wrong. Please try again');
    }
}

module.exports = {
    addComment,
    getComments,
    getPost	
}