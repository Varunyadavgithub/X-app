import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

/*--------------------SignUp---------------------*/
export const SignUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(499).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error while registering the user", error);
    res.status(500).json({
      message: "Some error happen while registering the user",
    });
  }
};

/*--------------------LogIn---------------------*/
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // basic validation
    if (!email || !password) {
      return res.status(499).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User does not exist with this email",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, { expiresIn: "1d" })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    console.log("Error while Login to the user", error);
    res.status(500).json({
      message: "Some error happen while Login to the user",
    });
  }
};
/*--------------------LogOut---------------------*/
export const Logout = async (req, res) => {
  try {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
      message: "User Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error while Logout the user", error);
    res.status(500).json({
      message: "Some error happen while Logout the user",
    });
  }
};
/*--------------------Bookmark---------------------*/
export const Bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    const user = await User.findById(loggedInUserId);
    if (user.bookmarks.includes(loggedInUserId)) {
      // remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Remove from Bookmark",
      });
    } else {
      // bookmark
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Save to Bookmark",
      });
    }
  } catch (error) {
    console.log("Error while Bookmark the tweet", error);
    res.status(500).json({
      message: "Some error happen while Bookmark the tweet",
    });
  }
};
/*--------------------Profile detail---------------------*/
export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("Error while fetching the profile", error);
    res.status(500).json({
      message: "Some error happen while fetching the profile",
    });
  }
};
/*--------------------Other Users---------------------*/
export const getOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!otherUsers) {
      return res.status(404).json({
        message: "Currently do not have any users",
      });
    }
    return res.status(200).json({
      otherUsers,
    });
  } catch (error) {
    console.log("Error while fetching the other Users profile", error);
    res.status(500).json({
      message: "Some error happen while fetching the other Users profile",
    });
  }
};
/*--------------------Follow---------------------*/
export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (!user.followers.includes(loggedInUserId)) {
      // follow
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just follow ${user.name}`,
    });
  } catch (error) {
    console.log("Error while follow the user", error);
    res.status(500).json({
      message: "Some error happen while follow the user",
    });  }
};
/*--------------------Unfollow---------------------*/
export const unfollow=async (req,res)=>{
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (loggedInUser.following.includes(userId)) {
      // unfollow
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just unfollow ${user.name}`,
    });
  } catch (error) {
    console.log("Error while unfollow the user", error);
    res.status(500).json({
      message: "Some error happen while unfollow the user",
    });  }
}