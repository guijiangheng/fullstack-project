import { Router } from "express";

export const authRouter = Router();

authRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.json({ foo: "bar" });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
});
