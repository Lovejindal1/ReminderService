<h1 align="center">
📧 Reminder Service
</h1>

<h3 align="center">
Microservice responsible for consuming RabbitMQ events and sending Email Notifications
</h3>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/RabbitMQ-Message_Broker-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white">
<img src="https://img.shields.io/badge/Nodemailer-Email-0A66C2?style=for-the-badge">
<img src="https://img.shields.io/badge/MySQL-Amazon_RDS-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize">

</p>

---

# 📖 Overview

The **Reminder Service** is responsible for sending email notifications asynchronously in the Airline Booking System.

Instead of sending emails directly from the Booking Service, booking events are published to RabbitMQ. The Reminder Service consumes these events, stores reminder information in the database, and sends confirmation emails using Nodemailer.

This asynchronous design keeps the Booking Service fast and improves the scalability of the overall system.

---

# 🚀 Features

- 📧 Email Notifications
- 📨 RabbitMQ Consumer
- ⏰ Scheduled Reminder Jobs
- 🎫 Booking Confirmation Emails
- 🔄 Asynchronous Event Processing
- 🗄 MySQL Database
- ☁️ Amazon RDS Support

---

# 🏗 Architecture

```text
Booking Service
       │
       ▼
RabbitMQ Exchange
       │
       ▼
Reminder Service
       │
       ▼
Reminder Database
       │
       ▼
Nodemailer
       │
       ▼
User Email
```

---

# 📁 Project Structure

```text
ReminderService
│
├── src
│   ├── config
│   ├── controllers
│   ├── migrations
│   ├── middlewares
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.js
│
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file.

```env
PORT=3004

EMAIL_ID=your_email@gmail.com

EMAIL_PASS=your_app_password

EXCHANGE_NAME=AIRLINE_BOOKING

REMINDER_BINDING_KEY=REMINDER_SERVICE

MESSAGE_BROKER_URL=amqp://localhost
```

Database configuration (`config/config.json`)

```json
{
  "development": {
    "username": "admin",
    "password": "YOUR_PASSWORD",
    "database": "REMINDER_DB_DEV",
    "host": "YOUR_RDS_ENDPOINT",
    "dialect": "mysql"
  }
}
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Lovejindal1/ReminderService.git
```

Move into the project

```bash
cd ReminderService
```

Install dependencies

```bash
npm install
```

Run migrations

```bash
npx sequelize-cli db:migrate
```

Start the service

```bash
npm start
```

---

# 📡 API Endpoints

## Create Reminder

```http
POST /api/v1/tickets
```

This endpoint stores reminder information in the database.

---

# 📨 RabbitMQ Consumer

The service subscribes to the configured RabbitMQ exchange.

Whenever the Booking Service publishes a booking event:

- Booking information is received
- Reminder is processed
- Email notification is sent automatically

---

# 📧 Email Workflow

```text
Booking Successful

↓

Booking Service

↓

RabbitMQ Exchange

↓

Reminder Service

↓

Generate Email

↓

Send via Nodemailer

↓

Customer Receives Email
```

---

# 🗄 Database

The Reminder Service stores reminder information such as:

- Recipient Email
- Notification Time
- Status
- Created Time

---

# 🔗 Communicates With

- Booking Service
- RabbitMQ
- Gmail SMTP (Nodemailer)

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL |
| ORM | Sequelize |
| Email | Nodemailer |
| Message Broker | RabbitMQ |
| Scheduler | Node Cron |
| Deployment | AWS EC2 |
| Database Hosting | Amazon RDS |

---

# 🌍 Part of

This repository is one of the microservices of the **Airline Booking System**.

Main Repository

https://github.com/Lovejindal1/Airline-Booking-System

---

# 👨‍💻 Author

## Love Jindal

Backend Developer

### Connect with me

- GitHub: https://github.com/Lovejindal1
- LinkedIn: https://www.linkedin.com/in/love-kumar-jindal/

---

⭐ If you found this project useful, consider giving it a star.