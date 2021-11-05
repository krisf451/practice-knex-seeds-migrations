exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_name: "Test Project 1",
      project_description: "a test project description",
      project_completed: 0,
    },
    {
      project_name: "Test Project 2",
      project_description: "a test project description",
      project_completed: 1,
    },
    {
      project_name: "Test Project 3",
      project_description: "a test project description",
      project_completed: 1,
    },
  ]);
};
