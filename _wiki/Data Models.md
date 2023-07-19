---
published: true
subtitle:
date: 2023-07-19
tags: data programming
---

# Data Models


## Document-oriented database

Data storage system designed for storing, retrieving and managing document-oriented information, also known as semi-structured data[^1] .

1. One of the main categories of NoSQL[^2] databases.
2. Are a subclass of the key-value store[^3].
3. Relies on internal structure in the _document_ in order to extract metadata[^4]. that the database engine uses for further optimization.
4. Eliminates the need for object-relational mapping[^5] while loading data into the database.
5. Document databases have a flexible structure. Unlike relational databases where each record has the same fields (potentially leaving some empty), document databases allow each document to have its own unique structure. There are no 'empty fields' in the document.
6. Documents in such databases not only contain text and other data (referred to as the content), but also additional metadata. The metadata could relate to document organization, security, or other specific features of the data storage system.
7. The content of the document can be accessed and modified using retrieval or editing methods.
8. The structure of the document allows new information to be added without mandating that every other document in the database has the same structure.
9. This flexibility of document databases is useful when dealing with data that doesn't fit neatly into a table, and allows for greater customization and scalability.

### The _document_

1. Documents encapsulate and encode data (or information) in some standard format or encoding. Encodings in use include XML, YAML, JSON, as well as binary forms like BSON.
2. They are similar to the programming concept of an object and may vary in format from encoding to encoding.

#### EXAMPLE: JSON Document

```json
{
    "FirstName": "Bob", 
    "Address": "5 Oak St.", 
    "Hobby": "sailing"
}
```

#### EXAMPLE: XML Document

```xml
 <contact>
    <firstname>Bob</firstname>
    <lastname>Smith</lastname>
    <phone type="Cell">(123) 555-0178</phone>
    <phone type="Work">(890) 555-0133</phone>
    <address>
      <type>Home</type>
      <street1>123 Back St.</street1>
      <city>Boys</city>
      <state>AR</state>
      <zip>32225</zip>
      <country>US</country>
    </address>
  </contact>
```

## Footnotes


[^1]: **Semi-structured data**: Data that's not strictly formatted but has identifiable structure. Examples: JSON, XML.

[^2]: **NoSQL**: A database type not using traditional table structure. Categories: document stores, key-value stores, wide-column stores, graph databases. Document-oriented databases fall under this.

[^3]: **Key-value store**: A basic NoSQL database type. Each value is linked to a unique key. Document databases are a more complex version of this.

[^4]: **Metadata**: It's data about data. For document-oriented databases, metadata might be a document's creation date or author. It's used for database optimization.

[^5]: **Object-relational mapping (ORM)**: A way to turn data into object-oriented programming language-friendly forms. Document databases don't require this due to their flexible design.