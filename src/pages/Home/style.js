import styled from "styled-components"


export const StyledDash = styled.div`

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;


    nav{
        width: 100vw;
        height: 72px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 1px 1px #292a2b;
    }
    nav button{
        width: 70px;
        height: 45px;
        background: #212529;
        border-radius: 4px;
        color: white;
    }
    header{
        height: 131px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 1px #292a2b;
    }
    header p {
        color: white;
    }
    header h3{
        color: white;
    }
    main{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main h2{
        color: white;
        
    }
    .tech{
        display: flex;
        justify-content: space-between;
        padding: 13px;
        width: 350px;
    }
    .tech button{
        width: 32px;
        height: 32px;
        background: #212529;
        color: white;
        border-radius: 4px;
        font-size: 20px;
    }
    .techList{
        width: 300px;
        height: 415px;
        background: #212529;
        border-radius: 4px;
    }
    .techList ul {
        width: 300px;
        height: 415px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .techList li {
        width: 279px;
        height: 48.73px;
        background: #121214;
        border-radius: 4px;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .techList li p {
        color: white;
    }
    .techList li button{
        background: #212529;
        color: white;
        width: 20px;
        height: 20px;
    }

    @media screen and (min-width: 769px){

        nav button{
            cursor: pointer;
        }

        header{
            height: 118px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        .tech{
            width: 780px;
        }
        .techList{
            width: 780px;
            height: 416px;
        }
        .techList ul{
            width: 780px;
            height: 416px;
        }
        .techList li {
            width: 732px;
            height: 49px;
        }
    }


`