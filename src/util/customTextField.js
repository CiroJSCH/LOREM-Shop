// Libraries
import { TextField } from "@mui/material";
import styled from "styled-components";

const CustomTextField = styled(TextField)`
  width: 100%;
  color: white;

  & .MuiFormLabel-root {
    color: white;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: white;
    }
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: #20c997;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #20c997;
  }

  & .MuiOutlinedInput-root {
    color : white;
  }
`;

export default CustomTextField;