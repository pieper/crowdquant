var Connector = (function () {
  const mockData = {
    "name": "default case",
    "urls": [
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.366.0.dcm",
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.367.0.dcm",
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.368.0.dcm",

    /*
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.369.0.dcm",
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.370.0.dcm",
      "https://s3.amazonaws.com/IsomicsPublic/SampleData/MRHead/oneseries/1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.371.0.dcm"
      */
    ]
  };

  return {
    getCase: function (callback) {
      callback(null, mockData);
    }
  }

})();
