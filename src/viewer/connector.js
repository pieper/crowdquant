const mockUrl = 'http://localhost:4000/mock.json';

const mockData = {
  "name": "default case",
  "urls": [
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.366.0.dcm",
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.367.0.dcm",
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.368.0.dcm",
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.369.0.dcm",
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.370.0.dcm",
    "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.371.0.dcm"
  ]
};

export default {
  getCase() {
    return new Promise(function (resolve, reject) {
      const successHandler = (response) => {
        resolve(response);
      };
      const errorHandler = (error) => {
        if (error) {
          console.error(error);
        }

        reject(error);
      };
      if (mockData) {
        resolve(mockData);
      } else {
        $.ajax(mockUrl).then(successHandler);
      }
    });
  }
};
