# crowdquant
A responsive stripped down viewer for crowdsourcing measurements.

## Features
Tools available:
* Window Level;
* Length;
* Pan;
* Zoom;
* Clear (For the current image).

## Install
You have to install all projet's dependecies. Todo so execute this command in this repository root folder:
```
$ npm install
```

## Run
After you have installed everything, execute this command in this repository root folder:
```
$ npm start
```

We are lifting a server to run this viewer because of `cornerstoneWADOImageLoader`. This package tries to load some of its depedencies using a hard code path that, if we open the `index.html` file with a browser, we have some load issues because of how the paths will be resolved. Using a server we create a virtual path which will solve this issue.

## DICOM Server
This exaple expects a server running on `http://localhost:4000` which provides a file named *mock.json*. This JSON will contain a list of DICOM URLs to be downloaded by this viewer. Example below:
```
{
  "name": "default case",
  "urls": [
    "http://localhost:4000/1.dcm",
    "http://localhost:4000/2.dcm",
    "http://localhost:4000/3.dcm",
    "http://localhost:4000/4.dcm",
    "http://localhost:4000/5.dcm"
  ]
}
```
This URL is hard coded at `/src/viewer/connector.js` on line 2. Please change this line to access the right server.

This viewer expected that each time we request for the *mock.json* file we have a different set of DICOM files to evaluate.

# What is missing?
* The login/logout features are mocked. We have in place a dumb feature to just have the feel of a login being done. Any email and password will suffice for now;
* Submitting measurements is mocked too. This is also another simple code to just mock the feel of submitting the measurements;
* A better way to define which server will provide our DICOMs;
* Tests.