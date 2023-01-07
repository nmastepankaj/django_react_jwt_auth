
# Django + React JWT Token Auth APP App

It is a basic note web app that is created using Django and Django REST Framework with token authentication and React.
It is good for learning first time how to connect Django with React or Any backend to frontend using REST API. It is good for those who are new to authentication using Django REST Framework.
## Installation

First clone the github repository

```bash
  git clone https://github.com/nmastepankaj/note_app_django_react.git
```

Open the repository folder in any code editor (VS code) or open any terminal.
Move to the backend folder and install all the requirements.

```bash
  cd backend
```

You need to create virtual environment for the project. If you don't have virtualenv the install it using the below command :-

```bash
  virtualenv venv
```

Now, activate the virtual environment using the below command.
If you're window user :-

```bash
  ./venv/Scripts/activate
```


If you're linux user :-

```bash
  source venv/bin/activate
```

Then move to your project folder 

```bash
  cd note_app
```

install all the project requirements

```bash
  pip install -r requirement.txt
```


Now, you need to create migrations and migrate all the migrations

```bash
  python manage.py makemigrations
  python manage.py migrate
```

Create super user for your project

```bash
  python manage.py createsuperuser
```

Run your project

```bash
  python manage.py runserver
```

Next step is to install the Frontend libraries. Open another terminal

```bash
  cd frontend
  npm i
```

Now start your react application

```bash
  npm start
```

Now your application is ready to use. First register a user and login with the provided credentials.


## Authors

- [@nmastepankaj](https://www.github.com/nmastepankaj)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nmastepankaj.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nmastepankaj/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/nmastepankaj)


## 🚀 About Me
I'm a full LAMP stack developer with Django as backend and React as frontend.


## Feedback

If you have any feedback, please reach out to us at my profile link provided above.


## Support

For support, email support@codingnap.com or follow me on insta (nmastepankaj).


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Appendix

Frontend of this project is taken from the [CodeWithHarry](https://github.com/CodeWithHarry) inotebook project.

