const mysql = require('./untity-mysql')


var transTable = {
    departTrans: {

    },
    genderTrans: {

    }
}



async function listTrans(list) {
    transTable.departTrans = await mysql.query(`SELECT * FROM t_depart ;`)
    transTable.genderTrans = await mysql.query(`SELECT * FROM ts_bzdm ;`)

    departRender(list)
    genderRender(list)
    birthRender(list)

    return list
}


//部门翻译
function departRender(lists) {
    //
    for (keys in lists) {
        for (key in transTable.departTrans) {
            let content = transTable.departTrans[key]
            if (content.BMDM === lists[keys].YHBM) {
                lists[keys].YHBM = content.BMMC
            }
        }
    }
}

//性别翻译
function genderRender(lists) {

    for (keys in lists) {
        for (key in transTable.genderTrans) {
            let content = transTable.genderTrans[key]
            if (content.CODE === lists[keys].YHXB) {
                lists[keys].YHXB = content.MC
            }
        }
    }
}

//出生日期翻译
function birthRender(lists) {
    for (keys in lists) {
        let content = lists[keys].CSRQ
        lists[keys].CSRQ = content.substring(0, 4) + '-' + content.substring(4, 6) + '-' + content.substring(6, 8);
    }
}

async function insertTrans(list) {
    transTable.departTrans = await mysql.query(`SELECT * FROM t_depart where BMMC='${list.YHBM}';`)
    transTable.genderTrans = await mysql.query(`SELECT * FROM ts_bzdm where MC='${list.YHXB}';`)

    insert(list)
    
    return list
}

function insert(list) {
    list.YHBM = transTable.departTrans[0].BMDM;
    list.YHXB = transTable.genderTrans[0].CODE;
    list.CSRQ = list.CSRQ.substring(0, 4) + list.CSRQ.slice(5, 7) + list.CSRQ.slice(8, 10)
    return list
  }



module.exports = {
    listTrans,
    insertTrans
}