import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

/*--------------------Create Tweet---------------------*/
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(499).json({
        message: "Fields are required",
        success: false,
      });
    }

    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(200).json({
      message: "Tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
/*--------------------Update Tweet---------------------*/
export const updateTweeet = async (req, res) => {
  try {
    const id = req.params.id;
    const tweet = await Tweet.findByIdAndUpdate(id, req.body);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }
    const updatedTweet = await Tweet.findById(id);
    return res.status(200).json({
      updatedTweet,
    });
  } catch (error) {
    console.log(error);
  }
};
/*--------------------Delete Tweet---------------------*/
export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
/*--------------------Like or Dislike Tweet---------------------*/
export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(loggedInUserId)) {
      // Dislike
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { like: loggedInUserId },
      });
      return res.status(200).json({
        message: "User dislike your tweet",
      });
    } else {
      // Like
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: loggedInUserId },
      });
      return res.status(200).json({
        message: "User like your tweet",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
/*--------------------Get all Tweets---------------------*/
export const getAllTweets = async (req, res) => {
  try {
    // loggedInUser ka tweet + loggedInUser ke following ka tweet 
    const id=req.params.id;
    const loggedInUser=await User.findById(id);
    const loggedInUserTweets= await Tweet.find({userId:id});

    const followingUserTweet=await  Promise.all(loggedInUser.following.map((otherUsersId)=>{
      return Tweet.find({userId:otherUsersId})
    }))
    return res.status(200).json({
      tweets:loggedInUserTweets.concat(...followingUserTweet)
    })
  } catch (error) {
    console.log(error);
  }
};
/*--------------------Get followings Tweets---------------------*/
export const getFollowingTweets=async (req,res)=>{
  try {
    // following users ka tweet 
    const id=req.params.id;
    const loggedInUser=await User.findById(id);

    const followingUserTweet=await  Promise.all(loggedInUser.following.map((otherUsersId)=>{
      return Tweet.find({userId:otherUsersId})
    }))
    return res.status(200).json({
      tweets:[].concat(...followingUserTweet)
    })
  } catch (error) {
    console.log(error);
  }
}
