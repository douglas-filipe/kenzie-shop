import styled from "styled-components";

export const Container = styled.nav`

    width: 100vw;
    height: 60px;
    background: #0B1423;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    //border-radius: 10px 10px 0 0;
    

    svg{
        color: #828282;
        width: 20px;
        height: 20px;
        cursor: pointer;
        padding: 10px;
        transition: 0.3s;
        background: #0B1423;
        border-radius: 50px;
        
    }

    .selected svg{
        color: #ffffff;
        transform: translateY(-60%);
        top: 20%;
    }


    @media(min-width: 768px){

        width: 40px;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        border-radius: 0px 100px 100px 0px;
        
        

        /*::after{
            content: '';
            position: fixed;
            top: 0;
            left: 44px;
            right: 0;
            bottom: 0;
            background: white;
            width: 60px;
            border-radius: 100px 0px 0px 100px;
            z-index: 1;
        }*/
        svg{
            z-index: 99;
            position: relative;
        }


        .selected svg{
        color: #ffffff;
        transform: translateX(40%);
        z-index: 99;
        top: 0;
    }

    }



    
    

`