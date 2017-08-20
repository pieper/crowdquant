var CrowdViewer = (function () {
  var $window = $(window);
  var $viewer = $('.viewer-wrapper');
  var $overlay = $('.loading-overlay');
  var $element;

  return {
    getNextCase: function (seriesUID) {
      $overlay.removeClass('invisible').addClass('loading');

      var handleCase = function (error, imagesIds) {
        if (error) {
          console.error(error);

          $overlay.addClass('invisible');
          alert('There was an error fetching the case\'s images... Please wait a moment until you try to get the next case.');

          return;
        }
        Tools.initTools(imagesIds, $element);
        Commands.initCommands($element);

        cornerstone.loadImage(imagesIds[0]).then(function (image) {
          cornerstone.displayImage($element, image);
        });

        $overlay.removeClass('loading').addClass('invisible');
      }

      if (seriesUID) {
        console.log('getting ', seriesUID);
        Files.getTCIACase(seriesUID, handleCase);
      } else {
        Files.getCaseImages(handleCase);
      }

    },
    initViewer: function (seriesUID) {
      $element = $('#conerstoneViewport')[0];

      Menu.init();

      $viewer.removeClass('invisible');

      $window.on('resize', function () { return cornerstone.resize($element, true); });

      cornerstone.enable($element);

      CrowdViewer.getNextCase(seriesUID);
    }
  };
})();
