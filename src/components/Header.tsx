import { useState } from "react";
import styled from "styled-components";
import { Button, BasicModal } from './common';

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
    align-items: center;
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
    const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);

    const openBasicModal = () => {
        setIsBasicModalOpen(true);
    }

    const closeBasicModal = () => {
        setIsBasicModalOpen(false);
    }

    //TODO: 
    //Update usersList with new user
    return (
        <HeaderWrapper>
            <Menu>
                {isBasicModalOpen && <BasicModal isOpen={isBasicModalOpen} isClosed={closeBasicModal} />}

                <div>AppsForce</div>
                <Button
                    style={{ margin: "auto auto auto 1rem" }}
                    onClick={openBasicModal}
                >
                    Add user
                </Button>
            </Menu>
        </HeaderWrapper>
    )
};

export default Header;