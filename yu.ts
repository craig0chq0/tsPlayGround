let GameSet: {
    GAME_RULE_NORMAL: 0x00,			    //非打枪模式;0000 0000
    GAME_RULE_DOUBLE: 0x01,			    //打枪翻倍模式;0000 0001
    GAME_RULE_JOKER: 0X02,			    //带王牌;0000 0010
    GAME_RULE_ROB_BANKER: 0x04,            //抢庄模式 0000 0100
    GAME_RULE_SPECIAL: 0x08,               //特殊牌型0000 1000
    GAME_RULE_MA_1: 0x10,			//带马牌;0001 0000
    GAME_RULE_MA_2: 0x20,			//带马牌;0010 0000
    GAME_RULE_MA_3: 0x40		//带马牌;0100 0000
}
let gameset = GameSet.GAME_RULE_NORMAL ;
let bool = (gameset & GameSet.GAME_RULE_JOKER) === GameSet.GAME_RULE_JOKER;
function asd() {
    if ((gameset & GameSet.GAME_RULE_JOKER) === GameSet.GAME_RULE_JOKER) {
        return true
    }
    return false
}
console.log(gameset);