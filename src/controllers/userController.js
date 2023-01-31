import User from "../models/User";

export const getjoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postjoin = async (req, res) => {
  console.log(req.body);
  const { email, username, password, name, location } = req.body;
  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const see = (req, res) => res.send("see");
export const logout = (req, res) => res.send("logout");
