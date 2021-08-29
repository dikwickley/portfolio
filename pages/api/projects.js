import { projects } from "../../data/projects";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.query;

    res.json({ sucess: true, data: name });
  } else {
    res.json({ sucess: true, data: projects });
  }
}
