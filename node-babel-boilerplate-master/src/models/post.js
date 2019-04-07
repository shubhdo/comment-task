import mongoose from 'mongoose';

let Post = mongoose.Schema({
    name: String,
    description: String
})
let postModel = mongoose.model('Post', Post);
postModel.find({}).exec().then((success)=> {
    console.log(success);
    if(success && success.length===0) {
        postModel.create({
            name: 'Nodejs',
            description: 'Nodejs is a wonderful platform for network and IO applications. I think you should start working on the same'
        },((err, success)=> {
                console.log(err, success);
                
        }))
    }
})

export default postModel;