import styled from "styled-components"


export const StyledModal = styled.div`

width: 369px;
height: 342px;
background: #212529;
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 4px;

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

form p{
    color: white;
}
form label{
    color:white;
}
form input{
    color: white;
    background-color:#343B41;
    border: 1.2px solid #F8F9FA;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
 }
 form select{
    color: white;
    background-color:#343B41;
    border: 1.2px solid #F8F9FA;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
 }
.modalH{
    display:flex;
    width: 369px;
    height: 50px;
    background: #343B41;
    border-radius: 4px 4px 0px 0px;
    align-items: center;
    justify-content: space-around;
}
.closeBtn{
    background: #343B41;
    color:white;
    width: 20px;
    height: 20px;
}
.inputM{
    display: flex;
    gap: 5px;
    flex-direction: column;
}
.selectM{
    display: flex;
    gap: 5px;
    flex-direction: column;
}
.cadBtn{
    width: 270px;
    height: 48px;
    background: #FF577F;
    color:white;
    border-radius:4px;
}

`