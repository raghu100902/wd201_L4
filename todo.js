const lt = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mark = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dt = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dl = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const seen = (list) => {
    return list
      .map((todo) => {
        seen_status = todo.completed ? "[x]" : "[ ]";
        seen_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${seen_status} ${todo.title} ${seen_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mark,
    due,
    dt,
    dl,
    seen,
  };
};

module.exports = lt;

