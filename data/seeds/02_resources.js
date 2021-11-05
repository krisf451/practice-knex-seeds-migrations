exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "Test Resource 1",
      resource_description: "a test resource description",
    },
    {
      resource_name: "Test Resource 2",
      resource_description: "a test resource description",
    },
    {
      resource_name: "Test Resource 3",
      resource_description: "a test resource description",
    },
    {
      resource_name: "Test Resource 4",
      resource_description: "a test resource description",
    },
  ]);
};
