import faker from "faker";
// faker.locale = "vi";
var listBlogs = [];

for (var i = 0; i < 10; i++) {
  let data = {
    id: Math.round(Math.random() * 999999),
    title: faker.lorem.sentence(5),
    abstract: faker.lorem.paragraph(2),
    fullName: faker.name.firstName() + " " + faker.name.lastName(),
    create_date: faker.date.past()
  };
  listBlogs.push(data);
}

export default listBlogs;
