(function() {
  var $hour, $humanTime, $minutes, $seconds, clockHeight, formatTime, getTime, renderTime, t, updateTime;

  $seconds = $('.seconds .time');

  $minutes = $('.minutes .time');

  $hour = $('.hour .time');

  $humanTime = $('#human-time');

  clockHeight = $('#bar-clock .hour').height();

  getTime = function() {
    var dateTime;
    dateTime = new Date();
    return {
      hour: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds()
    };
  };

  renderTime = function($el, time, duration) {
    return $el.height(function() {
      return (clockHeight * time) / duration;
    });
  };

  formatTime = function(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  updateTime = function(time) {
    renderTime($seconds, time.seconds, 59);
    renderTime($minutes, time.minutes, 59);
    renderTime($hour, time.hour, 23);
    return $humanTime.text(function() {
      var separator;
      separator = ' ';
      return formatTime(time.hour) + separator + formatTime(time.minutes) + separator + formatTime(time.seconds);
    });
  };

  t = setInterval(function() {
    return updateTime(getTime());
  }, 1000);

}).call(this);
