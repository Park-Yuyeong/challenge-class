export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

// 초기 state
const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      return { ...prevState, isLoggedIn: false };
    default: // 원하던 작업의 종류가 아닐 시, 기존 상태 그대로 반환
      return prevState;
  }
}

export default authReducer;
