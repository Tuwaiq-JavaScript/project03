# Todo Mock Api - Week 3 Project

at some point in the future you will need to build a front end website, so your project this week is to prepare for this event by building a large CRUD application and fill it with data to try out

## Features to support

### Full CRUD

you'll need to implement the following urls for the project

```bash
//post
/login

//post
/register

//get
/profile

//post
/profile

//put
/profile

//delete
/profile

//post
profile

//get
/todo/

//get
/todo?search={text_to_search_for}

//get
/todo/:id

//post
/todo/

//put
/todo/:id

//delete
/todo/:id
```

### URL safety    
make sure to protect the routes that need to be protected (user specific routes)

### Structure

the project needs to use the MVC structure

**make sure to divide the routes into three files**

### schemas

please implement the following data example as a schema in you models

Todo Tasks:

```json
{
      "_id" : 1,
      "text": "Learn about Python",
      "updated_at": "Mon Apr 26 06:01:55 +0000 2015",
      "created_at": "Mon Apr 26 06:01:55 +0000 2015",
      "Tags": [
        "Web Development",
        "Programming Languages"
      ],
      "user_id":"30408bd0-d051-451b-8a5e-196c54101abb",
      "is_complete" : true
},
```

Profile:

```json
{
      "_id" : 1,
      "first_name": "Mohammed",
      "last_name": "Alharbi",
      "age":20,
      "updated_at": "Mon Apr 26 06:01:55 +0000 2015",
      "created_at": "Mon Apr 26 06:01:55 +0000 2015",
      "user_id":"30408bd0-d051-451b-8a5e-196c54101abb",
},
```

Users:

```json
{
  "_id": "30408bd0-d051-451b-8a5e-196c54101abb",
  "username": "Mohammed",
  "secret_key": "30408bd0-d051-451b-8a5e-196c54101abb",
  "password": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
}
```

## Bonus

- implement a JWT encryption for the login and register

- allow search by tags like this

```bash 
//get
/todo?tags={tags_to_search_for}
```

- allow the admin to bypass authentication (login and token sending), by adding a field in their registeration.

Think about how to implement this

- add an anonymous task posting, where the users are allowed to add tasks without authentication and only return these to the anonymous users **only**

Make sure you upload a copy of the database that you have used to test the program.

Have fun with the project and good luck.
