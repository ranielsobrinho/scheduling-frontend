import { usersService } from "./axiosConfig";

class UsersService {
  createClient(data) {
    return usersService.post("/signup", data);
  }

  login(data) {
    return usersService.post("/login", data);
  }
}

export default new UsersService();
