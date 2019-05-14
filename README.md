# Graphql Filter Results

This is a useful package to get data struct which developer write in gql schema

## Why we use this?

For example, if we want to query user in our db, we may query the whole user record. But we only need `name` and `email` column. This suitation you can use `graphql-filter-results` to get which column developer wanted through `info` Argument in GraphQL Resolvers.

```js
query {
  adminUsers {
    name
    email
  }
}
```

Actually, we often do the business logic as below:

```ts
const resolvers = {
  Query: {
    users: (root, {userId}, context, info) => {
      const { User } = context;
      // it will execute `select * from "User" where "adminType"=true`
      return await User.findAll({
          where: {
              adminType: true
          },
      });
  },
};
```

What we do to improve the query:

```ts
import { pickoutFieldWithInfo } from 'graphql-filter-results';
const resolvers = {
  Query: {
    users: (root, {userId}, context, info) => {
      const { User } = context;
      const filterFields = pickoutFieldWithInfo(info);
      // it will execute `select name, email from "User" where "adminType"=true`
      return await User.findAll({
          where: {
              adminType: true
          },
          attributes: filterFields
      });
  },
};
```

That will reduce your RAM memory when you query which too much data;

## Usage

```ts
import { pickoutFieldWithInfo } from 'graphql-filter-results';
// `info` Argument in GraphQL Resolvers.
const filterFields = pickoutFieldWithInfo(info);
```

## Example

https://github.com/function-hub/graphql-filter-results-example
