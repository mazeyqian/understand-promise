methods: {
  getSwitchStatus(callback) {
    // Other Code...
    if (isFunction(callback)) {
      callback(isSwitchOn);
    }
  },
  getLoginStatus(callback) {
    // Other Code...
    if (isFunction(callback)) {
      callback(isLogined);
    }
  },
  pushGame() {
    // Other Code...
    this.getSwitchStatus(
      isSwitchOn => {
        if (isSwitchOn) {
          this.getLoginStatus(
            isLogined => {
              if (isLogined) {
                // Other Code...
              } else {
                this.showLoginModal();
              }
            }
          )
        }
      }
    );
  },
},