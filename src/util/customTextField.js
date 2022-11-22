// Libraries
import { TextField } from "@mui/material";
import styled from "styled-components";

const CustomTextField = styled(TextField)`
  width: 100%;
  color: white;

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

  & .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    color: white;
    &:hover fieldset: {
      border-color: red;
    }
  }
  & .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: #20c997;
  }
  & .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: white;
  }
  & .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    color: white;
  }
`;

export default CustomTextField;