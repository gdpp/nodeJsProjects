import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDTO } from '../../domain/dtos';

export class TodosController {
    //* Dependency Injection
    constructor() {}

    public getTodos = async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany();

        return res.json(todos);
    };

    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id))
            return res
                .status(400)
                .json({ error: 'Id argument is not a number' });

        const todo = await prisma.todo.findFirst({
            where: {
                id: id,
            },
        });

        todo
            ? res.json(todo)
            : res.status(404).json({ error: `TODO with id: ${id} not found!` });
    };

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDTO.create(req.body);

        if (error)
            return res.status(400).json({ error: 'Text property is required' });

        const newTodo = await prisma.todo.create({
            data: createTodoDto!,
        });

        res.json(newTodo);
    };

    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id))
            return res
                .status(400)
                .json({ error: 'Id argument is not a number' });

        const { text, completedAt } = req.body;

        // if (!text)
        //     return res.status(400).json({ error: 'Text property is required' });

        const updateTodo = await prisma.todo.update({
            where: { id },
            data: {
                text,
                completedAt: completedAt ? new Date(completedAt) : null,
            },
        });

        return res.json(updateTodo);
    };

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id))
            return res
                .status(400)
                .json({ error: 'Id argument is not a number' });

        const deletedTodo = await prisma.todo.delete({
            where: {
                id,
            },
        });

        return res.json(deletedTodo);
    };
}
