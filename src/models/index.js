import Booking from "./model.booking.js"
import Hotel from "./model.hotel.js"
import Room from "./model.room.js"
import Customer from "./model.customer.js"


Hotel.hasMany(Room, {
    onUpdate: 'CASCADE',
});
Room.hasMany(Booking, {
    onUpdate: 'CASCADE',
});
Room.belongsTo(Hotel);

Customer.hasMany(Booking, {
    onUpdate: 'CASCADE',
});

Booking.belongsTo(Customer);
Booking.belongsTo(Room);

export default {Hotel, Booking, Room, Customer};
