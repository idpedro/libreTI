export interface OSInterface {
  id: number;
  subject: string;
  description: string;
  priority: string;
  status: string;
  client: String;
  technical?: string;
}

const OSList: OSInterface[] = [
  {
    id: 1,
    client: "teste",
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
    id: 2,
    client: "teste",
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
    id: 3,
    client: "teste",
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
    id: 4,
    client: "teste",
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
    id: 5,
    client: "teste",
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
    id: 6,
    client: "teste",
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
    id: 7,
    client: "teste",
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
    id:8,
    client: "teste",
    subject: "Problema no dealernet",
    description: `
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
              debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
              necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
          `,
    priority: "medium",
    status: "finalizado",
  },
  {
    id: 9,
    client: "teste",
    subject: "Problema no dealernet",
    description: `
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
              debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
              necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
          `,
    priority: "medium",
    status: "finalizado",
  },
  {
    id: 10,
    client: "teste",
    subject: "Problema no dealernet",
    description: `
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
              debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
              necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
          `,
    priority: "medium",
    status: "finalizado",
  },
  {
    id: 11,
    client: "teste",
    subject: "Problema no dealernet",
    description: `
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
              debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
              necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
          `,
    priority: "medium",
    status: "finalizado",
  },
  {
    id: 12,
    client: "teste",
    subject: "Problema no dealernet",
    description: `
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde obcaecati officiis
              debitis pariatur dignissimos in eum delectus aperiam nemo cum voluptas laboriosam
              necessitatibus suscipit iste eos, hic ducimus itaque exercitationem.
          `,
    priority: "medium",
    status: "finalizado",
  },
];

export default OSList;
