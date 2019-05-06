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

export class Email {
    userFrom; // usuário que enviou
    userTo; // usuários destinatários
    content = ""; // conteúdo

    constructor(file) { // construtor vai receber o arquivo "SERVER1-SERVER4-mensagem.txt"

        var fileText; // string com o texto que existe em file
        var fileTextArray = fileText.split(" "); // array de string com as strings do arquivo

        this.userFrom = fileTextArray[3];
        this.userTo = [];
        this.content = "";

        var buffer;
        for (buffer = 4; i < fileTextArray.length; buffer++) {
            if (fileTextArray[buffer] == "TO:") {
                this.userTo.push(fileTextArray[buffer + 1]);
            }
            if (fileTextArray[buffer] == "DATA") {
                break;
            }
        }

        while (fileTextArray[buffer] != ".") {
            this.content.concat(fileTextArray[buffer]);
        }

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

export class User {

    address;
    inbox;

    constructor(address) {

        this.address = address;
        this.inbox = [];

        EmailServer.userList.push(this);

    }

    readFirstEmail() {

        if (inbox.length > 0) {
            // printf pra exibir o conteudo do primeiro email, selecionar o email que quer ler e apagar foge do escopo
            this.inbox.pop(); // remove apos leitura
        }
        else {
            // printf "você não possui emails"
        }
    }

    writeEmail() {
        // ler destinatario da entrada do usuario separado por vírgula e colocar em destin
        var destin;
        var destinArray = destin.split(",");

        var toFile = "MAIL FROM: ".concat(this.address + '\n');
        for (destin in destinArray) {
            toFile.concat("RCPT TP: " + destin + '\n');
        }

        // ler conteudo da mensagem em content
        var content;
        toFile.concat("DATA \n" + content + "\n.");

        toFile.concat("QUIT\n");

        // salvar toFile com o nome "CLIENTE4-CLIENTE1-mensagem.txt"
    }

}

export class EmailServer {

    static userList;

    constructor() {
        this.userList = [];
    }
}
