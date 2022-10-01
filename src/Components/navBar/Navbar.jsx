import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  color: black;
`;

const Wrapper = styled.div`
  /* padding: 10px 20px; */
  display: flex;
  justify-content: space-between;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const MenuItem = styled.div`
padding:10px;
cursor: pointer;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input``;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>JARA.</Logo>
          </Center>
          <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign Up</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
