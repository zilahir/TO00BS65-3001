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
