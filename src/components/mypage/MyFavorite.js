import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import styled from "styled-components";

class MyFavorite extends Component {
  render() {
    return (
      <MyFavoriteContainer>
        <tbody>
          <tr>
            <th >
              <img src="https://picsum.photos/150/150" alt="" />
            </th>
            <td>
              <h3>てきすとてきすとてきすとてきすとてきすとてきすと</h3>
              <p>アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ</p>
              <span>lifrstyle</span>
            </td>
          </tr>
        </tbody>
      </MyFavoriteContainer>
    );
  }
}
export default MyFavorite;

const MyFavoriteContainer = styled.table`
  width: 100%;
  height: 350px;

  tbody th {
    vertical-align: top;
  }
  tbody th img{
    margin-bottom: 20px;
  }

  td {
    vertical-align: top;
  }
  h3 {
    font-size: 20px;
    padding: 0px 15px;
    color: #555;
    
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      opacity: 0.5;
    }
  }
  p {
    font-size: 13px;
    color: #aaa;
    padding: 0px 15px;
  }
  
  span {
    padding: 0px 15px;
    font-size: 11px;
  }
`;
