


# Youth Activism App (EDF)

## Getting Started
Clone Repo
```
git clone https://github.com/te68/edf-dfg
```
Install packages
```
cd pdf-dfg && npm install
```
Run back-end and front-end servers
```
npm run dev
```



## API Docs
* ## Authentication:

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
***
### **Login User** 
```
  POST http://localhost:3000/api/auth
```
#### Headers:
| Key | Value |
| ------ | ------ |
| Content-Type | application/json |
| x-auth-token | token |

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
***
### **Get Auth User** 
```
  GET http://localhost:3000/api/auth
```
#### Headers:
| Key | Value |
| ------ | ------ |
| Content-Type | application/json |
| x-auth-token | token |

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
***