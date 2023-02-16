import styled from "styled-components"


export const StyledLogin = styled.div`
 

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;



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
    height: 460px;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    gap: 60px;
    padding: 20px;
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
    gap: 20px;
 }
 form label{
    color: white;
 }
 form p {
    color: white;
    font-size:0.7rem;
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
   background: #FF577F;
   color: white;
   border: 1.2px solid #FF577F;
   border-radius: 4px;
   
 }

.cadBtn{
   width: 259.9px;
   height: 38.5px;
   background: #868E96;
   color: white;
   border: 1.2px solid #868E96;
   border-radius: 4px;
}
.divForm{
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.divForm span {
   color: white;
   font-size: 0.8rem;
}



@media screen and (min-width: 769px){

   main{
      width: 369px;
      height: 502px;
   }

   form input{
      width: 329.93px;
      height: 48px;
   }
   form button{
      width: 324px;
      height: 48px;
      cursor: pointer;
   }
   .cadBtn{
      width: 324px;
      height: 48px;
      cursor: pointer;
   }


}
`
