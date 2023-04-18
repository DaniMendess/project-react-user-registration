import React, {useState, useRef}  from 'react';

import axios from 'axios';

import {Container,Image,ContainerIten, H1,P, Input,Button} from '../Home/style'

import User from '../../assets/user.svg'

import Arrow from '../../assets/arrow.svg'




// Estrutura de JSX, Mistura de HTML com JavaScript
const App = () => {

  // Nessa parte podemos escrever nossos códigos JAVASCRIPT

  // Estado criando novo usuário
  const [user , setUser] = useState([])

  //Estado nome do usuário, pegando valor do input nome
  const inputName = useRef()

  //Estado idade do usuario, pegando valor do input idade
  const inputAge = useRef()



  // Adicionando usuario
  const  addNewUser = async () => {

    const name = inputName.current.value
    const  age = inputAge.current.value

    if(name === null || name === ""){
      return
    }
    
    const {data: newUser} = await axios.post("http://localhost:3002/users", {name: name, age: age})

     setUser([...user, newUser])
  }

  //Deletando usuario

  

  // Aqui nesse return a gente sempre retorna código HTML
  return(
    <Container>
     <Image src={User}/>
      <ContainerIten>
        <H1>Olá</H1>
        <P>Nome</P>
        <Input ref={inputName} placeholder="Nome"></Input>
        <P>Idade</P>
        <Input ref={inputAge} placeholder="Idade"></Input>
        <Button to="/usuarios" onClick={addNewUser}>Cadastrar <img alt="arrow-seta" src={Arrow} width="17"/></Button>
        
      </ContainerIten>
    </Container>
  );

}

export default App;



// O react é como se fosse um sanduiche, sempre tem que ter um elemento PAI, exemplo: um Container, tudo deve estar contido dentro dele 