---
published: true
subtitle:
date: 2023-07-18
tags: internet programming
---

# MERN Stack

**MERN** stack is a collection of tools that share a common denominator: **JavaScript**.
**MongoDB**: [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)
**[ExpressJS](https://en.wikipedia.org/wiki/Express.js)**: Web application **framework** for building WebApps and APIs.
**ReactJS**: Declarative, Component-based, Isomorphic[^1]. JavaScript library for building interfaces.
**NodeJS**: Cross-platform JavaScript environment for basically running JavaScript outside of a browser.

## MVC

**Model** : Manages the business logic of an application. Determines how data should be stored, created, and modified
**View** : Any visual representation of the data or information
**Controller** : Interprets user-generated events and transforms them into commands for the model and view to update accordingly:

{% graphviz %}

digraph MVC {
    rankdir=TB;
    
    // Nodes
    node [shape=box, style=filled, fillcolor=yellow];
    Model [label="Model"];
    
    node [shape=oval, style=filled, fillcolor=lightyellow];
    View [label="View"];
    Controller [label="Controller"];
    
    node [shape=circle, style=filled, fillcolor=black, fontcolor=white];
    User [label="User"];
    
    // Edges
    Model -> View [xlabel="Updates", labelfloat=false];
    User -> View [label="Sees", labelfloat=false];
    User -> Controller [label="Uses", labelfloat=false];
    Controller -> Model [label="Manipulates", labelfloat=false];
    
    // Alignment
    {rank=same; View; Controller;}
    {rank=sink; User;}
}

{% endgraphviz %}

Important to notice that it also follows **SOC**: Separation of Concerns[^2]



#### Important NPM commands

1. `npm init`  
    This is used to create the `package.json` file.
2. `npm ls` 
	This is used to list the packages or modules in your project together with their dependencies.
3. `npm i <package>` or `npm install <package>`  
    This is the command used to install a package.
4. `npm un <package>` or `npm uninstall <package>`  
    This is used to uninstall a package.
5. `npm publish`  
    This is used to publish a package.
6. `npm run`  
    This lists the available scripts that can be run on your project.
7. `npm stop`  
    This is used to stop a script.
8. `npm cache clean --force` 
	This force cleans the `npm` cache.
9. `npm search <package>`  
    This is used to search for a package in your project folder.
10. `npm view <package>`  
    This is used to show data about a package and print it to the screen.
11. `npm install -g npm@latest` or `npm-windows-upgrade`  
    Upgrade `npm`.
12. ```npm list```
    Check installed version.

## .js VS .mjs


[javascript - What is the difference between .js and .mjs files? - Stack Overflow (archive.org)](https://web.archive.org/web/20230126081858/https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files)

Node.js's original module system is [CommonJs](https://web.archive.org/web/20230126081858/https://nodejs.org/docs/latest/api/modules.html) (which uses `require` and `module.exports`).

Since Node.js was created, the [ECMAScript module system](https://web.archive.org/web/20230126081858/https://nodejs.org/docs/latest/api/esm.html) (which uses `import` and `export`) has become standard and Node.js has added support for it.

Node.js will treat `.cjs` files as CommonJS modules and `.mjs` files as ECMAScript modules. It will treat `.js` files as whatever the default module system for the project is (which is CommonJS unless _package.json_ says `"type": "module",`). <== IMPORTANT.

## Footnotes

[^1]: - **Declarative**: Developers describe the desired user interface based on the application's state, and React takes care of efficiently updating the DOM.
	**Component-based**: React promotes the use of reusable components, which are self-contained units of functionality that can be combined to create complex UIs.
	**Isomorphic**: React can render interfaces on both the server and client sides, resulting in faster page loads, better SEO, and an improved user experience.
[^2]: [Express application generator (expressjs.com)](https://expressjs.com/en/starter/generator.html)
	[Separation of Concerns in React](https://alialhaddad.medium.com/separation-of-concerns-in-react-d4f74aaf3800)