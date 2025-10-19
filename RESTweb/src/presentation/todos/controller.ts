import { Request, Response } from "express";

export class TodosController {
  //DI
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json([
      { id: 1, text: "Buy Milk", createdAt: new Date() },
      { id: 2, text: "Study Go", createdAt: null },
      { id: 3, text: "Clean Desk", createdAt: new Date() },
    ]);
  };
}
