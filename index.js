module.exports = function (options) {
  options = options || {}

  return function(seconds) {
    var parsed = {
      years: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0
    }

    // Years
    if (options.years !== false) {
      parsed.years = ~~(seconds / 60 / 60 / 24 / 7 / 52)
      seconds -= parsed.years * 60 * 60 * 24 * 7 * 52
    }

    // Weeks
    if (options.weeks !== false) {
      parsed.weeks = ~~(seconds / 60 / 60 / 24 / 7)
      seconds -= parsed.weeks * 60 * 60 * 24 * 7
    }

    // Days
    if (options.days !== false) {
      parsed.days = ~~(seconds / 60 / 60 / 24)
      seconds -= parsed.days * 60 * 60 * 24
    }

    // Hours
    if (options.hours !== false) {
      parsed.hours = ~~(seconds / 60 / 60)
      seconds -= parsed.hours * 60 * 60
    }

    // Minutes
    if (options.minutes !== false) {
      parsed.minutes = ~~(seconds / 60)
      seconds -= parsed.minutes * 60
    }

    // Seconds
    parsed.seconds = seconds

    return parsed
  }
}
