export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const deleteVideo = (req, res) => {
  return res.send("deletevideo");
};
