# nodejs-rekognition
Node.js to control AWS rekognition.

Inspired from Donnie Prakoso's python work at https://github.com/donnieprakoso/Husky-Not-Husky, re-code in NodeJS. 
The datasets for dog breeds was taken from [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/) — amazingly provided by Stanford University — and only including Siberian Husky and Alaskan Malamute — to minimize training time required for Amazon Rekognition Custom Labels to complete.

---
## How to use
Code structure
### Start API
```
node index --arn=[arn-model] start
```

### Stop API
```
node index --arn=[arn-model] stop
```

### Detect API
```
node index --arn=[arn-model] --bucket=[bucket-name] --path=[s3-path] detect
```
---
## Example
### Start API
```
node index --arn=arn:aws:rekognition:us-west-2:xxxxxxxxxxx:project/rekog1/version/rekog1.2020-02-19T16.21.12/1582105927800 start
```

### Stop API
```
node index --arn=arn:aws:rekognition:us-west-2:xxxxxxxxxxx:project/rekog1/version/rekog1.2020-02-19T16.21.12/1582105927800 stop
```

### Detect API
```
node index --arn=arn:aws:rekognition:us-west-2:xxxxxxxxxxx:project/rekog1/version/rekog1.2020-02-19T16.21.12/1582105927800 --bucket=HuskyImages --path=datasets/example-images/malamute.jpg detect
```

---
## Expected Result
### Start API
```
{ Status: 'STARTING' }
```
### Stop API
```
{ Status: 'STOPPING' }
```

### Detect API
```
{ CustomLabels: [ { Name: 'Siberian-Husky', Confidence: 100 } ] }
```
