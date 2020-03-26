import React from "react";
import styled from "styled-components";
import firebase from "firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SignUp = (props) => {
  const { register, errors } = useForm();

  // const onSubmit = data => {
  //   alert(JSON.stringify(data, null));
  // };
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    switch (e.target.name) {
      case "user":
        setUser(e.target.value)
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(user,email, password);
      props.history.push("/mypage");
    } catch (e) {
      setErrorMessage("メールアドレスかパスワードの入力に不備があります");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <Header />
        <FormContainer>
          <div className="form">
            <h3>新規登録</h3>
            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label style={{ fontSize: "12px" }}>
                  アカウント名
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="おなまえ"
                  name="user"
                  ref={register({
                    required: true,
                    minLength: 2
                  })}
                  className={
                    errors.email ? "input-error input-empty" : "input-empty"
                  }
                />
                <Form.Label style={{ fontSize: "12px" }}>
                  メールアドレス
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="メールアドレスを入力してください"
                  name="email"
                  ref={register({
                    required: true,
                    minLength: 2,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  className={
                    errors.email ? "input-error input-empty" : "input-empty"
                  }
                />
                <span style={{ color: "#db7302" }}>
                  {errors.email && "入力がされていません "}
                  {errors.email &&
                    errors.email.type === "minLength" &&
                    "2文字以上入力してください "}
                  {errors.email &&
                    errors.email.type === "pattern" &&
                    "メールアドレスとして正しくありません"}
                </span>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label style={{ fontSize: "12px" }}>パスワード</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register({
                    required: true,
                    minLength: 4
                  })}
                />
                <span style={{ color: "#db7302" }}>
                  {errors.password && "5文字以上入力してください"}
                </span>
              </Form.Group>
              <div className="privacy-info">
                <a>利用規約</a> ／ <a>個人情報保護方針</a>{" "}
                に同意のうえ、「送信する」をご選択ください。
              </div>
              <Button type="submit" variant="secondary" block>
                送信する
              </Button>
            </Form>
          </div>
        </FormContainer>
      </div>
      <Footer />
    </div>
  );
};
export default SignUp;

const FormContainer = styled.form`
  margin: 80px auto 200px;
  width: 70%;
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  .form {
    margin-bottom: 100px;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid #ccc;
  }
  .privacy-info {
    margin: 60px 0 30px;
    font-size: 13px;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
