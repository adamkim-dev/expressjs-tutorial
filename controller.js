export const userLogin = (req, res) => {
  //   const { username, password } = req.body;
  //   res.json({ username, password });
  res.send("login");
};

export const userSignup = (req, res) => {
  res.send("Signup");
};

export const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Adam", age: 26, email: "adam@gmail.com" },
    { id: 2, name: "John", age: 30, email: "john@gmail.com" },
    { id: 3, name: "Jane", age: 28, email: "jane@gamil.com" },
  ];
  res.json(users);
};

// export const userNameController = (req, res) => {
//   const { username } = req.params;
//   res.json({ name: username, age: 26, job: "Software Engineer" });
// };

// export const searchController = (req, res) => {
//   const { keyword } = req.query;
//   res.json({ search: keyword });
// };
// app.get("/user/:username", userNameController);

// //search?keyword=adam
// app.get("/search", searchController);
