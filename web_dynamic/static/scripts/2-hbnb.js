$(document).ready(function () {
  
  const amenities = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenities[$(this).attr('data-name')];
    }

    const amenitiesList = Object.keys(amenities);
    $('.amenities h4').text(amenitiesList.sort().join(','));
  });
});
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
   if (textStatus === 'success') {
     if (data.status === 'OK') {
       $('#api_status').addClass('available');
     } else {
       $('#api_status').removeClass('available');
     }
   }
 });
