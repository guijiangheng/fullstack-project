import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { Router } from 'express';

import { db } from '../drizzle/db';
import { UserTable } from '../drizzle/schema';

export const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await db.query.UserTable.findFirst({ where: eq(UserTable.username, username) })
  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
    return
  }

  const hashedPassword = bcrypt.hashSync(password)

  const [newUser] = await db
    .insert(UserTable)
    .values({ username, password: hashedPassword })
    .returning()

  if (!newUser) {
    res.status(500).json({ message: "Failed to create user" });
    return
  }

  res.json({ user: newUser });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
});
