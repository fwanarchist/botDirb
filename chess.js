
class chessGame {
    constructor(channel, player1, gameNumber){
        this.player2 = channel.client;
        this.players = [
            player1,
            this.player2
        ];
        this.channel = channel;
        this.player1 = player1;
        this.board = [
            ['wr', 'wn', 'wb', 'wq', 'wk', 'wk', 'wb', 'wn', 'wr'],
            ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
            ['et', 'et', 'et', 'et', 'et', 'et', 'et', 'et', 'et'],
            ['et', 'et', 'et', 'et', 'et', 'et', 'et', 'et', 'et'],
            ['et', 'et', 'et', 'et', 'et', 'et', 'et', 'et', 'et'],
            ['et', 'et', 'et', 'et', 'et', 'et', 'et', 'et', 'et'],
            ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
            ['br', 'bn', 'bb', 'bq', 'bk', 'bk', 'bb', 'bn', 'br'],
        ];
        this.emptyBoard = [
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
        ];
    }
    printBoard(player){
        var str = '';
        var invert = player == 1;
        for(var i = 0; i < this.board.length; i++){
            for(var j = 0; j < this.board.length; j++){
                str += ':chess_'+(this.emptyBoard[(invert)?(7-i):(i)][(invert)?(7-j):(j)])?('white'):('black')+'_'+/(.)./g.exec(this.board[(invert)?(7-i):(i)][(invert)?(7-j):(j)])[1];
                switch(/.(.)/g.exec(this.board[(invert)?(7-i):(i)][(invert)?(7-j):(j)])[1]){
                    case 'r':
                        str += 'Rook';
                        break;
                    case 'n':
                        str += 'Knight';
                        break;
                    case 'b':
                        str += 'Bishop';
                        break;
                    case 'k':
                        str += 'King';
                        break;
                    case 'q':
                        str += 'Queen';
                        break;
                    case 'p':
                        str += 'Pawn';
                        break;
                    case 't':
                        str = str.substr(0,str.length-1);
                        str += 'tile';
                        break;
                }
                str += ':';
            }
            str += "  "+(8-i)+"\n";
        }
        str += "| A | B | C | D | E | F | G | H |";
        return str;
    }
}

class chessai {
    constructor(){

    }
}

class chessGameManager {
    constructor(client){
        this.games = [];
        this.client = client;
        this.checkEmojis();
    }
    checkEmojis(){
        var guilds = this.client.guilds.array();
        for(var i = 0; i < guilds.length; i++){
            if(!guilds[i].emojis.find('name','chess_black_bRook')){guilds[i].createEmoji('./chess/black/bRook.png', 'chess_black_bRook');}
            if(!guilds[i].emojis.find('name','chess_black_bKnight')){guilds[i].createEmoji('./chess/black/bKnight.png', 'chess_black_bKnight');}
            if(!guilds[i].emojis.find('name','chess_black_bBishop')){guilds[i].createEmoji('./chess/black/bBishop.png', 'chess_black_bBishop');}
            if(!guilds[i].emojis.find('name','chess_black_bKing')){guilds[i].createEmoji('./chess/black/bKing.png', 'chess_black_bKing');}
            if(!guilds[i].emojis.find('name','chess_black_bQueen')){guilds[i].createEmoji('./chess/black/bQueen.png', 'chess_black_bQueen');}
            if(!guilds[i].emojis.find('name','chess_black_bPawn')){guilds[i].createEmoji('./chess/black/bPawn.png', 'chess_black_bPawn');}
            if(!guilds[i].emojis.find('name','chess_black_tile')){guilds[i].createEmoji('./chess/black/tile.png', 'chess_black_tile');}
            if(!guilds[i].emojis.find('name','chess_black_wRook')){guilds[i].createEmoji('./chess/black/wRook.png', 'chess_black_wRook');}
            if(!guilds[i].emojis.find('name','chess_black_wKnight')){guilds[i].createEmoji('./chess/black/wKnight.png', 'chess_black_wKnight');}
            if(!guilds[i].emojis.find('name','chess_black_wBishop')){guilds[i].createEmoji('./chess/black/wBishop.png', 'chess_black_wBishop');}
            if(!guilds[i].emojis.find('name','chess_black_wKing')){guilds[i].createEmoji('./chess/black/wKing.png', 'chess_black_wKing');}
            if(!guilds[i].emojis.find('name','chess_black_wQueen')){guilds[i].createEmoji('./chess/black/wQueen.png', 'chess_black_wQueen');}
            if(!guilds[i].emojis.find('name','chess_black_wPawn')){guilds[i].createEmoji('./chess/black/wPawn.png', 'chess_black_wPawn');}
            if(!guilds[i].emojis.find('name','chess_white_bRook')){guilds[i].createEmoji('./chess/white/bRook.png', 'chess_white_bRook');}
            if(!guilds[i].emojis.find('name','chess_white_bKnight')){guilds[i].createEmoji('./chess/white/bKnight.png', 'chess_white_bKnight');}
            if(!guilds[i].emojis.find('name','chess_white_bBishop')){guilds[i].createEmoji('./chess/white/bBishop.png', 'chess_white_bBishop');}
            if(!guilds[i].emojis.find('name','chess_white_bKing')){guilds[i].createEmoji('./chess/white/bKing.png', 'chess_white_bKing');}
            if(!guilds[i].emojis.find('name','chess_white_bQueen')){guilds[i].createEmoji('./chess/white/bQueen.png', 'chess_white_bQueen');}
            if(!guilds[i].emojis.find('name','chess_white_bPawn')){guilds[i].createEmoji('./chess/white/bPawn.png', 'chess_white_bPawn');}
            if(!guilds[i].emojis.find('name','chess_white_tile')){guilds[i].createEmoji('./chess/white/tile.png', 'chess_white_tile');}
            if(!guilds[i].emojis.find('name','chess_white_wRook')){guilds[i].createEmoji('./chess/white/wRook.png', 'chess_white_wRook');}
            if(!guilds[i].emojis.find('name','chess_white_wKnight')){guilds[i].createEmoji('./chess/white/wKnight.png', 'chess_white_wKnight');}
            if(!guilds[i].emojis.find('name','chess_white_wBishop')){guilds[i].createEmoji('./chess/white/wBishop.png', 'chess_white_wBishop');}
            if(!guilds[i].emojis.find('name','chess_white_wKing')){guilds[i].createEmoji('./chess/white/wKing.png', 'chess_white_wKing');}
            if(!guilds[i].emojis.find('name','chess_white_wQueen')){guilds[i].createEmoji('./chess/white/wQueen.png', 'chess_white_wQueen');}
            if(!guilds[i].emojis.find('name','chess_white_wPawn')){guilds[i].createEmoji('./chess/white/wPawn.png', 'chess_white_wPawn');}
        }
    }
    addGame(channel, user){
        this.games[this.games.length] = new chessGame(channel, user, this.games.length);
        
    }
}

module.exports = chessGameManager;