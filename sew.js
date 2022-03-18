/*Sew Queen Whatsapp Bot    

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License

Coded By Ravindu Manoj
*/
let DataPack = require('sew-queen-pro/export/output');
let {ConnectSewQueenDatabase} = require('sew-queen-pro/db/autosave');
let Db = require("./DataBase/db");
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let Mon = require('./DataBase/db');
let GBLACK =require('blocked-s/grp')
let SOL =require('sew-queen-pro/console')
let {CheckUpdatesWeb, sendMessageownerMSG, sendMessageADSMSG, sendMessageBotOn, sendMessageGreetingMSG, sendMessageMSGMSG, sendMessageBlackListMSG, sendMessageBIOMSG} = require('sew-queen-pro/sources/dc/sew')
let fs = require('fs'); let os = require('os'); let got = require('got'); let path = require("path"); let chalk = require('chalk');
let SQQA = require('./SQ-QA')
let {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@ravindu01manoj/sew-queen-web');  
let {Message, StringSession, Image, Video} =  require('sew-queen-pro/sources/dc/Wa-Base/');
let Heroku = require('heroku-client'); let simpleGit = require('simple-git'); let git = simpleGit();
let heroku = new Heroku({ token: Details.HEROKU.API_KEY}); let baseURI = '/apps/' + Details.HEROKU.APP_NAME;
String.prototype.format = function () {
        var i = 0,
                args = arguments;
        return this.replace(/{}/g, function () {
                return typeof args[i] != 'undefined' ? args[i++] : '';
        })
};
if (!Date.now) {
        Date.now = function () {
                return new Date().getTime();
        }
}
Array.prototype.remove = function () {
        var what, a = arguments,
                L = a.length,
                ax;
        while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                }
        }
        return this;
};
require("sew-queen-pro/protection/herokubanprotect");

async function sewQueen() {
        if(Db.MONGOURI){ await ConnectSewQueenDatabase(); console.log('🪄 Database Successfully Updated')}
        const CheckWebUpdate = await CheckUpdatesWeb()
        await Details.DATABASE.sync();
        const DataKey = new WAConnection();
        DataKey.version = CheckWebUpdate;
        let Session = new StringSession();
        await sendMessageownerMSG(DataKey); await sendMessageADSMSG(DataKey)
        DataKey.logger.level = Details.DEBUG ? 'debug' : 'warn';
        if (Details.SESSION) {DataKey.loadAuthInfo(Session.deCrypt(Details.SESSION));
        } else { console.log('Need SEW_QUEEN_SESSION \n'.repeat(50));return;}
        DataKey.on('credentials-updated', async () => {
                let authInfo = DataKey.base64EncodedAuthInfo();
        })
        DataKey.on('connecting', async () => {
                console.log(SOL.LOGING);
        });
        DataKey.on('open', async () => {
                console.log(SOL.LOG); console.log(SOL.PASSC);
                if (Details.SEWRR == 'raviya') {
                        console.log(SOL.PASSD)
                } else if (Details.SEWRR !== 'raviya') {
                        throw new Error(SOL.PASSW); return;
                }
            console.log(SOL.INSTCL); console.log(SOL.INSTC); console.log(SOL.INSTL);
            let {getdatafromSewQueenDatabase} = require('sew-queen-pro/db/main');
            var dcommands = await getdatafromSewQueenDatabase('commands') + ','
           if(!dcommands.includes('no-saved-data')){
           var Commands = dcommands.split(',')
                Commands.map(async (allcmd) => {
                if(allcmd){if (!fs.existsSync('./Commands/' + allcmd.split('/=/')[0] + '.js')) {
                                console.log(allcmd.split('/=/')[0]);
                                var response = await got(allcmd.split('/=/')[1]);
                                if (response.statusCode == 200) {
                                        fs.writeFileSync('./Commands/' + allcmd.split('/=/')[0] + '.js', response.body); require('./Commands/' + allcmd.split('/=/')[0] + '.js');
                                }}}})};
                fs.readdirSync('./Commands').forEach(allcmd => { if (path.extname(allcmd).toLowerCase() == '.js') {
                                require('./Commands/' + allcmd);
                }});
                console.log(SOL.COUNTY); console.log(SOL.TYPEW); //  await sendMessageBIOMSG(DataKey);
                await sendMessageBotOn(DataKey)})
        DataKey.on('chat-update', async m => {
                if (!m.hasNewMessage) return;
                if (!m.messages && !m.count) return;
                let msg = m.messages.all()[0];
                if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
                if (Details.NO_ONLINE) { await DataKey.updatePresence(msg.key.remoteJid, Presence.unavailable)}
                await sendMessageGreetingMSG(DataKey, msg)
                if (GBLACK.ALL_GROUP !== 'raviya') {     
                var grp = GBLACK.ALL_GROUP + ',' + Details.BLOCKCHAT;var sup = grp.split(',')
                if(msg.key.remoteJid.includes('g.us') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return}
                await sendMessageMSGMSG(DataKey, msg, 'sew', SQQA)
                });
        try {
        await DataKey.connect();
    } catch {return;}};
    sewQueen()
