
### Creating a server to serve the files

Create a *package.json* to maintain a list of dependencies are the folder *node_modules* where all the dependencies are stored is ignored in the repository.

```sh
droid@droidserver:~/onGit/AngularJS-Tryouts/Routing/MailSite$ which npm
/home/droid/software/node/node-v4.2.2-linux-x64/bin/npm
droid@droidserver:~/onGit/AngularJS-Tryouts/Routing/MailSite$ which node
/home/droid/software/node/node-v4.2.2-linux-x64/bin/node
droid@droidserver:~/onGit/AngularJS-Tryouts/Routing/MailSite$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (MailSite) 
Sorry, name can no longer contain capital letters.
name: (MailSite) mail-site
version: (1.0.0) 
description: A sample email page
entry point: (app-module.js) server.js
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/droid/onGit/AngularJS-Tryouts/Routing/MailSite/package.json:

{
  "name": "mail-site",
  "version": "1.0.0",
  "description": "A sample email page",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
```

Install the required packages to serve static files.

```sh
droid@droidserver:~/onGit/AngularJS-Tryouts/Routing/MailSite$ npm install --save connect serve-static
npm WARN package.json mail-site@1.0.0 No repository field.
npm WARN package.json mail-site@1.0.0 No README data
connect@3.4.1 node_modules/connect
├── utils-merge@1.0.0
├── parseurl@1.3.1
├── debug@2.2.0 (ms@0.7.1)
└── finalhandler@0.4.1 (escape-html@1.0.3, unpipe@1.0.0, on-finished@2.3.0)

serve-static@1.11.1 node_modules/serve-static
├── escape-html@1.0.3
├── encodeurl@1.0.1
├── parseurl@1.3.1
└── send@0.14.1 (destroy@1.0.4, fresh@0.3.0, range-parser@1.2.0, etag@1.7.0, ms@0.7.1, statuses@1.3.0, debug@2.2.0, depd@1.1.0, mime@1.3.4, on-finished@2.3.0, http-errors@1.5.0)
```

*MailSite/package.json*

```json
{
  "name": "mail-site",
  "version": "1.0.0",
  "description": "A sample email page",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "connect": "^3.4.1",
    "serve-static": "^1.11.1"
  }
}
```
