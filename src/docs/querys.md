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
      creationDate: "today" 
    }
  ) {
    title
  	description
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
