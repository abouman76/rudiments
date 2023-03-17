function groupByAge(people) {
  const groups = {};

  for (let person of people) {
    if (person.age < 10) {
      // if there is no array of kids yet, create it
      if (!groups.kids) {
        groups.kids = [];
      }
      groups.kids.push(person);
    } else if (person.age >= 10 && person.age < 20) {
      // if there is no array of teens yet, create it
      if (!groups.teens) {
        groups.teens = [];
      }
      groups.teens.push(person);
    } else if (person.age >= 20 && person.age < 66) {
      // if there is no array of adults yet, create it
      if (!groups.adults) {
        groups.adults = [];
      }
      groups.adults.push(person);
    } else if (person.age >= 66) {
      // if there is no array of retirees yet, create it
      if (!groups.retirees) {
        groups.retirees = [];
      }
      groups.retirees.push(person);
    }
  }

  return groups;
}

describe("groupByAge", () => {
  test("should return an object that groups people by their age as kids, teens, adults or retirees", () => {
    const input = [
      { name: "John Smith", age: 25 },
      { name: "Sarah Johnson", age: 32 },
      { name: "Michael Davis", age: 45 },
      { name: "Emily Jones", age: 9 },
      { name: "David Miller", age: 19 },
      { name: "Jessica Lee", age: 55 },
      { name: "Kevin Brown", age: 16 },
      { name: "Olivia Wilson", age: 67 },
      { name: "Daniel Anderson", age: 31 },
      { name: "Megan Taylor", age: 89 },
    ];
    const output = groupByAge(input);

    // output should be an object with arrays for kids, teens, adults and retirees like this:
    /*
      {
        kids: [],
        teens: [],
        adults: [],
        retirees: []
      }
    */
    expect(output.kids).toHaveLength(1);
    expect(output.teens).toHaveLength(2);
    expect(output.adults).toHaveLength(5);
    expect(output.retirees).toHaveLength(2);
  });

  test("BONUS: only create a group if there is at least one member", () => {
    const input = [
      { name: "John Smith", age: 25 },
      { name: "Sarah Johnson", age: 32 },
      { name: "Michael Davis", age: 45 },
      { name: "Emily Jones", age: 9 },
      { name: "Jessica Lee", age: 55 },
      { name: "Daniel Anderson", age: 31 },
    ];

    const output = groupByAge(input);
    // in this data set there are no teens and no retirees so the
    // output should be an object with arrays for kids, adultslike this:
    /*
      {
        kids: [],
        adults: [],
      }
    */
    expect(output.teens).not.toBeDefined();
    expect(output.retirees).not.toBeDefined();
    expect(output.kids).toHaveLength(1);
    expect(output.adults).toHaveLength(5);
  });
});
