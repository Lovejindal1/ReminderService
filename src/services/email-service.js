const { response } = require('express');
const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId,data);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    create: createNotification,
    updateTicket
}