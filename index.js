const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.routes");
const postsRoutes = require("./routes/posts.routes");

app.use(bodyParser.json());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(3000, () => {
  console.log("I am ready to lisen you");
  
  
  //
  const { request } = require('express');
const { json } = require('express/lib/response');
const winston= require('winston');
const express = require ('express');
const router = express.Router();
//const logger = require('../controller/successlogger') 
const multer = require('multer');
const fs = require ('fs');
const {createLogger, transports,format,meta}= require('winston');
const { timeStamp } = require('console');
const decompress = require('decompress');
const bodyParser = require('body-parser');
const { url } = require('inspector');
expressWinston = require('express-winston');
const { combine, timestamp, label, prettyPrint ,printf} = format;
var jsonParser = bodyParser.json()
expressWinston = require('express-winston');
var urleccodedParser= bodyParser.urlencoded({extended: false});
const http=require('http');
let mydate = new Date();
let newFilename = "logs/" + "_" + mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate() + "-" + "success.log";
const {method,message}=request;

router.post('/post', jsonParser, (req,res)=>{
let url = req.protocol + ".//"+ req.get('host') +req.originalUrl;
     logger.info("Message : Sample API Calling");
      console.log("MESSAGE: Sample API Calling");
      console.log("URL:",(url));
      logger.info(url);
      console.log("HTTP_METHOD:",(req.method));
      logger.info(req.method);
      console.log("CLIENT IP ADDRESS:",(req.ip));
      logger.info(req.ip);
      console.log("HTTP_REQUEST_BODY:",(req.body));
      logger.info("HTTP_REQUEST_BODY:",(req.body));
      console.log("HTTP_STATUS_CODE:",(res.statusCode));
      logger.info(res.statusCode);
      console.log("HTTP_RESPONSE_MESSAGE:", (req.json,{"message":"Success"}));
      logger.info("HTTP_RESPONSE_MESSAGE:", (req.json,{"message":"Success"}));
      res.send("success");
  });
const logger = createLogger({
    transports:[
        new transports.File({
            filename:newFilename,
            level:'info',
            meta:true,
            colorize: true,
            format: combine(
             timestamp(),
            //  winston.format.printf(info => `${info.timestamp}  Message : ${info.message}
            //  ${info.timestamp}  Url : ${info.Url}
            //  ${info.timestamp}  Method : ${info.Method}
            //  ${info.timestamp}  HTTP_Request_Body : ${info. HTTP_Request_Body}
            //  ${info.timestamp}  HTTP_Response_Message : ${info. HTTP_Response_Message}
            //  ${info.timestamp}  HTTP_Response : ${info. HTTP_Response} `),
           
           winston.format.printf(info => {
           return `${info.timestamp}  level : ${info.level} , ${JSON.stringify(info.message)}`;
          
             })
             )
        })
      
    ]
  
});
module.exports = router;
  
  
  //const express = require ('express');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// const updateSuccessRoutes= require('./routes/updateSuccess');
// const updateErrorRoutes= require('./routes/updateError');
const clearSuccessRoutes= require('./routes/clearSuccess');

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000);
console.log("log details")
// app.use('/user', updateSuccessRoutes);
// app.use('/user',updateErrorRoutes);
app.use('/user',clearSuccessRoutes);

});
