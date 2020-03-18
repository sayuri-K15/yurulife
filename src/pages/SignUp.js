import React, { Component } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <FormContainer>
          <div className="form">
            <h3>新規登録</h3>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label style={{ fontSize: "12px"}}>メールアドレス</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label style={{ fontSize: "12px"}}>パスワード</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <div className="privacy-info">
                <a>利用規約</a> ／ <a>個人情報保護方針</a> に同意のうえ、「送信する」をご選択ください。
              </div>
              <Button
                as="input"
                type="submit"
                value="送信する"
                variant="secondary"
                block
              />
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
