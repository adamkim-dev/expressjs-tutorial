export const userLogin = (req, res) => {
  //   const { username, password } = req.body;
  //   res.json({ username, password });
  res.send("login");
};

export const userSignup = (req, res) => {
  res.send("Signup");
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
