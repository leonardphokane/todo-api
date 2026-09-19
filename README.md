![Task API Header](images/header.png)


# 📝 Task API (todo-api)

A simple **CRUD API** for managing tasks, built with **Node.js + Express** and documented using **Swagger UI**.

---


## 📊 Swagger Documentation

Interactive API docs available at:

```bash
http://localhost:3000/docs


```
---


### 💡 Example Screenshot

![Swagger UI Screenshot](swagger-ui.png)

Caption:

> Swagger UI displaying all Task API operations — GET, POST, PUT, DELETE, and health endpoints.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install

```

### Run the server
```bash
npm start

```

For development with auto‑reload:

```bash

npm run dev
Server runs on http://localhost:3000 

```
---

### 📖 Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | / | API info |
| GET | /health | Health check |
| GET | /tasks | List all tasks |
| GET | /tasks/:id | Get one task |
| POST | /tasks | Create new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

---

## 🔍 Example Usage
### Get all tasks
```bash

curl.exe -i http://localhost:3000/tasks

```

Response:

```bash

json
[
  {"id":1,"title":"Learn CRUD","done":false},
  {"id":2,"title":"Write API","done":true},
  {"id":3,"title":"Test endpoints","done":false}
]

```

### Create a new task
```bash
curl.exe -i -X POST http://localhost:3000/tasks ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Buy milk\"}"

```

Response:

json
{"id":4,"title":"Buy milk","done":false}

```


### Update a task

```bash
curl.exe -i -X PUT http://localhost:3000/tasks/4 ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"Buy bread\",\"done\":true}"

  ```
Response:

```bash
json
{"id":4,"title":"Buy bread","done":true}


### Delete a task
```bash
curl.exe -i -X DELETE http://localhost:3000/tasks/4


```
Response:

```bash

204 No Content

```

---

## ✅ Features Implemented
Root and health endpoints

Full CRUD for tasks

Validation on create/update

Swagger UI integration

Clean project structure (routes, controllers, models, config)