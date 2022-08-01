import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1368px;
    max-height: 1391px;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        margin-left: 16px;
        margin-right: 16px;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: repeat(1, 1fr);
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.woodSmoke};
    font-size: 36px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;
`;

