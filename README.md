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

To run this application locally, requires to have `Docker` installed on your computer. Once that prerequisite is satisfied:

1) clone the repository
2) navigate to the folder
3) build the container with `docker compose build`
4) fire up the containers with `docker compose up`

The last command mentioned will start the entire stack, on the port of `4040`, and the output should ne something similar:

```
7:42:17 PM - File change detected. Starting incremental compilation...
to00bs65-3001-guestbook  | [TYPESCRIPT]
to00bs65-3001-guestbook  | [TYPESCRIPT]
to00bs65-3001-guestbook  | [TYPESCRIPT] 7:42:17 PM - Found 0 errors. Watching for file changes.
to00bs65-3001-guestbook  | [TYPESCRIPT] [nodemon] restarting due to changes...
to00bs65-3001-guestbook  | [TYPESCRIPT] [nodemon] starting `node dist`
to00bs65-3001-guestbook  | [TYPESCRIPT]
Server :: Running @ 'http://localhost:4040'
to00bs65-3001-guestbook  | [TYPESCRIPT] Server :: Running @ 'http://localhost:4040'
to00bs65-3001-guestbook  | [TYPESCRIPT] Server :: Running @ 'http://localhost:4040'
to00bs65-3001-guestbook  | [TYPESCRIPT] Server :: Running @ 'http://localhost:4040'
```

The application is started with a single command, using a set of other comamnds combined with `nodemon`, so every sub process has a prefix, as visible on the example above:

* `TYPESCRIPT` runs when `tsc` compiling is happening
* `NODE-SASS` when `SCSS` compiling is happening

```
to00bs65-3001-guestbook  | [NODE-SASS] => changed: /usr/src/app/views/static/css/root.scss
to00bs65-3001-guestbook  | [NODE-SASS] Rendering Complete, saving .css file..
```

and

* `STATIC`

when `static` `ts` files are compiled into `javascript`

```
to00bs65-3001-guestbook  | [STATIC] => compiling static/js/newmessage.ts ...
```

There is a single `static` `typescript` file in this application, which handles the `AJAX` request, towards the server.

This file can be found at: `views/static/js/newmessage.ts`.


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

The `UI` is implemented in `PugJS`, and tried to follow a _component base_ mindset, as much as `PugJS` can allow it. Since it doesn't support `Dynamic Data Rendering` there are some solution which might be interesting, or odd by first sight. 

For example:

1) scoped variables

Let's take a look at the `guest.pug` files, which can be found at: `views/partials/guest.pug`. 

This behaves like it was a component, which approach might be familiar from modern javascript `UI` frameworks, such as `React`. 

The implemenation of this `partial` (as they are being called in `PugJS`) is rather simple:

```pug
     p= username
     p= country
     p= date
```

the `paragraph` elements are rendeing the text from variables which are defined one level higher in the `DOM` tree:

```js
 - const [key, val] = entry
 - const message = val.message
 - const username = val.username
 - const country = val.country
 - const date = formatDate(val.date)
     include ../partials/guest
```

The `data` into these variables are coming from the page `Controller` functions, which rendering the page:

```js
return response.render('pages/guestbook', {
    entries: GuestBookController.getGuestBookEntries(),
}
```

This idea is used throughout the application.

And this leads to the `GuestBookController`. 

The `GuestBookController` is a very basic `Class` that handles the data reading and writing.
The requirement of the application was to store the guestbook entries in a `JSON` files.

I've chosen the following `JSON` structure:

```json
{
    "entries" [
        {},
        {},
    ]
}
```

An entry `object` implements the following interface:

```typescript
interface GuesBookEntry {
    id: string,
    message: string,
    username: string,
    date: number,
    country: string
}
```

This is rather self explanatory, but let's take a look on 2 of the properties.

I've decided to store the data in `UNIX epoch` format, becasue this is easy to handle, and support easy conversion, and as well as formttting. THe formatting is done using `date-fns`.

Every entry needs to be identified somehow. Using `UNIX epoch` too for this purpsoe can be considered as a valid solustion, however I decided to go with `RFC4122 UUIDs`.

A valid example of an object that represents a Guestbook entry in my `JSON` file looks like the following:

```json
{
    "country": "Finland",
    "message": "kakakak",
    "id": "a08e381f-2ec1-4b2f-9e07-0f3f0d52bef6",
    "date": 1646055387458,
    "username": "Richard"
}
```

As mentioend above the Styling is done with `NodeSASS` with `Pure.CSS`.

Since size of the application let's this, there's a single entrypoint for the styles, `root.css`, which can be found at: `views/static/css/root.css`.

The `UI` of the application kept to be _very_ simple and minimalistic.

Since the route `/newmessage` and the route `/ajaxmessage` are essentially the same, and avoiding code-repeating is a general mindset, I am using the same controller to handle both the `form` and the `ajax` reuqest. The only part they are different, is how `express` should handle them. The `API` should return an `HTTP` reponse, with a statusc code, while the `form` will re-render the pagae.

The solution is very simple:

```js
if (request.baseUrl === '/api') {
    return response.status(200).send({
        success: true,
    })
} else {
    return response.end();
}
```

So, if the request is coming from the `/api/*` prefix, we need to handle the request as an `AJAX` request, otherwise just send the `end` signal the `Express` exposes on the `response` object.

Simple, but saves at least 50 lines of code repeating.

### Deployment

As briefly mentioned above, the applicatino is deployed in `Docker` containers, to `Heroku`. The deployment handles automatically, if there's a new commit arrives to the project repository's `release` branch, which triggers a very basic `Github` actions, that build and publishes the application in the pre-defined container.

## Summary

In my opinion this assignment fullfilles every requirement that the course has set.