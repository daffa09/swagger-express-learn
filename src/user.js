let users = [
  {
    id: 1,
    name: "fanthom",
    email: "fanthom@gmail.com",
  },
  {
    id: 2,
    name: "grey",
    email: "grey@gmail.com",
  },
  {
    id: 3,
    name: "laira",
    email: "laira@gmail.com",
  },
];

export const getAll = (req, res) => {
  res.json(users);
};

export const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    return res.json(user);
  }
};

export const create = (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const user = { id, name, email };
  users.push(user);
  res.status(200).json(user);
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    const { name, email } = req.body;
    user.name = name;
    user.email = email;
    return res.json(user);
  }
};

export const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    users = users.filter((b) => b.id !== id);
    return res.json(user);
  }
};
