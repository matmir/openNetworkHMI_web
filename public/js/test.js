
import {jsError} from './jsError.js';
import {parser} from './onh/parser/parser.js';
import {parserMultiCMD} from './onh/parser/parserMultiCMD.js';
import {actionButton} from './onh/components/buttons/actionButton.js';
import {exitButton} from './onh/components/buttons/exitButton.js';

// Page loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // -------------------------------- Driver 1 elemnts ---------------------------------------------------------------------------------------------
    // BIT functions
    let D1_getBitBTN = new actionButton('D1_GET_BIT', parser.CMD.GET_BIT, 'D1_Bit1', function(val) {
        addReturnValue("reply_D1_GET_BIT", val);
    });
    let D1_setBitBTN = new actionButton('D1_SET_BIT', parser.CMD.SET_BIT, 'D1_Bit1', null, null, function() {
        executeBtn(D1_setBitBTN);
    });
    let D1_invertBitBTN = new actionButton('D1_INVERT_BIT', parser.CMD.INVERT_BIT, 'D1_Bit1', null, null, function() {
        executeBtn(D1_invertBitBTN);
    });
    let D1_resetBitBTN = new actionButton('D1_RESET_BIT', parser.CMD.RESET_BIT, 'D1_Bit1', null, null, function() {
        executeBtn(D1_resetBitBTN);
    });

    // BITS functions
    let D1_getBitsBTN = new actionButton('D1_GET_BITS', parser.CMD.GET_BITS, ['D1_Bit1', 'D1_InBit1', 'D1_Bit2'], function(val) {
        addReturnValue("reply_D1_GET_BITS", val);
    });
    let D1_setBitsBTN = new actionButton('D1_SET_BITS', parser.CMD.SET_BITS, ['D1_Bit1', 'D1_Bit2'], null, null, function() {
        executeBtn(D1_setBitsBTN);
    });

    // BYTE functions
    let D1_getByteBTN = new actionButton('D1_GET_BYTE', parser.CMD.GET_BYTE, 'D1_Byte1', function(val) {
        addReturnValue("reply_D1_GET_BYTE", val);
    });
    let D1_writeByteBTN = new actionButton('D1_WRITE_BYTE', parser.CMD.WRITE_BYTE, 'D1_Byte1', null, null, function() {
        executeBtn(D1_writeByteBTN, 144);
    });

    // WORD functions
    let D1_getWordBTN = new actionButton('D1_GET_WORD', parser.CMD.GET_WORD, 'D1_Word1', function(val) {
        addReturnValue("reply_D1_GET_WORD", val);
    });
    let D1_writeWordBTN = new actionButton('D1_WRITE_WORD', parser.CMD.WRITE_WORD, 'D1_Word1', null, null, function() {
        executeBtn(D1_writeWordBTN, 40875);
    });

    // DWORD functions
    let D1_getDWordBTN = new actionButton('D1_GET_DWORD', parser.CMD.GET_DWORD, 'D1_DWord1', function(val) {
        addReturnValue("reply_D1_GET_DWORD", val);
    });
    let D1_writeDWordBTN = new actionButton('D1_WRITE_DWORD', parser.CMD.WRITE_DWORD, 'D1_DWord1', null, null, function() {
        executeBtn(D1_writeDWordBTN, 327683);
    });

    // INT functions
    let D1_getIntBTN = new actionButton('D1_GET_INT', parser.CMD.GET_INT, 'D1_INT1', function(val) {
        addReturnValue("reply_D1_GET_INT", val);
    });
    let D1_writeIntBTN = new actionButton('D1_WRITE_INT', parser.CMD.WRITE_INT, 'D1_INT1', null, null, function() {
        executeBtn(D1_writeIntBTN, -387891);
    });

    // REAL functions
    let D1_getRealBTN = new actionButton('D1_GET_REAL', parser.CMD.GET_REAL, 'D1_Real1', function(val) {
        addReturnValue("reply_D1_GET_REAL", val);
    });
    let D1_writeRealBTN = new actionButton('D1_WRITE_REAL', parser.CMD.WRITE_REAL, 'D1_Real1', null, null, function() {
        executeBtn(D1_writeRealBTN, -8087.47);
    });

    // -------------------------------- Driver 2 elemnts ---------------------------------------------------------------------------------------------
    // BIT functions
    let D2_getBitBTN = new actionButton('D2_GET_BIT', parser.CMD.GET_BIT, 'D2_Bit1', function(val) {
        addReturnValue("reply_D2_GET_BIT", val);
    });
    let D2_setBitBTN = new actionButton('D2_SET_BIT', parser.CMD.SET_BIT, 'D2_Bit1', null, null, function() {
        executeBtn(D2_setBitBTN);
    });
    let D2_invertBitBTN = new actionButton('D2_INVERT_BIT', parser.CMD.INVERT_BIT, 'D2_Bit1', null, null, function() {
        executeBtn(D2_invertBitBTN);
    });
    let D2_resetBitBTN = new actionButton('D2_RESET_BIT', parser.CMD.RESET_BIT, 'D2_Bit1', null, null, function() {
        executeBtn(D2_resetBitBTN);
    });

    // BITS functions
    let D2_getBitsBTN = new actionButton('D2_GET_BITS', parser.CMD.GET_BITS, ['D2_Bit1', 'D2_InBit1', 'D2_Bit2'], function(val) {
        addReturnValue("reply_D2_GET_BITS", val);
    });
    let D2_setBitsBTN = new actionButton('D2_SET_BITS', parser.CMD.SET_BITS, ['D2_Bit1', 'D2_Bit2'], null, null, function() {
        executeBtn(D2_setBitsBTN);
    });

    // BYTE functions
    let D2_getByteBTN = new actionButton('D2_GET_BYTE', parser.CMD.GET_BYTE, 'D2_Byte1', function(val) {
        addReturnValue("reply_D2_GET_BYTE", val);
    });
    let D2_writeByteBTN = new actionButton('D2_WRITE_BYTE', parser.CMD.WRITE_BYTE, 'D2_Byte1', null, null, function() {
        executeBtn(D2_writeByteBTN, 143);
    });

    // WORD functions
    let D2_getWordBTN = new actionButton('D2_GET_WORD', parser.CMD.GET_WORD, 'D2_Word1', function(val) {
        addReturnValue("reply_D2_GET_WORD", val);
    });
    let D2_writeWordBTN = new actionButton('D2_WRITE_WORD', parser.CMD.WRITE_WORD, 'D2_Word1', null, null, function() {
        executeBtn(D2_writeWordBTN, 40874);
    });

    // DWORD functions
    let D2_getDWordBTN = new actionButton('D2_GET_DWORD', parser.CMD.GET_DWORD, 'D2_DWord1', function(val) {
        addReturnValue("reply_D2_GET_DWORD", val);
    });
    let D2_writeDWordBTN = new actionButton('D2_WRITE_DWORD', parser.CMD.WRITE_DWORD, 'D2_DWord1', null, null, function() {
        executeBtn(D2_writeDWordBTN, 327682);
    });

    // INT functions
    let D2_getIntBTN = new actionButton('D2_GET_INT', parser.CMD.GET_INT, 'D2_INT1', function(val) {
        addReturnValue("reply_D2_GET_INT", val);
    });
    let D2_writeIntBTN = new actionButton('D2_WRITE_INT', parser.CMD.WRITE_INT, 'D2_INT1', null, null, function() {
        executeBtn(D2_writeIntBTN, -387892);
    });

    // REAL functions
    let D2_getRealBTN = new actionButton('D2_GET_REAL', parser.CMD.GET_REAL, 'D2_Real1', function(val) {
        addReturnValue("reply_D2_GET_REAL", val);
    });
    let D2_writeRealBTN = new actionButton('D2_WRITE_REAL', parser.CMD.WRITE_REAL, 'D2_Real1', null, null, function() {
        executeBtn(D2_writeRealBTN, -5087.47);
    });

    // -------------------------------- Driver 3 elemnts ---------------------------------------------------------------------------------------------
    // BIT functions
    let D3_getBitBTN = new actionButton('D3_GET_BIT', parser.CMD.GET_BIT, 'D3_Bit1', function(val) {
        addReturnValue("reply_D3_GET_BIT", val);
    });
    let D3_setBitBTN = new actionButton('D3_SET_BIT', parser.CMD.SET_BIT, 'D3_Bit1', null, null, function() {
        executeBtn(D3_setBitBTN);
    });
    let D3_invertBitBTN = new actionButton('D3_INVERT_BIT', parser.CMD.INVERT_BIT, 'D3_Bit1', null, null, function() {
        executeBtn(D3_invertBitBTN);
    });
    let D3_resetBitBTN = new actionButton('D3_RESET_BIT', parser.CMD.RESET_BIT, 'D3_Bit1', null, null, function() {
        executeBtn(D3_resetBitBTN);
    });

    // BITS functions
    let D3_getBitsBTN = new actionButton('D3_GET_BITS', parser.CMD.GET_BITS, ['D3_Bit1', 'D3_InBit1', 'D3_Bit2'], function(val) {
        addReturnValue("reply_D3_GET_BITS", val);
    });
    let D3_setBitsBTN = new actionButton('D3_SET_BITS', parser.CMD.SET_BITS, ['D3_Bit1', 'D3_Bit2'], null, null, function() {
        executeBtn(D3_setBitsBTN);
    });

    // BYTE functions
    let D3_getByteBTN = new actionButton('D3_GET_BYTE', parser.CMD.GET_BYTE, 'D3_Byte1', function(val) {
        addReturnValue("reply_D3_GET_BYTE", val);
    });
    let D3_writeByteBTN = new actionButton('D3_WRITE_BYTE', parser.CMD.WRITE_BYTE, 'D3_Byte1', null, null, function() {
        executeBtn(D3_writeByteBTN, 74);
    });

    // WORD functions
    let D3_getWordBTN = new actionButton('D3_GET_WORD', parser.CMD.GET_WORD, 'D3_Word1', function(val) {
        addReturnValue("reply_D3_GET_WORD", val);
    });
    let D3_writeWordBTN = new actionButton('D3_WRITE_WORD', parser.CMD.WRITE_WORD, 'D3_Word1', null, null, function() {
        executeBtn(D3_writeWordBTN, 21874);
    });

    // DWORD functions
    let D3_getDWordBTN = new actionButton('D3_GET_DWORD', parser.CMD.GET_DWORD, 'D3_DWord1', function(val) {
        addReturnValue("reply_D3_GET_DWORD", val);
    });
    let D3_writeDWordBTN = new actionButton('D3_WRITE_DWORD', parser.CMD.WRITE_DWORD, 'D3_DWord1', null, null, function() {
        executeBtn(D3_writeDWordBTN, 327002);
    });

    // INT functions
    let D3_getIntBTN = new actionButton('D3_GET_INT', parser.CMD.GET_INT, 'D3_INT1', function(val) {
        addReturnValue("reply_D3_GET_INT", val);
    });
    let D3_writeIntBTN = new actionButton('D3_WRITE_INT', parser.CMD.WRITE_INT, 'D3_INT1', null, null, function() {
        executeBtn(D3_writeIntBTN, -387192);
    });

    // REAL functions
    let D3_getRealBTN = new actionButton('D3_GET_REAL', parser.CMD.GET_REAL, 'D3_Real1', function(val) {
        addReturnValue("reply_D3_GET_REAL", val);
    });
    let D3_writeRealBTN = new actionButton('D3_WRITE_REAL', parser.CMD.WRITE_REAL, 'D3_Real1', null, null, function() {
        executeBtn(D3_writeRealBTN, -5287.47);
    });

    // -------------------------------- Driver 4 elemnts ---------------------------------------------------------------------------------------------
    // BIT functions
    let D4_getBitBTN = new actionButton('D4_GET_BIT', parser.CMD.GET_BIT, 'D4_Bit1', function(val) {
        addReturnValue("reply_D4_GET_BIT", val);
    });
    let D4_setBitBTN = new actionButton('D4_SET_BIT', parser.CMD.SET_BIT, 'D4_Bit1', null, null, function() {
        executeBtn(D4_setBitBTN);
    });
    let D4_invertBitBTN = new actionButton('D4_INVERT_BIT', parser.CMD.INVERT_BIT, 'D4_Bit1', null, null, function() {
        executeBtn(D4_invertBitBTN);
    });
    let D4_resetBitBTN = new actionButton('D4_RESET_BIT', parser.CMD.RESET_BIT, 'D4_Bit1', null, null, function() {
        executeBtn(D4_resetBitBTN);
    });

    // BITS functions
    let D4_getBitsBTN = new actionButton('D4_GET_BITS', parser.CMD.GET_BITS, ['D4_Bit1', 'D4_InBit1', 'D4_Bit2'], function(val) {
        addReturnValue("reply_D4_GET_BITS", val);
    });
    let D4_setBitsBTN = new actionButton('D4_SET_BITS', parser.CMD.SET_BITS, ['D4_Bit1', 'D4_Bit2'], null, null, function() {
        executeBtn(D4_setBitsBTN);
    });

    // BYTE functions
    let D4_getByteBTN = new actionButton('D4_GET_BYTE', parser.CMD.GET_BYTE, 'D4_Byte1', function(val) {
        addReturnValue("reply_D4_GET_BYTE", val);
    });
    let D4_writeByteBTN = new actionButton('D4_WRITE_BYTE', parser.CMD.WRITE_BYTE, 'D4_Byte1', null, null, function() {
        executeBtn(D4_writeByteBTN, 201);
    });

    // WORD functions
    let D4_getWordBTN = new actionButton('D4_GET_WORD', parser.CMD.GET_WORD, 'D4_Word1', function(val) {
        addReturnValue("reply_D4_GET_WORD", val);
    });
    let D4_writeWordBTN = new actionButton('D4_WRITE_WORD', parser.CMD.WRITE_WORD, 'D4_Word1', null, null, function() {
        executeBtn(D4_writeWordBTN, 21004);
    });

    // DWORD functions
    let D4_getDWordBTN = new actionButton('D4_GET_DWORD', parser.CMD.GET_DWORD, 'D4_DWord1', function(val) {
        addReturnValue("reply_D4_GET_DWORD", val);
    });
    let D4_writeDWordBTN = new actionButton('D4_WRITE_DWORD', parser.CMD.WRITE_DWORD, 'D4_DWord1', null, null, function() {
        executeBtn(D4_writeDWordBTN, 327666);
    });

    // INT functions
    let D4_getIntBTN = new actionButton('D4_GET_INT', parser.CMD.GET_INT, 'D4_INT1', function(val) {
        addReturnValue("reply_D4_GET_INT", val);
    });
    let D4_writeIntBTN = new actionButton('D4_WRITE_INT', parser.CMD.WRITE_INT, 'D4_INT1', null, null, function() {
        executeBtn(D4_writeIntBTN, -310192);
    });

    // REAL functions
    let D4_getRealBTN = new actionButton('D4_GET_REAL', parser.CMD.GET_REAL, 'D4_Real1', function(val) {
        addReturnValue("reply_D4_GET_REAL", val);
    });
    let D4_writeRealBTN = new actionButton('D4_WRITE_REAL', parser.CMD.WRITE_REAL, 'D4_Real1', null, null, function() {
        executeBtn(D4_writeRealBTN, -200.47);
    });

    // ---------------------------- Exit button -----------------------------
    let exitBtn = new exitButton('exitClient');

    // ---------------------------- Multi commands --------------------------
    let inputWORDS = new parserMultiCMD();
    inputWORDS.addCommand(parser.CMD_GET_WORD('D1_InWord1'));
    inputWORDS.addCommand(parser.CMD_GET_WORD('D2_InWord1'));
    inputWORDS.addCommand(parser.CMD_GET_WORD('D3_InWord1'));
    inputWORDS.addCommand(parser.CMD_GET_WORD('D4_InWord1'));

    function multi1Reply(reply) {
        addReturnValue('reply_MULTI_CMD_C1', reply[0]);
        addReturnValue('reply_MULTI_CMD_C2', reply[1]);
        addReturnValue('reply_MULTI_CMD_C3', reply[2]);
        addReturnValue('reply_MULTI_CMD_C4', reply[3]);
    }

    let inputINTS = new parserMultiCMD();
    inputINTS.addCommand(parser.CMD_GET_INT('D1_InInt1'));
    inputINTS.addCommand(parser.CMD_GET_INT('D2_InInt1'));
    inputINTS.addCommand(parser.CMD_GET_INT('D3_InInt1'));
    inputINTS.addCommand(parser.CMD_GET_INT('D4_InInt1'));

    function multi2Reply(reply) {
        addReturnValue('reply_MULTI_CMD_C1_I', reply[0]);
        addReturnValue('reply_MULTI_CMD_C2_I', reply[1]);
        addReturnValue('reply_MULTI_CMD_C3_I', reply[2]);
        addReturnValue('reply_MULTI_CMD_C4_I', reply[3]);
    }

    // ---------------------------- Common functions ------------------------
    function addReturnValue(elementName, val) {
        document.getElementById(elementName).innerHTML = val;
    }

    function executeBtn(btnObject, val = null) {
        if (val !== null) {
            btnObject.setTagValue(val);
        }
        btnObject.execute().catch(
            error => { jsError.add(error); }
        );
    }

    // Click multicommand 1 button
    document.getElementById('test_MULTI_CMD').onclick = function() {
        inputWORDS.execute().then(
            reply => { multi1Reply(reply); },
            error => { jsError.add(error); }
        );
    };

    // Click multicommand 2 button
    document.getElementById('test_MULTI_CMD_I').onclick = function() {
        inputINTS.execute().then(
            reply => { multi2Reply(reply); },
            error => { jsError.add(error); }
        );
    };
    
});