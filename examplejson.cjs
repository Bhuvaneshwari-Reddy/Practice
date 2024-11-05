const data = [
  {
    id: 0,
    name: "Category name1",
    services: [
      {
        id: 0,
        name: "Product name1",
      },
      {
        id: 1,
        name: "Product name2",
      },
    ],
  },
  {
    id: 1,
    name: "Category name2",
    services: [
      {
        id: 0,
        name: "Product name1",
      },
      {
        id: 1,
        name: "Product name2",
      },
    ],
  },
];

const services = data.map((category) => category.services[1].id).flat();

console.log(services);
