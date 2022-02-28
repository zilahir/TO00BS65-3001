# Documentation

## Table of contents

* Initial description
    * Production `URL`
    * About the projet
* Project structure
* Implementation
    * Git
    * Stack
    * Toolset
    * Development environment
    * Docker
    * Codebase
    * Deployment
* Summary

## Initial description

This application was written for the `FullStack` course taught at `Laurea`, with the course code of `TO00BS65-3001`. This application was written by Richard Zilahi.

### Production `URL`

The application can be found at the following `URL`: https://laurea-guestbook.herokuapp.com/

### About the projet

The course requirement was to created an `SSR` (Server Side Rendering) application using `NodeJS` with `ExpressJS` framework, that implement a Guestbook application.

The application needed to have the following routes:


| route name             | route path     | purpose                                                                                                            |
|------------------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| home                   | `/`            | to display a homepage, with some details, and a menu                                                               |
| guestbook              | `/guestbook`   | to render the list of the guestbook entries                                                                        |
| new message            | `/newmessage`  | to render an `HTML` `form` which let's the user to add a new guestbook entry to the `JSON` file.                   |
| new messagae with ajax | `/ajaxmessage` | to render an `HTML` form, which let's the user to add a new guestbook entry to the `JSON` file using `HTTPRequest` |


## Project structure

The application structure is well organized, to keep it easy to maintain.

```

├── dist
├── public
│   └── images
├── src
│   ├── controllers
│   ├── exception
│   ├── interfaces
│   ├── middlewares
│   ├── providers
│   └── routes
└── views
    ├── includes
    ├── modals
    ├── pages
    ├── partials
    └── static
```

## Implementation

In this section I will go through the implementation in _good_ detail.

### GIT

The `git` repository of the project can be found [here](https://github.com/zilahir/TO00BS65-3001).

The branching logic is rather simple in this project. There's a `master` branch, where the active development is happening. And then there's a `release` branch, where the deployment happens. The deployment happens with `Pull Requests` from the `master` onto the `release` branch.


### Stack

The application is following the `MVC` mindset.

### Toolset

The applicatino uses the following technologies:

* `NodeJS`
* `ExpressJS`
* `TypeScript`
* `PugJS`
* `NodeSASS`
* `Docker`

The server-side codebase is written in `NodeJS` on top of `ExpressJS` framework, in `TypeScript`.

The `frontend` of the application is using `PugJS` templating engine.

The `styleing` is dene with `Pure.CSS`, written in `SCSS`, and compiled into `CSS` using `NodeSASS`.

The complitation process happens in the `scss:dev` `npm` command.

### Development environment

The dependencies of the application are defined in a single `package.json`. As this is an `SSR` application, for the sake of consistency everything is serverd from the same package tree.

The development envrionment is put together with a set of useful tools, such as:

* `nodemon` to re-compile the application upon any of the source files changes.
* `NodeSASS` to re-compile the `SCSS` files into a single output (`root.css`) upon any of the `SCSS` files has changed.
* `tsc` to compile the `typescript` files into `javascript`.

### Docker

The application is backed into `Docker containers`.

The containers are made up of the following image:

* `node:16.2.0`

### Codebase

The codebase is _well_ structured and as well as documented.
There's a primary entry point for the Clustered `API` server, defined in the `index.ts` at: `src/index.ts`.

The `routes` of the `express` application has defined upon their primary function into two seperate group:

1) `WEB` which defines the fucntions, that renders the pages. This can be found at: `src/routes/Web.ts`

2) `API` which defiens the `API` like route, which is called via `AJAX` request, which was a mandatory requirement in this assignment. This can be found at: `src/routes/Api.ts`.




