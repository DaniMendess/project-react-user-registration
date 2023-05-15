import React, {useState, useRef}  from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import {Container,Image,P, Input} from '../Home/style'

import H1  from '../../components/Title';

import  ContainerIten from '../../components/ContainerItens';

import  Button from '../../components/Button';

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

  const navegar = useNavigate()

  // Adicionando usuario
  const  addNewUser = async () => {
    // Navegando entre paginas
    navegar("/usuarios")

    const name = inputName.current.value
    const  age = inputAge.current.value

    if(name === null || name === ""){
      return
    }

    const baseUrl = "https://project-react-user-registration-two.vercel.app/users"
    
    const {data: newUser} = await axios.post(`${baseUrl}`, {name: name, age: age})

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
        <Button  onClick={addNewUser}>Cadastrar <img alt="arrow-seta" src={Arrow} width="17"/></Button>
        
      </ContainerIten>
    </Container>
  );

}

export default App;



// O react é como se fosse um sanduiche, sempre tem que ter um elemento PAI, exemplo: um Container, tudo deve estar contido dentro dele 