# Query Docs

List of available querys with examples.

## Products

### Create Product

```graphql
mutation {
  createProduct(
    productInput: {
      title: "test",
      description: "test description",
      price: 12.00,
      creationDate: "2020-07-05T15:46:53.207Z",
      category: "5f07c38ec0a2e56062f6e72f"
    }
  ) {
    title
  	description
   	category {
      title
    }
  } 
}
```

### Get Products

```graphql
query {
  products {
    _id
    title
  }
}
```

## Users

### Create Users

```graphql
mutation {
  createUser(
    userInput: {
      email: "test@example.com",
      password:"test"
    }
  ) {
    _id
    email
    password
  } 
}
```

## Categories

### Create Category

```graphql
mutation {
  createCategory(categoryInput:{
    title: "test"
    description:"test description"
  }) {
    title
    description
  }
}
```

### Get Categories

```graphql
query {
  categories {
    _id
    title
    description
  }
}
```