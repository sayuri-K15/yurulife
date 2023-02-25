// iimport firebase from "firebase/compat/app";";


// class User {
//   isLoggedIn = () => this.get('isLoggedIn') === 'true';

//   set = (key, value) => localStorage.setItem(key, value);

//   get = key => this.getLocalStorage(key);

//   getLocalStorage = key => {
//     const ret = localStorage.getItem(key);
//     if (ret) {
//       return ret;
//     }
//     return null;
//   };

//   login = async (email, password) => {
//         try {
//           await firebase
//             .auth()
//             .createUserWithEmailAndPassword(setEmail, setPassword);

//           this.props.history.push({ pathname: "/mypage" });
//         } catch (e) {
//           setErrorMessage("メールアドレスかパスワードが違います");
//         }

//     this.set('isLoggedIn', true);

//     return true;
//   };

//   logout = async () => {
//     if (this.isLoggedIn()) {
//       this.set('isLoggedIn', false);

//       // ログアウト処理
//       //　他に必要な処理があるのならこちら

//     }
//   };
// }

// export default new User();