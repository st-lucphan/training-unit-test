import { AuthStorageService } from "../services/authStorage.service";

export class Authentication extends AuthStorageService {
  isAuthenticated() {
    const token = super.getToken();
    return !!token;
  }
  login(token) {
    super.setToken(token);
  }
  signOut() {
    super.removeToken();
  }
}
