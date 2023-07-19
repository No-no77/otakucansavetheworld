---
published: true
subtitle:
date: 2023-07-18
tags: 
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

Follows **SOC**: Separation of Concerns



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

## [.js VS .mjs](obsidian://open?vault=EXOCORTEX&file=js%20VS%20mjs)

[^1]: - **Declarative**: Developers describe the desired user interface based on the application's state, and React takes care of efficiently updating the DOM.
	**Component-based**: React promotes the use of reusable components, which are self-contained units of functionality that can be combined to create complex UIs.
	**Isomorphic**: React can render interfaces on both the server and client sides, resulting in faster page loads, better SEO, and an improved user experience.