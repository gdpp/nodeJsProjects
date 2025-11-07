import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

interface CustomRequest extends Request {
  startTime?: number;
}

interface User {
  name: string;
  email: string;
}

const app: Express = express();
const port = 3000;

app.use(express.json());

// Middleware -> Add startTime to request
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
});

app.get("/", (req: Request, res: Response) => {
  console.log("Hello from express ts");
});

app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  res.json({
    userId: id,
  });
});

app.post("/users", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;

  res.json({
    message: `User created: ${name} - ${email}`,
  });
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
