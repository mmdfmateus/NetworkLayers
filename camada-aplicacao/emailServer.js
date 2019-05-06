/*=================================
    FORMATO DO ARQUIVO:
    SERVER1-SERVER4-mensagem.txt
    ------------------
    MAIL FROM: remetente@redes.com
    RCPT TO: destinatario1@redes.com
    RCPT TO: destinatario2@redes.com
    // ...
    RCPT TO: destinatarioN@redes.com
    DATA
    Conteúdo da mensagem linha1
    Conteúdo da mensagem linha2
    // ...
    Conteúdo da mensagem linhaN
    .
    QUIT
===================================*/

/*  obs.: após a última linha de conteúdo da mensagem, deve ser inserido uma linha contendo
    um ponto '.' que marca o final do conteúdo
*/

const fs = require('fs')
var FILENAME_SENT = 'CLIENT4-CLIENT1-mensagem.txt';

class Email {
    // userFrom; // usuário que enviou
    // var userTo; // usuários destinatários
    // var content = ""; // conteúdo

    readEmail() {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) throw err;
            console.log(data);
            fileTextArray = data.split(/\s+/); // array de string com as strings do arquivo
            console.log(fileTextArray);

            userFrom = fileTextArray[3];
            var userTo = [];
            var content = "";

            var buffer;
            for (buffer = 4; buffer < fileTextArray.length; buffer++) {
                console.log("fileTextArray: " + fileTextArray[buffer]);
                if (fileTextArray[buffer] == "TO:") {
                    this.userTo.push(fileTextArray[buffer + 1]);
                }
                if (fileTextArray[buffer] == "DATA") {

                    break;
                }
            }

            while (fileTextArray[buffer] != ".") {
                content += fileTextArray[buffer]
            }
            return content;
            // res.send(data);
        });
    }

    constructor(file) { // construtor vai receber o arquivo "SERVER1-SERVER4-mensagem.txt"

        var fileTextArray = [];
        var userFrom;

        fs.readFile(file, 'utf8', function (err, data) {
            if (err) throw err;
            console.log(data);
            fileTextArray = data.split(/\s+/); // array de string com as strings do arquivo
            console.log(fileTextArray);

            userFrom = fileTextArray[3];
            var userTo = [];
            var content = "";

            var buffer;
            for (buffer = 4; buffer < fileTextArray.length; buffer++) {
                console.log("fileTextArray: " + fileTextArray[buffer]);
                if (fileTextArray[buffer] == "TO:") {
                    this.userTo.push(fileTextArray[buffer + 1]);
                }
                if (fileTextArray[buffer] == "DATA") {

                    break;
                }
            }

            while (fileTextArray[buffer] != ".") {
                content += fileTextArray[buffer]
            }
            return content;
            // res.send(data);
        });



    }

    sendEmail() {
        for (user in this.userTo) {
            for (subscriber in EmailServer) {
                if (user.address == subscriber.address)
                    subscriber.inbox.push(this);
            }
        }
    }

}

class User {


    constructor(address) {

        this.address = address;
        this.inbox = [];

        this.emailServer = new EmailServer();
        this.emailServer.userList.push(this);

    }

    readFirstEmail() {

        if (inbox.length > 0) {
            // printf pra exibir o conteudo do primeiro email, selecionar o email que quer ler e apagar foge do escopo
            this.inbox.pop(); // remove apos leitura
        } else {
            // printf "você não possui emails"
        }
    }

    writeEmail(to, data) {
        // ler destinatario da entrada do usuario separado por vírgula e colocar em destin


        var toFile = "MAIL FROM: ".concat(this.address + '\n');
        // toFile.concat("RCPT TP: " + to + '\n');
        toFile += "RCPT TP: " + to + '\n';
        // for (destin in destinArray) {
        //     toFile.concat("RCPT TP: " + destin + '\n');
        // }

        // ler conteudo da mensagem em content
        var content;
        // toFile.concat("DATA \n" + data + "\n.");
        toFile += "DATA \n" + data + "\n.\n";

        // toFile.concat("QUIT\n");
        toFile += "QUIT\n";

        fs.writeFile(FILENAME_SENT, toFile, (err) => {
            if (err) console.log(err); -
            console.log("Successfully Written to File.");
        });

        // salvar toFile com o nome "CLIENTE4-CLIENTE1-mensagem.txt"
    }

}

class EmailServer {



    constructor() {
        this.userList = [];
    }
}

module.exports = {
    Email,
    User,
    EmailServer
}