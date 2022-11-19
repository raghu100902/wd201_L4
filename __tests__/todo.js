const lt = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, mark, add, due, dt, dl } = lt();

describe("Testing ", () => {
  beforeAll(() => {
    add({
      title: "Dancing",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding ", () => {
    let length = all.length;

    add({
      title: "Complete the task",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking", () => {
    expect(all[0].completed).toBe(false);
    mark(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieval", () => {
    let todolist = due();

    expect(
      todolist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieval dues", () => {
    let todolist = dt();

    expect(
      todolist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieve  later", () => {
    let todolist = dl();

    expect(
      todolist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
