const formatConstellation = (t) => {
    if (!t) return
    var month = t.getMonth() + 1;
    var date = t.getDate();
    if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
      return '水瓶座';
    }
    if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
      return '双鱼座';
    }
    if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
      return '白羊座';
    }
    if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
      return '金牛座';
    }
    if ((month == 5 && date >= 21) || (month == 6 && date <= 21)) {
      return '双子座';
    }
    if ((month == 6 && date >= 22) || (month == 7 && date <= 22)) {
      return '巨蟹座';
    }
    if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
      return '狮子座';
    }
    if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
      return '处女座';
    }
    if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
      return '天秤座';
    }
    if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
      return '天蝎座';
    }
    if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
      return '射手座';
    }
    if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
      return '摩羯座';
    }
    return 'XXX';
  }