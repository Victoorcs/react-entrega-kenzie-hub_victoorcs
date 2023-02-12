import styled from "styled-components"


export const StyledCadastro = styled.div`


display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;



 header{
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 296px;
    height: 830px;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    
 }
 main h2 {
    font-size:1,3rem;
    color: white;
 }
 form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
 }
 form label{
    color: white;
 }
 form p {
    color: white;
 }
 form div{
    display: flex;
    flex-direction: column;
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
 form button{
   width: 259.9px;
   height: 38.5px;
   background: #59323F;
   color: white;
   border: 1.2px solid #59323F;
   border-radius: 4px;
 }
 form select{
    width: 263.79px;
    height: 38.38px;
    background: #343B41;
    border: 1px solid #343B41;
    border-radius: 3px;
    color: white;
 }
 form p {
    font-size:0.7rem;
 }

 @media screen and (min-width: 769px){

main{
    width: 370px;
    height: 892px;
}
form input{
    width: 330px;
    height: 48px;
}
form button{
    width: 326px;
    height: 48px;
}
form select{
    width: 330px;
    height: 48px;
}

 }





`