import { Router } from 'express';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        //* Routes
        router.get('/api/todos', (req, res) => {
            return res.json([
                { id: 1, text: 'Buy Milk', createdAt: new Date() },
                { id: 2, text: 'Do Homework', createdAt: new Date() },
                { id: 3, text: 'Take a shower', createdAt: new Date() },
                { id: 4, text: 'Buy Bread', createdAt: new Date() },
                { id: 5, text: 'Do the laundry', createdAt: new Date() },
                { id: 6, text: 'Take a nap', createdAt: new Date() },
            ]);
        });

        return router;
    }
}
