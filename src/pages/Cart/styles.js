import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    align-items: center;
    width: 300px;
    margin: 5px auto;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;


    img{
        width: 100px;
    }

    p{
        padding: 0;
        margin: 0;
    }

    .imagem{
        margin-left: 20px;
    }

    .details{
        margin-left: 20px;
    }

    
    .name{
        font-weight: bold;
        margin-bottom: 10px;
    }

    .remove{
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        color: #99270A;
        padding: 0 10px 10px 10px;
        width: 20px;
        height: 20px;
        

    }

    .remove::visited{
        animation: 0.5s remove;
    }




    @keyframes remove{
        0%{
            width: 0;
            height: 0;
        }
    }

    


`


export const CartVazio = styled.div`
    color: #030714;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    display: flex;
    margin-top: 170px;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    .cart{
        color: #C9FBF4;
        background: #002E57;
        width: 70px;
        height: 70px;
        padding: 20px;
        border-radius: 100px;
    }

    a{
        text-decoration: none;
        color: white;
        background: #B3BA35;
        padding: 15px;
        cursor: pointer;
        border-radius: 15px;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
    }

`