import { Request, Response, Router } from "express";
import OSList from "./OSTemplate";

const OSRouter = Router();

OSRouter.get("/get/status/:status", async (req: Request, resp: Response) => {
  console.log(`<LibreTI>: GET /get/status/${req.params.status}`);
  if (req.params.status == "open") {
    resp.json(OSList);
  }
  if (req.params.status == "assumed") {
    resp.json([
      {
        id: 98,
        client: "Pedro",
        subject: "Problema no dealernet",
        description: `
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
                      debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
                      necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
                  `,
        priority: "medium",
        status: "finalizado",
        technical: "Erivaldo",
      },
      {
        id: 26,
        client: "Erivaldo",
        subject: "Problema no dealernet",
        description: `
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
                      debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
                      necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
                  `,
        priority: "high",
        status: "finalizado",
      },
      {
        id: 83,
        client: "Ana",
        subject: "Problema no dealernet",
        description: `
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
                      debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
                      necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
                  `,
        priority: "normal",
        status: "finalizado",
      },
      {
        id: 44,
        client: "José",
        subject: "Problema no dealernet",
        description: `
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
                      debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
                      necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
                  `,
        priority: "high",
        status: "finalizado",
      },
    ]);
  }
});

OSRouter.get("/", async (req: Request, resp: Response) => {
  resp.json({ msg: "Not Found" });
});

export default OSRouter;
