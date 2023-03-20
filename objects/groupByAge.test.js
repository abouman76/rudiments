/*
 * OPDRACHT: 1
 * - create a variable for the array method function
 * - loop through the array with an array function method: map() or Reduce()?
 * - if statement on each livecycle/age: kids, teens, adults, retirees
 * - push each statement into the param of the reduce by "adding" the group and pushing it into this new group within the object.
 * - return the accumulator
 * - return the variable of the reduce()
 * - output should be: output = {kids: [1], teens: [2], adults: [5], retirees: [2]}
 *  OPDRACHT: 2
 * - output should be: output =
 */



function groupByAge(people) {
  const groups = people.reduce((acc, groupedByAge) => {
   // console.log('reduce', groupedByAge.age)
    if(groupedByAge.age <= 9) {
      if(acc.kids) {
        acc.kids.push(groupedByAge);
      } else {
        acc.kids = [];
        acc.kids.push(groupedByAge);
      }
    }
      if(groupedByAge.age >= 10 && groupedByAge.age <= 19) {
        if(acc.teens) {
          acc.teens.push(groupedByAge);
        } else {
          acc.teens = [];
          acc.teens.push(groupedByAge);
        }
      }
        if(groupedByAge.age > 19 &&  groupedByAge.age <= 65) {
          if(acc.adults) {
            acc.adults.push(groupedByAge);
          } else {
            acc.adults = [];
            acc.adults.push(groupedByAge);
          }
      }
        if (groupedByAge.age > 65) {
          if(acc.retirees) {
            acc.retirees.push(groupedByAge);
          } else {
            acc.retirees = [];
            acc.retirees.push(groupedByAge);
          }
        }

    return acc;

    }, { });
   // console.log('grouped', groups);

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
