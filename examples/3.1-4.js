async quickLogin() {
  // Other Code...
  if (this.canQuickLogin) {
    return this.ppQuickLogin(); // 2
  } else {
    return getScript('//example.com/ppquicklogin.min.js').then(() => {
      // Other Code...
      return this.ppQuickLogin(); // 2
    });
  }
}

async ppQuickLogin() {
  // Other Code...
  return this.getUserState(); // 3
}

async getUserState() {
  // Other Code...
  return this.userInfo;
}