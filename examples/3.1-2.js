quickLogin(callback) {
  // Other Code...
  if (this.canQuickLogin) {
    this.ppQuickLogin(callback); // 2
  } else {
    getScript('//example.com/ppquicklogin.min.js').then(() => {
      // Other Code...
      this.ppQuickLogin(callback); // 2
    });
  }
}

ppQuickLogin(callback) {
  // Other Code...
  this.getUserState(callback); // 3
}

getUserState(callback) {
  // Other Code...
  if (isFunction(callback)) {
    callback(this.userInfo); // 4
  }
}