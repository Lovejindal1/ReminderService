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

const subscribeEvents = async (payload) =>{
    let service = payload.service;
    let data = payload.data
    switch(service){
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(
                process.env.EMAIL_ID,   // or whatever your sender email variable is
                data.recepientEmail,
                data.subject,
                data.content
            );
            break;
        default:
            console.log('No valid event received');
            break;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscribeEvents
}