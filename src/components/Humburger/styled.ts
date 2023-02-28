import styled from "styled-components";



type MenuProps = {
    open?: boolean;
    visible?: boolean;
};

export const HamburgerButton = styled.div<MenuProps>`

    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 999;
`