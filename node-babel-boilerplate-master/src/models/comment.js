import mongoose from 'mongoose';

let comment = mongoose.Schema({
    post_id: mongoose.Types.ObjectId,
    description: String,
    author: String,
    posted_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Comment', comment);