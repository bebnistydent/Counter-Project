import { styled } from "styled-components"


export const Card = styled.div `
display: flex;
align-items: center;
    justify-content: center;
flex-direction: column;
background-color: #06cce6;
border: 2px #3b3a3a solid;
width: 300px;
height: 400px;
border-radius: 15px;
color: #3b3a3a;

button {
  padding: 8px 16px;
  margin: 7px;
  font-size: 16px;
  background-color: #f9b508;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

Input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  width: 55%;

}

.SetMumberContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.inputWrapper {
 justify-content: space-between;
 display:flex;
 align-items: center;
 gap: 10px;
}



` 