/*
 * - create a variabe for the array method function
 * - loop through the array with a array function method. map() or Reduce()?
 * - filter-if statement on each livecycle/age: kids, teens, adults, retirees
 * - push each statement into the param of the reduce by "adding" the group and pushing it into this new group within the object.
 * - return the accumulator
 * - return the variable of the reduce()
 * - output should be: output = {kids: [1], teens: [2], adults: [5], retirees: [2]}
 *
 */



function groupByAge(people) {
  const groups = people.reduce((acc, groupedByAge) => {
    console.log('reduce', groupedByAge.age)
    if(groupedByAge.age <= 9) {
      acc.kids.push(groupedByAge);
    } else if(groupedByAge.age >= 10 && groupedByAge.age <= 19) {
      acc.teens.push(groupedByAge);
    } else if(groupedByAge.age > 16 &&  groupedByAge.age <= 65) {
      acc.adults.push(groupedByAge);
    } else {
      acc.retirees.push(groupedByAge);
    }

    return acc;

  }, { kids: [], teens: [], adults: [], retirees: [] })
    console.log('grouped', groups);

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

  test.skip("BONUS: only create a group if there is at least one member", () => {
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
    // output should be an object with arrays for kids, adults like this:
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
