const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHNAGE_NAME: process.env.EXCHNAGE_NAME,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY
}