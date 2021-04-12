import S3 from 'aws-sdk/clients/s3';
// import config from '../config.json';
import {AWS_REGION, LOCAL_STORAGE_KEYS} from '../components/Constants';

const S3Instance = () => {
    let aws = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.AWS));
    // AWS.config.update({
    //     region: AWS_REGION,
    //     credentials: new AWS.Credentials(aws.AccessKeyId, aws.SecretAccessKey, aws.SessionToken),
    // });
    return new S3({
        region: AWS_REGION,
        // credentials: new Credentials(aws.AccessKeyId, aws.SecretAccessKey, aws.SessionToken),
        credentials: {
            accessKeyId: aws.AccessKeyId,
            secretAccessKey: aws.SecretAccessKey,
            sessionToken: aws.SessionToken,
        },
        useAccelerateEndpoint: true,
    });
}

export const S3Upload = (upload) => {
    // let upload = {
    //     Key: path,
    //     Body: file,
    //     Bucket: ''
    // }
    console.debug('{upload}-----> ', upload);

    return S3Instance()
        .upload(upload)
        // .on('httpUploadProgress', (progress) => {
        //     if (progressCallback) progressCallback(progress);
        // })
        .promise();
};
