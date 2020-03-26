import React, { Component } from "react";
import "firebase/storage";
import styled from "styled-components";


class Myprofile extends Component {
  render() {
    return (
    <MyprofileContainer>
      プロフィールはありません
    </MyprofileContainer>
    )
  }
}
export default Myprofile;

const MyprofileContainer = styled.div`
  width: 100%;
  height: 350px;
`;
