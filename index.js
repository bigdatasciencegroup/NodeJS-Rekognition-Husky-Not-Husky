const yargs = require('yargs');
const AWS = require('aws-sdk');
let command = yargs.argv._[0];
let param = yargs.argv;

AWS.config.update({
    region: 'us-west-2'
});

const rekognition = new AWS.Rekognition();

// =============== command =====================
if (command === 'start') {
    start(param.arn)
}
else if (command === 'stop') {
    stop(param.arn)
}
else if (command === 'detect') {
    detect(param.arn, param.bucket, param.path)
}

// ========================= functions ===========================
function start(arn) {
    let params = {
        ProjectVersionArn: arn,
        MinInferenceUnits: 1
    };

    rekognition.startProjectVersion(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}

function stop(arn) {
    let params = {
        ProjectVersionArn: arn,
    };

    rekognition.stopProjectVersion(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}

function detect(arn, bucket, path) {
    let params = {
        Image: {
            S3Object: {
                Bucket: bucket,
                Name: path
            }
        },
        ProjectVersionArn: arn,
        MinConfidence: 80
    };
    rekognition.detectCustomLabels(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}
