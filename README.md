# API Wars deployment

## Story

*Software deployment is all of the activities that make a software system available for use. The general deployment process consists of several interrelated activities with possible transitions between them.*

In this case, we deploy a Flask application to Heroku, a PaaS (platform as a service) service that you can use for free. For a tutorial on deploying your app to Heroku, see the Background materials section.

## What are you going to learn?

- Use Heroku CLI.
- Prepare an application for continuous deployment.
- Provision a DB on Heroku.

## Tasks

1. Create a new account on Heroku and activate it.
    - An account is created and can be logged into on Heroku.

2. Create a new application on Heroku for your API Wars deployment.
    - There is a new app created on your Heroku account.

3. Install Heroku command-line interface.
    - Executing the `heroku --version` command in the shell displays a result similar to the following example: `heroku/7.0.0 (darwin-x64) node-v8.0.0`.

4. Install the `gunicorn` package using the pip package manager.
    - Executing `pip list | grep -F gunicorn` command in the shell displays a line starting with `gunicorn`.

5. Create the required configuration files (`requirements.txt`, `runtime.txt`, `Procfile`) in the root folder of the project.
    - The required configuration files (`requirements.txt`, `runtime.txt`, `Procfile`) can be found in the root folder of the project.

6. Provision a Postgres DB instance using, for example, the Heroku Postgres add-on (or any other service), then connect to it and create your application schema.
    - A database is created (for example, using the Heroku Postgres add-on) and can be connected to, using either `psql` or the following Heroku CLI commands.
  `heroku login
   heroku pg:psql`.
For more details on connecting to Postgres, see the Background materials section.
    - A database schema (table structure) is created for the application. Running the `\dt` command after connecting to the database lists all required tables. Alternatively (if the above does not work), running `SELECT * FROM pg_catalog.pg_tables
 WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';`
query also lists all required tables.

7. Build your application, deploy it to Heroku, and check whether it is accessible on the internet.
    - The application is built successfully, and no errors are dislayed on the console.
    - The application is deployed to Heroku and is accessible on the internet.
    - The application deployed on Heroku works in the exact same way as the one submitted to the API Wars project repository.

## General requirements

None

## Hints

- Create a `runtime.txt`, containing your Python version, for example `python-3.5.2`. For information on runtimes available on Heroku, see [this link](https://devcenter.heroku.com/articles/python-runtimes).
- Edit the `requirements.txt` carefully. Avoid writing the entire `pip freeze` into it. First go through the tutorial and make the basic flask app run. The only requirements are include in the screenshot in the tutorial (`flask`, `gunicorn`, `itsdangerous`, `jinja2`, and so on). If your app actually requires more modules, include them in the `requirements.txt`.
- Install the Heroku command line interface using the `wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh` command.

## Background materials

- <i class="far fa-exclamation"></i> [Heroku + Flask Tutorial](https://marcellban.github.io/heroku-flask/) (Thanks for one of the Codecoolers, Marcell Bán for this tutorial.)
- <i class="far fa-exclamation"></i> [Heroku Docs - Getting started with Python](https://devcenter.heroku.com/articles/getting-started-with-python)
- <i class="far fa-exclamation"></i> [Deploying Heroku App with Git](https://devcenter.heroku.com/articles/git)
- <i class="far fa-exclamation"></i> [Using Heroku Postgres CLI commands](https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli)
- <i class="far fa-exclamation"></i> [Connecting to Heroku Postgres database using `psql` command](https://medium.com/@kagaramag/how-to-connect-to-heroku-postgres-database-using-cli-a2e51cc25029)
- <i class="far fa-book-open"></i> [About deployment](project/curriculum/materials/pages/devops/deployment.md)
