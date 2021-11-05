exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "sweep the driveway",
      task_notes: "bring a broom",
      task_completed: 1,
      project_id: 1,
    },
    {
      task_description: "paint the fence",
      task_notes: "bring all the necessary colors",
      task_completed: 0,
      project_id: 2,
    },
    {
      task_description: "a test task description",
      task_notes: "task notes...",
      task_completed: 1,
      project_id: 2,
    },
    {
      task_description: "blah blah blah",
      task_notes: "task notes...",
      task_completed: 0,
      project_id: 3,
    },
    {
      task_description: "another task",
      task_notes: "some more task notes",
      task_completed: 1,
      project_id: 3,
    },
  ]);
};
