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
    main h2{
        color: white;
    }

    @media screen and (min-width: 769px){

        header{
            height: 118px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }


`