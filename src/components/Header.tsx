import styled from "styled-components";

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background: #eeeeee;
`;

const Menu = styled.nav`
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    font-family: "Open Sans";
    background: none;
    left: initial;
    top: initial;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Menu>
                AppsForce
            </Menu>
        </HeaderWrapper>
    )
};

export default Header;