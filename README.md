# Youth Activism App (EDF)

## Installing Software

Install node here: https://nodejs.org/en/download/

#### On command prompt:

Run `npm --version` to confirm npm (node package manager) is installed

If so, run `npm install --global expo-cli` to install expo

## Getting Started

Clone Repo

```
git clone https://github.com/te68/edf-dfg
```

Install packages

```
cd edf-dfg && npm install
```

Run back-end and front-end servers

```
npm run dev
```

## API Docs

- ## Authentication:

### **Register User**

```
  POST http://localhost:3000/api/users
```

Headers:
| Key | Value |
| ------ | ------ |
| Content-Type | application/json |

#### Body:

```
{
"name":"John Smith",
"email":"johnsmith@example.com",
"password":"StrongPassword"
}
```

#### Response:

```
{
 "token":"token"
}
```

---

### **Login User**

```
  POST http://localhost:3000/api/auth
```

#### Headers:

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token            |

#### Body:

```
{
"email":"johnsmith@example.com",
"password":"Yourpassword"
}
```

#### Response:

```
{
 "token":"token"
}
```

---

### **Get Auth User**

```
  GET http://localhost:3000/api/auth
```

#### Headers:

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token            |

#### Body:

```
{
"email":"johnsmith@example.com",
"password":"Yourpassword"
}
```

#### Response:

```
{
 "_id":"mongoDB ID",
 "name":"John Smith",
 "email":"johnsmith@example.com",
 "avatar":"avatar link",
 "date": "2021-02-02T02:52:59.987Z"
}
```

---

- ## Content:

### **Create Content**

```
  POST http://localhost:3000/api/content?page=<page number>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
  "title": "A Climate Accountability Matrix For Our Leaders",
  "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
  "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
  "author": "EDF",
  "interest": "Corporate Climate Action Updates",
  "category": "blog",
  "featured": true
}
```

#### Response:

```
{
    "message": "Content created",
    "content": {
        "_id": "604e9e39fcf9e951cc7341df",
        "title": "A Climate Accountability Matrix For Our Leaders",
        "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
        "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
        "author": "EDF",
        "interest": "Corporate Climate Action Updates",
        "category": "blog",
        "likes": 0,
        "celebrates": 0,
        "dislikes": 0,
        "featured": true,
        "createdAt": "2021-03-14T23:37:29.815Z",
        "updatedAt": "2021-03-14T23:37:29.815Z",
        "__v": 0
    }
}
```

---

### **Get Content**

```
  GET http://localhost:3000/api/content?page=<page number>&searchQuery=<search query>&category=<category>
```

The parameter for page is option (Default to 1)

#### Headers:

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token            |

#### Response:

```
{
    "content": [
        {
            "_id": "604e9e39fcf9e951cc7341df",
            "title": "A Climate Accountability Matrix For Our Leaders",
            "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
            "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
            "author": "EDF",
            "interest": "Corporate Climate Action Updates",
            "category": "blog",
            "likes": 0,
            "celebrates": 0,
            "dislikes": 0,
            "featured": true,
            "createdAt": "2021-03-14T23:37:29.815Z",
            "updatedAt": "2021-03-14T23:37:29.815Z",
            "__v": 0
        }
    ],
    "totalCount": 1,
    "totalPages": 1
}
```

---

### **Update Content**

```
  PUT http://localhost:3000/api/content/<contentId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
  "title": "A Climate Accountability Matrix For Our Leaders",
  "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
  "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
  "author": "EDF",
  "interest": "Corporate Climate Action Updates",
  "category": "blog",
  "featured": true,
  "likes": 1,
  "dislikes": 1,
  "celebrates": 2

}
```

#### Response:

```
{
    "message": "Content Updated",
    "content": {
        "_id": "604e9e39fcf9e951cc7341df",
        "title": "A Climate Accountability Matrix For Our Leaders",
        "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
        "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
        "author": "EDF",
        "interest": "Corporate Climate Action Updates",
        "category": "blog",
        "likes": 1,
        "celebrates": 2,
        "dislikes": 1,
        "featured": true,
        "createdAt": "2021-03-14T23:37:29.815Z",
        "updatedAt": "2021-03-14T23:46:52.057Z",
        "__v": 0
    }
}
```

---

### **Delete Content**

```
  DELETE http://localhost:3000/api/content/<contentId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "message": "Content Deleted",
}
```

---

### **Get Content Details**

```
  GET http://localhost:3000/api/content/<contentId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "_id": "604e9e39fcf9e951cc7341df",
    "title": "A Climate Accountability Matrix For Our Leaders",
    "url": "https://defendourfuture.org/a-climate-accountability-matrix-for-our-leaders/",
    "preview": "Our elected and business leaders are two crucial actors in addressing the climate crisis. Here are the ways in which our leaders must support the climate fight - our Climate Accountability Matrix. ",
    "author": "EDF",
    "interest": "Corporate Climate Action Updates",
    "category": "blog",
    "likes": 1,
    "celebrates": 2,
    "dislikes": 1,
    "featured": true,
    "createdAt": "2021-03-14T23:37:29.815Z",
    "updatedAt": "2021-03-14T23:46:52.057Z",
    "__v": 0
}
```

---

- ## Event:

### **Create Event**

```
  POST http://localhost:3000/api/event
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
  "title": "sample event",
  "date": "2022-05-05",
  "time": "5-6pm EST",
  "address": "Random Address",
  "description": "sample event abcde",
  "categories": ["Food Justice"],
  "url": "https://www.edf.org/"
}
```

#### Response:

```
{
    "message": "Event created",
    "event": {
        "categories": [
            "Food Justice"
        ],
        "_id": "604ea164ab45a23784419f7d",
        "title": "sample event",
        "date": "2022-05-05T00:00:00.000Z",
        "time": "5-6pm EST",
        "address": "Random Address",
        "description": "sample event abcde",
        "url": "https://www.edf.org/",
        "createdAt": "2021-03-14T23:51:00.849Z",
        "updatedAt": "2021-03-14T23:51:00.849Z",
        "__v": 0
    }
}
```

---

### **Get Events**

```
  GET http://localhost:3000/api/event?page=<page number>
```

The parameter for page is option (Default to 1)

#### Headers:

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token            |

#### Response:

```
{
    "events": [
        {
            "categories": [
                "Food Justice"
            ],
            "_id": "603c262594940f7ff865b2c4",
            "title": "sample event",
            "date": "2022-05-05T00:00:00.000Z",
            "time": "5-6pm EST",
            "address": "Random Address",
            "description": "sample event abcde",
            "url": "https://www.edf.org/",
            "createdAt": "2021-02-28T23:24:21.970Z",
            "updatedAt": "2021-02-28T23:24:21.970Z",
            "__v": 0
        }
    ],
    "totalCount": 1,
    "totalPages": 1
}
```

---

### **Update Event**

```
  PUT http://localhost:3000/api/event/<eventId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
  "title": "sample event (updated)",
  "date": "2022-05-05",
  "time": "5-6pm EST",
  "address": "New Address",
  "description": "sample event abcde",
  "categories": ["Food Justice"],
  "url": "https://www.edf.org/"
}
```

#### Response:

```
{
    "message": "Event updated",
    "event": {
        "categories": [
            "Food Justice"
        ],
        "_id": "603c262594940f7ff865b2c4",
        "title": "sample event (updated)",
        "date": "2022-05-05T00:00:00.000Z",
        "time": "5-6pm EST",
        "address": "New Address",
        "description": "sample event abcde",
        "url": "https://www.edf.org/",
        "createdAt": "2021-02-28T23:24:21.970Z",
        "updatedAt": "2021-02-28T23:28:11.310Z",
        "__v": 0
    }
}
```

---

### **Delete Event**

```
  DELETE http://localhost:3000/api/event/<eventId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "message": "Event deleted",
}
```

---

### **Get Event Details**

```
  GET http://localhost:3000/api/event/<eventId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "categories": [
        "Food Justice"
    ],
    "_id": "603c262594940f7ff865b2c4",
    "title": "sample event (updated)",
    "date": "2022-05-05T00:00:00.000Z",
    "time": "5-6pm EST",
    "address": "New Address",
    "description": "sample event abcde",
    "url": "https://www.edf.org/",
    "createdAt": "2021-02-28T23:24:21.970Z",
    "updatedAt": "2021-02-28T23:28:11.310Z",
    "__v": 0
}
```

---

- ## Petition:

### **Create Petition**

```
  POST http://localhost:3000/api/petition
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
    "title": "Petition 1",
    "url": "www.edf.org"
}
```

#### Response:

```
{
    "message": "Petition created",
    "petition": {
        "_id": "604963af61ba90abb426fb48",
        "title": "Petition 1",
        "url": "www.edf.org",
        "__v": 0
    }
}
```

---

### **Get Petitions**

```
  GET http://localhost:3000/api/petition?page=<page number>
```

The parameter for page is option (Default to 1)

#### Headers:

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token            |

#### Response:

```
{
    "petitions": [
        {
            "_id": "604963af61ba90abb426fb48",
            "title": "Petition 1",
            "url": "www.edf.org",
            "__v": 0
        }
    ],
    "totalCount": 1,
    "totalPages": 1
}
```

---

### **Update Petition**

```
  PUT http://localhost:3000/api/petition/<petitionId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Body:

```
{
    "title": "Petition 1 (Updated)",
    "url": "www.edf.org"
}
```

#### Response:

```
{
    "message": "Petition updated",
    "petition": {
        "_id": "604963af61ba90abb426fb48",
        "title": "Petition 1 (Updated)",
        "url": "www.edf.org",
        "__v": 0
    }
}
```

---

### **Delete Petition**

```
  DELETE http://localhost:3000/api/petition/<petitionId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "message": "Petition deleted"
}
```

---

### **Get Petition Details**

```
  GET http://localhost:3000/api/petition/<petitionId>
```

Headers:
| Key | Value |
| ------------ | ---------------- |
| Content-Type | application/json |
| x-auth-token | token |

#### Response:

```
{
    "_id": "604963af61ba90abb426fb48",
    "title": "Petition 1",
    "url": "www.edf.org",
    "__v": 0
}
```

---

### Price Estimation

$57/month for MongoDB (dedicated clusters) - https://www.mongodb.com/pricing
$25/month for Heroku (small business plan) - https://www.heroku.com/pricing
