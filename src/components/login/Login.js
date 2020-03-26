import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";

import Header from "../Header";
import Footer from "../Footer";

import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Login = (props) => {

  const { register, errors } = useForm();

  // const onSubmit = data => {alert(JSON.stringify(data, null))}
  // console.log(watch("email"))

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
        
        props.history.push("/mypage")
      } catch (e) {
        alert(e)
      }
  };

  return (
    <div>
      <div className="wrapper">
        <Header />
        <FormContainer>
          <div className="form">
            <h3>ログイン</h3>
            <Form onSubmit={handleLogin}>
              {setErrorMessage && (
                <Alert varient="danger">{setErrorMessage}</Alert>
              )}
              <Form.Group controlId="formGroupEmail">
                <Form.Label style={{ fontSize: "12px" }}>
                  メールアドレス{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="メールアドレスを入力してください"
                  name="email"
                  value={email}
                  ref={register({
                    required: true,
                    minLength: 2,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  className={
                    errors.email ? "input-error input-empty" : "input-empty"
                  }
                  onChange={handleChange}
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
                  placeholder="パスワードを入力してください"
                  value={password}
                  ref={register({
                    required: true,
                    minLength: 4
                  })}
                  onChange={handleChange}
                />
                <span style={{ color: "#db7302" }}>
                  {errors.password && "5文字以上入力してください"}
                </span>
              </Form.Group>

              <Button type="submit" variant="secondary" block>
                ログイン
              </Button>
            </Form>
            <a href="/signup">初めてご利用になる方はこちら</a>
          </div>
        </FormContainer>
      </div>
      <Footer />
    </div>
  );
};
export default Login;

const FormContainer = styled.form`
  margin: 80px auto 200px;
  width: 70%;
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  .form {
    margin-bottom: 100px;
    padding-bottom: 100px;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid #ccc;
  }

  a {
    font-size: 11px;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
