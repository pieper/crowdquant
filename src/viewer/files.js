var Files = (function () {
  var filesDownloaded = 0;
  var files;

  return {
    getFile: function (callback, numberOfFiles) {
      return function(url, index) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function(event) {
          var arrayBuffer = request.response;

          if (arrayBuffer) {
            try {
              files[index] = new Blob([arrayBuffer], { type: 'application/dicom' });

              filesDownloaded++;

              if (filesDownloaded === numberOfFiles) {
                callback(null)
              }
            } catch (error) {
              callback(error);
            }
          }
        };

        request.send(null);
      }
    },
    getCaseImages: function (callback) {
      var $overlay = $('.loading-overlay');
      $overlay.addClass('loading');
      $overlay.removeClass('invisible');

      filesDownloaded = 0;

      var handleCaseData = function (error, caseStudy) {
        if (error) {
          return callback(error);
        }

        if (caseStudy && caseStudy.urls) {
          var numberOfFiles = caseStudy.urls.length;
          var handleImages = function (imgError) {
            if (imgError) {
              return callback(imgError);
            }

            $overlay.addClass('invisible');
            $overlay.removeClass('loading');

            callback(null, files.map(cornerstoneWADOImageLoader.wadouri.fileManager.add));
          }

          files = new Array(numberOfFiles);

          caseStudy.urls.map(Files.getFile(handleImages, caseStudy.urls.length));
        }
      }

      Connector.getCase(handleCaseData);
    },
    getTCIACase: function (seriesUID, callback) {
      var $overlay = $('.loading-overlay');
      $overlay.addClass('loading');
      $overlay.removeClass('invisible');

      filesDownloaded = 0;

      var dc0 = new DICOMZero();
      var tcia = new TCIA();

      tcia.images(seriesUID).then(arrayBuffer => {
        dc0.extractFromZipArrayBuffer(arrayBuffer, function() {
          dc0.datasets.sort(function(a,b) {
            return (Number(a.InstanceNumber)-Number(b.InstanceNumber));
          });
          dc0.viewer = new Viewer(dc0.datasets);

          cornerstone.registerImageLoader('dcmjs', dc0.viewer.dcmjsImageLoader.bind(dc0.viewer));
          var imageIds = [];
          for (let index = 0; index < this.datasets.length; index++) {
            let imageId = 'dcmjs://'+index;
            imageIds.push(imageId);
          }
          callback(null, imageIds);
        });
      });
    }
  };
})();
