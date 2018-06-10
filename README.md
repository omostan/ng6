# Ng6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Using Restangular with Angular 6 (step-by-step)

1.) Run `npm install ngx-restangular` to install the latest version of ngx-restangular

2.) Import the module into the module.ts
*`import { Restangular } from 'ngx-restangular'`*

3.) Include a function in module.ts for setting the default restangular configuration

<pre>
    export function RestangularConfigFactory(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:4200/restservice.svc');
        RestangularProvider.setDefaultHeaders('Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1')
    }
</pre>

4.) Add *`RestangularModule`* to the imports in module.ts

<pre>
    @NgModule({
        bootstrap: [ AppComponent ],
        declarations: [
            AppComponent,
        ],
        imports: [
            // Importing RestangularModule and making default configs for restangular
            RestangularModule.forRoot(RestangularConfigFactory),
        ]
    })
</pre>

5.) In the component (e.g. data.service.ts) where it has to be used, import *`Restangular`*

<pre>import { Restangular } from 'ngx-restangular';</pre>


6.) create an object of *`Restangular`* in the constructor

<pre>constructor(private restangular: Restangular) {}</pre>

7.) Create a method (e.g. getUsers()) and use this.restangular instance (in data.service.ts) to fetch data from RESTful service or other Web API service

<pre>
    ngOnInit() {
        // GET http://localhost:4200/restservice.svc/users/
        this.restangular.all('users').doGET();
    }
</pre>

8.) Finally, call the getUsers() method from the users.component.ts

<pre>
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.dataService.getUsers().subscribe(
        data => this.users = data,
        err => console.error(err),
        () => console.log('done fetching users!')
        
        )
    }
</pre>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).