---
published: true
date: 2023-08-24
tags:
foam_template:
  filepath: '_wiki/databases.md'
  name: Wiki Note
---
# DATABASES

# DATABASE SYSTEM

## HISTORY OF DATABASES
- **Pre-database Era**: Before databases, data was stored in flat files. These files were difficult to manage, lacked security, and had data redundancy.
  
- **Hierarchical and Network Databases**: Introduced in the 1960s. Data was structured in a tree-like (hierarchical) or mesh-like (network) manner. Examples include IBM's IMS.


- **Relational Databases**: Proposed by E.F. Codd in 1970. Data is stored in tables (relations) and can be manipulated using a standard language (SQL). This model became dominant due to its simplicity and flexibility.

- **Object-Oriented Databases**: Emerged in the 1980s. These databases store data as objects, similar to object-oriented programming.

- **NoSQL Databases**: Gained popularity in the 2000s. These databases are non-relational and can handle large volumes of structured and unstructured data. Examples include MongoDB, Cassandra, and Redis.

## DATABASE SYSTEMS (DBS)
- **Definition**: A system that provides an environment which is both convenient and efficient to use in retrieving and storing database information.

- **Components**:
  - **Hardware**: Physical devices in the system (servers, storage devices).
  - **Software**: DBMS software, operating system, network software.
  - **Data**: Actual data including meta-data.
  - **Procedures**: Instructions and rules that govern the design and use of the database.
  - **Database Access Language**: Allows users to interact with the database (e.g., SQL).

## DATABASE MANAGEMENT SYSTEMS (DBMS)

- **Definition**: A software system that allows users to define, create, maintain, and control access to the database.

- **Functions**:
  - **Data Storage**: Provides a mechanism to store the data.
  - **Data Retrieval**: Allows users to query the database and retrieve the required data.
  - **Data Update**: Allows users to insert, update, and delete data.
  - **Data Security**: Ensures that only authorized users can access the data.
  - **Data Integrity**: Ensures that the data remains accurate and consistent.

- **Advantages**:
  - **Data Independence**: Application programs are insulated from changes in the way data is structured and stored.
  - **Efficient Data Access**: DBMS utilizes a variety of sophisticated techniques to store and retrieve data efficiently.
  - **Data Integrity and Security**: Data is protected from unauthorized access and accidental corruption or loss.
  - **Data Administration**: Centralized control of data.
  - **Concurrent Access and Crash Recovery**: Multiple users can access the database concurrently. In case of failures, recovery mechanisms ensure data safety.

- **Types**:
  - **Relational DBMS (RDBMS)**: Based on the relational model. Examples include MySQL, PostgreSQL, and Oracle.
  - **NoSQL DBMS**: Not based solely on the relational model. Examples include MongoDB (document-based), Cassandra (column-based), and Redis (key-value store).
  - **Object-Oriented DBMS**: Stores data as objects. Examples include ObjectDB and ObjectStore.

# DATABASE DESIGN: CONCEPTUAL MODELING

Conceptual modeling is the process of developing a high-level description of the organizational data, often in terms of entities, relationships, and attributes. This abstract representation helps in understanding the data's structure and meaning without getting into the specifics of physical storage.

## PROJECT STAGES
1. **Requirement Analysis**: Understand and gather the data requirements from stakeholders.
2. **Conceptual Design**: Develop a high-level description of the data using ER diagrams or other modeling techniques.
3. **Logical Design**: Convert the conceptual model into a logical data model, often relational.
4. **Physical Design**: Decide on the physical storage aspects, like file organization, indexing, etc.

## ENTITY AND RELATIONSHIP DIAGRAM (ERD)
- **Definition**: A graphical representation of entities and their relationships in a database.
- **Components**:
  - **Entities**: Represent real-world objects or concepts. Depicted as rectangles.
  - **Relationships**: Represent associations between entities. Depicted as diamonds.
  - **Attributes**: Data items that describe properties of entities and relationships. Depicted as ovals.

## ENTITY AND RELATIONSHIP MODELING
- **Entities**: Can be tangible (e.g., a person or product) or intangible (e.g., an event or concept). Each entity has a unique identifier.
  - **Weak Entity**: An entity that cannot be uniquely identified by its attributes alone and relies on the primary key of another entity.
  
- **Relationships**: Define how entities are associated with each other. They can be:
  - **Unary (Recursive)**: Relationship between instances of the same entity type.
  - **Binary**: Relationship between instances of two entity types.
  - **Ternary (or higher)**: Relationship involving three (or more) entity types.
  
- **Cardinality**: Specifies the number of relationship instances an entity can participate in. Common types:
  - **One-to-One (1:1)**
  - **One-to-Many (1:M)**
  - **Many-to-Many (M:N)**

## ATTRIBUTE MODELING
- **Simple Attribute**: An atomic attribute that cannot be divided further. E.g., `FirstName`.
  
- **Composite Attribute**: Can be divided into smaller sub-parts, which represent more basic attributes with independent meanings. E.g., `FullName` can be divided into `FirstName` and `LastName`.
  
- **Derived Attribute**: Its value can be derived from other attributes in the database. E.g., `Age` can be derived from `DateOfBirth`.
  
- **Multi-valued Attribute**: Can have multiple values for a single entity. E.g., `PhoneNumbers`.
  
- **Key Attribute**: Uniquely identifies an entity within an entity set.

Remember, the goal of conceptual modeling is to capture the semantics of data in a clear and concise manner, laying a solid foundation for the subsequent stages of database design.

# DATABASE DESIGN: LOGICAL AND PHYSICAL MODELING

After conceptual modeling, the next steps involve logical and physical modeling to further refine the database design, ensuring efficiency, integrity, and flexibility.

## RELATIONAL MODEL
- **Definition**: A logical representation of data where data is organized into relations (tables). Each relation has tuples (rows) and attributes (columns).
  
- **Components**:
  - **Relation/Table**: Represents an entity or relationship set.
  - **Tuple/Row**: Represents a single data item or record.
  - **Attribute/Column**: Represents a property or characteristic of an entity or relationship.
  - **Domain**: A set of allowable values for a given attribute.
  - **Primary Key**: An attribute or set of attributes that uniquely identify a tuple within a relation.

## NORMAL FORMS
Normalization is the process of organizing data to reduce redundancy and improve data integrity.

- **First Normal Form (1NF)**: Each column contains atomic (indivisible) values, and there are no repeating groups or arrays.
  
- **Second Normal Form (2NF)**: Meets all the requirements of 1NF and every non-key attribute is fully functionally dependent on the primary key.
  
- **Third Normal Form (3NF)**: Meets all the requirements of 2NF and all the attributes are functionally dependent only on the primary key.
  
- **Boyce-Codd Normal Form (BCNF)**: Every non-trivial functional dependency is a dependency on a superkey.
  
- **Fourth Normal Form (4NF)**: Meets all the requirements of BCNF and has no multi-valued dependencies.
  
- **Fifth Normal Form (5NF)**: Every non-trivial join dependency in the table is implied by the superkeys of the table.

## CONCEPTUAL-LOGICAL MAPPING
- **Definition**: The process of transforming a conceptual schema (like an ERD) into a logical schema (like a relational schema).
  
- **Steps**:
  - Convert entities into tables.
  - Convert relationships into foreign keys.
  - Handle weak entities.
  - Handle multi-valued attributes.
  - Handle derived attributes.

## MODEL IN DBMS
- **Relational Model**: Uses tables to represent data and relationships. SQL is the standard language for querying and manipulating data.
  
- **Hierarchical Model**: Represents data in a tree-like structure. Each record has one parent and many children.
  
- **Network Model**: Represents data as records connected by links. A record can have multiple parents.
  
- **Object-Oriented Model**: Represents data as objects and supports inheritance, encapsulation, and polymorphism.
  
- **Object-Relational Model**: Combines features of both the object-oriented and relational models.
  
- **NoSQL Models**: Include document-based, key-value stores, column-family stores, and graph databases.

Remember, the goal of logical and physical modeling is to design a database structure that is efficient, reliable, and easy to maintain.

# CREATION AND MANIPULATION OF OBJECTS IN POSTGRESQL

## POSTGRESQL
- **Definition**: PostgreSQL is an open-source relational database management system (RDBMS) that emphasizes extensibility and SQL compliance.
  
- **Features**:
  - Supports advanced data types like JSON, ARRAY, and hstore.
  - Extensible with custom functions, operators, and data types.
  - Concurrency control using Multi-Version Concurrency Control (MVCC).
  - Robust transactional system.

## CREATION AND MODIFICATION OF TABLES
- **Creating Tables**:
  ```sql
  CREATE TABLE table_name (
      column1 datatype1 [constraint],
      column2 datatype2 [constraint],
      ...
  );
    ```

- Adding Columns
```ALTER TABLE table_name ADD COLUMN column_name datatype [constraint];```
- Modifying Columns
```ALTER TABLE table_name ALTER COLUMN column_name [SET DATA] TYPE new_datatype;```
- Dropping Columns
```ALTER TABLE table_name DROP COLUMN column_name;```
- Setting Default Values
```ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT expression;```
- Dropping Tables
```DROP TABLE table_name;```

## MANIPULATION OF ROWS IN TABLES

Inserting Rows:
`INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);`
- Updating Rows:
`UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;`
Deleting Rows:
`DELETE FROM table_name WHERE condition;`
Selecting Rows:
`SELECT column1, column2, ... FROM table_name WHERE condition;`

## TRANSACTION CONTROL

Transactions ensure that a series of SQL statements are executed in a controlled manner.

- Begin a Transaction:
`BEGIN;`
- Commit a Transaction (save changes):
`COMMIT;`
- Rollback a Transaction (undo changes):
`ROLLBACK;`
- Savepoints (for setting intermediate points within a transaction):
`SAVEPOINT savepoint_name;`
- Rolling Back to a Savepoint:
```ROLLBACK TO savepoint_name;```
- Releasing a Savepoint:
```RELEASE savepoint_name;```

# QUERIES IN A POSTGRESQL TABLE

## SELECT COMMAND
The `SELECT` command is used to fetch data from a table. The basic structure is:

```sql
SELECT column1, column2, ...
FROM table_name;
```
- Select All Columns
  `SELECT * FROM table_name`
- Distinct Values
  `SELECT * FROM table_name;`
- Count Rows
  `SELECT COUNT(*) FROM table_name;`

## WHERE CLAUSE

The WHERE clause is used to filter records based on specific conditions.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
### EXAMPLES

- Select rows where age is greater than 30:
`SELECT * FROM users WHERE age > 30;`
- Select rows where the name starts wtih 'A':
`SELECT * FROM users WHERE name LIKE 'A%';`
- Using logical operators ('AND', 'OR'):
`SELECT * FROM users WHERE age > 30 AND city = 'New York';`

## DATA GROUPING

The GROUP BY clause groups rows that have the same values in specified columns into summary rows.

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
WHERE condition
GROUP BY column1;
```

### EXAMPLES

- Count users in each city:
```sql
SELECT city, COUNT(id) 
FROM users 
GROUP BY city;
```
- Average age of users in each city:
```sql
SELECT city, AVG(age) 
FROM users 
GROUP BY city;
```
- Having Clause: Used to filter the result of a GROUP BY based on a condition:
```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```
  - Having Clause Example: Cities with more than 10 users:
  ```sql
    SELECT city, COUNT(id) 
    FROM users 
    GROUP BY city 
    HAVING COUNT(id) > 10;
  ```

# QUERY WITH MULTIPLE TABLES IN POSTGRESQL (SUPERVISED PRACTICAL ACTIVITY)

Working with multiple tables is a common scenario in relational databases. PostgreSQL provides various methods to combine rows from two or more tables based on related columns.

## INNER AND OUTER JOINS
Joins are used to combine rows from two or more tables based on a related column.

### INNER JOIN
Combines rows from two tables based on a condition, returning only the rows where there's a match in both tables.

```sql
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
```

### LEFT (OUTER) JOIN
Returns all rows from the left table, and the matched rows from the right table. If no match, NULL values will be returned for right table's columns.

```sql 
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;
```

### RIGHT (OUTER) JOIN
Similar to LEFT JOIN, but returns all rows from the right table.

```sql 
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;
```

### FULL (OUTER) JOIN
Returns rows when there's a match in one of the tables. Thus, it returns all rows from both tables.

```sql 
SELECT columns
FROM table1
FULL JOIN table2
ON table1.column = table2.column;
```

## NESTED AND CORRELATED SUBQUERIES

Subqueries can be used to fetch data that will be used in the main query as a condition.

### NESTED SUBQUERY

A subquery that can be evaluated independently and passed to the main query for further operations.

```sql 
SELECT column1
FROM table1
WHERE column1 IN (SELECT column1 FROM table2);
```

### CORRELATED SUBQUERY

A subquery that refers to a column from a table in the main query. It's executed once for every row processed by the main query.

```sql 
SELECT column1
FROM table1 t1
WHERE EXISTS (SELECT 1 FROM table2 t2 WHERE t2.column = t1.column);
```

## SET OPERATORS

Used to combine the result set of two or more SELECT statements.

### UNION

Combines the result set of two or more SELECT statements, removing duplicates.

```sql
SELECT column1 FROM table1
UNION
SELECT column1 FROM table2;
UNION ALL
```

Similar to UNION, but includes duplicates.

```sql
SELECT column1 FROM table1
UNION ALL
SELECT column1 FROM table2;
```

## INTERSECT
Returns rows that are common to both SELECT statements.

```sql
SELECT column1 FROM table1
INTERSECT
SELECT column1 FROM table2;
EXCEPT
Returns rows from the first SELECT statement that aren't in the second SELECT statement.
```

```sql
SELECT column1 FROM table1
EXCEPT
Used to combine the result set of two or more SELECT statements.
```

### UNION
Combines the result set of two or more SELECT statements, removing duplicates.

```sql
SELECT column1 FROM table1
UNION
SELECT column1 FROM table2;
```
### UNION ALL
Similar to UNION, but includes duplicates.

```sql
SELECT column1 FROM table1
UNION ALL
SELECT column1 FROM table2;
```

### INTERSECT
Returns rows that are common to both SELECT statements.

```sql
SELECT column1 FROM table1
INTERSECT
SELECT column1 FROM table2;
```

### EXCEPT
Returns rows from the first SELECT statement that aren't in the second SELECT statement.

```sql
SELECT column1 FROM table1
EXCEPT
SELECT column1 FROM table2;
```
