const AWS = require("aws-sdk")
const {AWS_ACCESS_KEY , AWS_SECRET_KEY} = require("./conf");

AWS.config.update({
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY ,
    region: 'ap-south-1',
    signatureVersion : 'v4'  
});

let s3 = new AWS.S3({signatureVersion: 'v4'});

module.exports = s3