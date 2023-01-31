export const getjoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postjoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const see = (req, res) => res.send("see");
export const logout = (req, res) => res.send("logout");
