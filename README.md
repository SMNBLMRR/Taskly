
# Taskly

An advanced To-Do List Application build on top of fastify and react


- **Backend with Fastify**: Efficient and lightweight server framework.
- **Secure Authentication**: Utilizes JWTs in `httpOnly` cookies for enhanced security.
- **React Frontend**: Responsive UI with component-driven architecture.
- **State Management**: Employs Zustand for intuitive and simple state handling.
- **Task Management**: Full CRUD operations

*most of the conventions have been overlooked for a fast development of the project... I will work on it to make it better*

## Installation

Follow these steps to get Taskly up and running:

#### after the repository has cloned follow these steps ####

### Crete an ``.env`` file for client and server folder
es:

```bash
cp .env.template .env
```

### Run this command and generate a secret
```bash
openssl rand -base64 32
```
This will produce a Base64 encoded string derived from 32 bytes of random data, which will be suitable for a cookie secret or jwt secret.

### Install Dependencies:
In the project root run this command

```bash
npm i
```

### Start Development Server
```bash
npm run dev
```
this command makes both the sever and client run
