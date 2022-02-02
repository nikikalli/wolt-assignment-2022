
# Wolt Summer 2022 Engineering Internship assignment





## Tecknologies and dependencies

Backend is built with Django, frontend with React and typescript. 

The project uses styled-components for easier styling, react-spring for animations and axios for communicating with the backend.


## Quick start

### Frontend

Go to the frontend folder and run 'npm start'. If there's no node modules run: 'npm i' inside the root folder.

Note: you have to start the server (backend) to be able to actyally calculate the delivery fee.

### Bulding

Run ```npm run build``` inside the root folder

### Backend


- You don't need to run frontend.
- Make sure to have python installed! 
- If you use Windows then make sure that python is added to the environment variables. 
- You also need 'pip' for installing frameworks



In the terminal run ```pip install django``` and ```pip install djangorestframework django-cors-headers```.

Next run in order:
```
python manage.py migrate

python manage.py makemigrations calc

python manage.py migrate calc
```

Finally load the initial table into database:

```
python manage.py loaddata ./calc/fixtures.json
```

And start the server:

```
python manage.py runserver
```




