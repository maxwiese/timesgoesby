class Time {

  appendOh(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return n
    }
  }

  constructor(timezone = +0) {
    this.timezone = timezone;

    this.hours = this.appendOh(new Date().getHours());
    this.minutes = this.appendOh(new Date().getMinutes());
    this.seconds = this.appendOh(new Date().getSeconds());

    this.sHours = this.appendOh(new Date().getHours()).toString();
    this.sMinutes = this.appendOh(new Date().getMinutes()).toString();
    this.sSeconds = this.appendOh(new Date().getSeconds()).toString();

    this.rawHours = new Date().getHours();
    this.rawMinutes = new Date().getMinutes();
    this.rawSeconds = new Date().getSeconds();

    this.sRawHours = new Date().getHours().toString();
    this.sRawMinutes = new Date().getMinutes().toString();
    this.sRawSconds = new Date().getSeconds().toString();

    this.defaultSeperator = ":";
  }

  now(sep = this.defaultSeperator, getRaw = false) {
    if (getRaw) {
      return this.sRawHours + sep + this.sRawMinutes + sep + this.sRawSconds
    } else {
      return this.sHours + sep + this.sMinutes + sep + this.sSeconds
    }
  }

  format(params, sep = this.defaultSeperator) {
    let reString = "";
    for (let param of params) {
      if (param == 'h') {
        reString += this.sHours + sep
      } else if (param == "rH") {
        reString += this.sRawHours + sep
      } else if (param == "m") {
        reString += this.sMinutes + sep
      } else if (param == "rM") {
        reString += this.sRawMinutes + sep
      } else if (param == "s") {
        reString += this.sSeconds + sep
      } else if (param == "rS") {
        reString += this.sRawSeconds + sep
      }
    }

    if (sep == "") {
      return reString
    }

    return reString.substring(0, reString.length - 1)
  }

  toDateString(h = this.hours, m = this.minutes, s = this.seconds) {
    let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), h + this.timezone, m, s)
    return date;
  }
}

let time = new Time();
console.log(time.toDateString())
