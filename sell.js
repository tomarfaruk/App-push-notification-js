//omar faruk

const functions = require('firebase-functions');
const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

    
exports.sellNotification = functions.database.ref('/sellNotification')
.onWrite((data, context) => {

    const DeviceToken = admin.database().ref("/admin/Tokens").once('value');
    return DeviceToken.then(result => {
        const Tokens = result.val();

        const payload = {
            notification: {
                title: "Sell Order Request",
                body: "You have a new sell request notification ",
                icon: "default",                    
                click_action: "SellOrderPage"
            }

        };
        return admin.messaging().sendToDevice(Tokens, payload)
            .then(response => {
                console.log("Message send");
            });
    });

});
