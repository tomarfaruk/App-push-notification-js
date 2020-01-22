//omar faruk

const functions = require('firebase-functions');
const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);



exports.buyNotification = functions.database.ref('/buyNotification')
    .onWrite((data, context) => {

        const DeviceToken = admin.database().ref("/admin/Tokens").once('value');
        return DeviceToken.then(result => {
            const Tokens = result.val();

            const payload = {
                notification: {
                    title: "Buy Order Request",
                    body: "You have a new Buy request notification ",
                    icon: "default",
                    click_action: "BuyOrderPage"
                }

            };
            return admin.messaging().sendToDevice(Tokens, payload)
                .then(response => {
                    console.log("Message send");
                });
        });

    });


