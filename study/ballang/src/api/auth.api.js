class AuthAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // 회원가입
  async signUp(data) {
    const path = "/auth/sign-up";

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // 로그인
  async logIn(data) {
    const path = "/auth/log-in";

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // 로그아웃
  async logOut() {
    const path = "/auth/log-out";

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // accessToken을 리프레쉬
  async refreshToken() {
    const path = "/auth/refresh-token";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default AuthAPI;
