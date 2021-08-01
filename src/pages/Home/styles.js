import styled from "styled-components"

export const Container = styled.main`
    padding-top: 30px;
    padding-bottom: 100px;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: Arial;
    
    *{
        margin: 0;
        padding: 0;
    }

    img{
        width: 150px;
    }

    .Phone{
        border-radius: 10px;
        width: 180px;
        padding: 10px;
        margin: 0px 10px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }

    .Phone img{
        margin: auto;
    }

    .Phone p{
        text-align: center;
        padding: 5px;
        margin: auto;
    }

    .Phone .Price{
        font-weight: bold;
    }


    button{
        text-decoration: none;
        color: white;
        background: #B3BA35;
        padding: 15px;
        cursor: pointer;
        border-radius: 15px;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        margin: auto;
    }

`