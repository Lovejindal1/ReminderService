const {NotificationTicket} = require('../models/index');
const {Op} = require('sequelize');
const notificationticket = require('../models/notificationticket');

class TicketRepository {

    async getAll(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (err) {
            throw err;
        }
    }

    async create (data){
        try {
            const ticket = await NotificationTicket.create(data);
                return ticket;
        } catch (err) {
            throw err;
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
                
            })
            return tickets;
        } catch (err) {
            throw err;
        }
    }

    async update(ticketId,data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if (!ticket) {
                throw new Error("Ticket not found");
            }
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TicketRepository;