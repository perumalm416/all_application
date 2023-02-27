import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://todo-application-9abe2-default-rtdb.firebaseio.com/todo.json",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {          
            task: "Todo application ",
          },
          {          
            task: "Todo application ",
          },
        ])
      );
    }
  ),
];




