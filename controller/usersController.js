import { User } from "../model/User.js";

export const getUsers = async (req, res) => {
  try {
    const listUser = await User.find();
    res.json({
      message: "Fetch Users successfully!",
      data: listUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching users." });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newUser = new User({ name, age, email });
    const existedUserWithEmail = await User.findOne({ email });

    if (existedUserWithEmail) {
      return res.status(400).json({ message: "The user already exists." }); // Use 400 Bad Request
    }

    await newUser.save();
    res.status(201).json({ message: "User added", data: newUser }); // Use 201 Created
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { email, name, age } = req.body;

  try {
    const updateFields = {};
    if (age !== undefined) updateFields.age = age;
    if (email) updateFields.email = email;
    if (name) updateFields.name = name;

    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Update User successfully!",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the user." });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Delete User successfully!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the user." });
  }
};
