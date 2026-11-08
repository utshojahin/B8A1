Type Aliases vs Interfaces in TypeScript

In TypeScript, both type and interface are used to define data structures. They look similar, but each has some unique features.

One major difference is that interfaces support declaration merging. This means we can declare the same interface multiple times, and TypeScript combines them automatically.

``` Example :
interface User {
  id: number;
}

interface User {
  name: string;
}
```

Now, User contains both id and name.

On the other hand, type aliases cannot be redeclared with the same name. However, they are more flexible because they support union types, tuples, and primitive types.

``` Example:
type Role = "admin" | "user";

type UserProfile = {
  name: string;
  role: Role;
};
```
So, when should we use them? I prefer interface for defining object structures and using inheritance with extends. For unions, intersections, and more complex type combinations, type is usually a better choice.

Both are useful, and choosing between them depends on the requirements of the project.
