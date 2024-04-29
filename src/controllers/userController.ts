import { Request, Response } from "express";
import { User } from "../db/entities/User";
import { myDataSource } from "../db/repositories/datasource";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await myDataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const results = await myDataSource.getRepository(User).findOneBy({
      id: req.params.id,
    });
    return res.send(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await myDataSource.getRepository(User).create(req.body);
    const results = await myDataSource.getRepository(User).save(user);
    return res.send(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await myDataSource.getRepository(User).findOneBy({
      id: req.params.id,
    });
    myDataSource.getRepository(User).merge(user, req.body);
    const results = await myDataSource.getRepository(User).save(user);
    return res.send(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const results = await myDataSource
      .getRepository(User)
      .delete(req.params.id);
    return res.send(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
