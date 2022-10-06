methods: {
  async getSwitchStatus() {
    // Other Code...
    return isSwitchOn;
  },
  async getLoginStatus() {
    // Other Code...
    return isLogined;
  },
  async pushGame() {
    // Other Code...
    const [isSwitchOn, isLogined] = await Promise.all([this.getSwitchStatus(), this.getLoginStatus()]);
    if (isSwitchOn && isLogined) {
      // Other Code...
    } else {
      // Other Code...
    }
  },
},