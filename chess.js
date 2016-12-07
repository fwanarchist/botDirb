
class chessGame {
    constructor(guild, player1, player2){
        if(!player2){player2 = guild.client}

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
        var guilds = client.guilds.array();
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
}

module.exports = chessGameManager;