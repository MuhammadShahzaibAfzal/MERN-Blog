class AuthController {
  async login(req, res) {
    res.send("Login");
  }

  async logout(req, res, next) {
    res.send("Logout");
  }

  async forgetPassword(req, res, next) {
    res.send("Forget Password");
  }

  async changePassword(req, res, next) {
    res.send("Change Password");
  }

  async editProfile(req, res, next) {
    res.send("Edit profile");
  }
}

const authController = new AuthController();

export default authController;
