var axios = require("axios");
var fs = require("fs");
var nodeschedule = require("node-schedule");
var FormData = require('form-data');
axios.defaults.withCredentials=true
let num = 298526;
var hotListUrl = "http://hr.asiainfo-sec.com/pms/assess/query/assessperform/privatekey?randomJsessionid=0.70931044736197";
var result = []

var option = {
    headers: {
      'Accept': 'application/json, text/javascript',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Host': 'hr.asiainfo-sec.com',
      'Origin': 'http://hr.asiainfo-sec.com',
      'cookie': 'JSESSIONID=124011A25D81C8959107DD20522730D6; API_TOKEN=05656447B69E22576FB805DB3CAD5D10',
    }

}

function parseData(data) {
    realtime = [data.data]
    //对于数组对象要这么循环取值
    realtime.forEach(function (v) {
        var employeeName = v.employeeName;
        var superiorNumber = v.superiorNumber;
        var superiorName = v.superiorName;
        var assessPersonId = v.assessPersonId;
        var personId = v.personId;
        var assessResult = v.assessResult;
        var assessRecode = v.assessRecode;
        var assessDes = v.assessDes
        result.push({
          employeeName,
          superiorNumber,
          superiorName,
          assessPersonId,
          personId,
          assessResult,
          assessRecode,
          assessDes,
        })

    })
}

function getHotList(datas) {
    return new Promise(((resolve, reject) => {
      var config = {
        method: 'post',
        url: hotListUrl,
        headers: {
          'Accept': 'application/json, text/javascript',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Host': 'hr.asiainfo-sec.com',
          'Origin': 'http://hr.asiainfo-sec.com',
          'cookie': 'JSESSIONID=124011A25D81C8959107DD20522730D6; API_TOKEN=05656447B69E22576FB805DB3CAD5D10',
        },
        data : datas
      };
        axios(config).then(function (resposne) {
          if(resposne.data && resposne.data.errorCode == '0'){
            parseData(resposne.data)
            result.length ? resolve(result) : reject("err")
          }else{
            reject("err")
          }
           
        }).catch(function (err) {
            console.log(err)
        }).finally(function () {
            console.log("完成一次抓取")

        })

    }))


}

nodeschedule.scheduleJob("*/2 * * * * *", async function () {

    try {
      const nums = num++;
      console.log(nums,'数字-------》')
        var res = await getHotList({assessPersonId:nums});
        if(nums == 298726){process.exit()}
        if(nums  == 298725){
          fs.open("result4.json", "a", function (err1, fd) {
            if (!err1) {
                fs.writeFile(fd, JSON.stringify(res), function (err2) {
                    if (!err2) {
                        fs.close(fd, function (err3) {
                            if (!err3) {
                                console.log("关闭文件成功")
                            } else {
                                console.log("关闭文件失败")
                            }

                        })


                    } else {
                        console.log("写入文件失败")
                    }

                })


            } else {
                console.log("打开文件失败")
            }

        })
        }
        

    } catch (err) {
        console.log(err)
    }
})