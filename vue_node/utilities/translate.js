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
    // var res = transTable.departTrans.filter(function(a){
    //     return a.BMMC = '审判庭'
    // })

    // console.log(list);

    for (keys in list) {
        console.log(list[keys].YHBM +' '+ list[keys].PXH);
        for (keys in transTable.departTrans) {
            let content = transTable.departTrans[keys]


            // console.log(list[keys].YHBM + '  ' + list[keys].YHXM);
            if (content.BMDM === list[keys].YHBM) {
                list[keys].YHBM = content.BMMC
            }

            //  content = JSON.stringify(content)
            //  content.filter(function (ret) {
            //     return ret.BMMC == '审判庭'
            //    })
        }

    }
    // console.log(list);



    // var res = ''
    //  for (keys in transTable.departTrans){
    //      let content = transTable.departTrans[keys]
    //     //  console.log(content.BMMC);
    //     if(content.BMMC ==='业务庭'){
    //         res = content.BMDM
    //     }

    //     //  content = JSON.stringify(content)
    //     //  content.filter(function (ret) {
    //     //     return ret.BMMC == '审判庭'
    //     //    })
    //  } 

    //  console.log(res);

    //  console.log(transTable.departTrans);
    //  console.log(transTable.genderTrans);

}




module.exports = {
    listTrans
}