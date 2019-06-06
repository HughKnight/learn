
var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(function (req,res,next){
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH,DELETE');
      res.setHeader('ACcess-Control-Allow-Header','X-Requested-With,content-type,X-Session-Token');
      res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
      next();
    })
    .use('/goods',function(req,res,next){
      const data = {
        "code":"200",
        "msg":"success",
        "result":[
           {
            "Type":"fruit",
            "icon":"el-icon-s-check",
            "List":[
              {
                "name":"香蕉",
                "price":"19.99",
                "oldprice":"36.00"
              },
              {
                "name":"樱桃",
                "price":"39.99",
                "oldprice":"50.00"
              },
              {
                "name":"红富士苹果",
                "price":"9.99",
                "oldprice":"16.00"
              },
              {
                "name":"蓝莓",
                "price":"29.99",
                "oldprice":"35.00"
              },

            ],
          },
          {
            "Type":"Vegetables",
            "icon":"el-icon-eleme",
            "List":[
              {
                "name":"草菇",
                "price":"1.99",
                "oldprice":"3.00"
              },
              {
                "name":"南瓜",
                "price":"9.99",
                "oldprice":"12.00"
              },
              {
                "name":"油菜",
                "price":"0.99",
                "oldprice":"2.00"
              },
            ],
          },
          {
            "Type":"Dairy",
            "icon":"el-icon-s-open",
            "List":[
              {
                "name":"伊利",
                "price":"49.99",
                "oldprice":"55.00"
              },
              {
                "name":"蒙牛",
                "price":"28.99",
                "oldprice":"34.00"
              },
            ]
          },

        ]
      }
      res.end(JSON.stringify(data));
      next();
    }).use('/info',function(req,res,next){
     const data = { 
       'code':'000000',
       'msg':'success',
       result:[
        {
           "name":"Hurry",
           "star":"天蝎座"
        },
        {
          "name":"Emiy",
          "star":"狮子座"
       },
       {
        "name":"Janny",
        "star":"白羊座"
        },
        {
          "name":"Rose",
          "star":"射手座"
       },
       ]
     } 
      res.end(JSON.stringify(data));
      next();
    })
    .listen(8888)
    
    console.log("port 8888")
