class Mail {
    constructor() {
        this.from = 'pengirim@dicoding';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }

    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to);
    }
}

const mail = new Mail();
mail.sendMessage('Hallo', 'dimaseka83@gmail.com');