import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../mocks/server";
import { Greeting } from "../practice/greeting";
import { PracticeHead } from "../practice/practice";

describe("Unit test type", function () {

  it("Greeting render", async () => {
    server.use(
        rest.get("https://todo-application-9abe2-default-rtdb.firebaseio.com/todo.json",(req,res,ctx)=>{
            return res(ctx.status(500))
        })
    )
    render(<PracticeHead />);
    const listItemElement = await screen.findByRole("heading",{exact:false},{name:"Server failed"});
    expect(listItemElement).toBeInTheDocument();
  });
});
