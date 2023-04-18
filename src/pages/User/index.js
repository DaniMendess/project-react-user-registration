import React, {useState, useEffect}  from 'react';


import axios from 'axios';

import {Container,Image,ContainerIten, H1,Button, Users} from '../User/style'

import People from '../../assets/peoplo.svg'

import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


// Estrutura de JSX, Mistura de HTML com JavaScript
const Usuario = () => {

  // Nessa parte podemos escrever nossos códigos JAVASCRIPT

  // Estado criando novo usuário
  const [user , setUser] = useState([])


  useEffect(()=> {
    const fetchUser = async () => {
      const {data: newUser} = await axios.get("http://localhost:3002/users")

      setUser(newUser);
    }
    fetchUser()
  }, [])

  //Deletando usuario

  const deleteUser = async (userId) => {
     
    await axios.delete(`http://localhost:3002/users/${userId}`)

    const updateUser = user.filter((user => user.id !== userId))

    setUser(updateUser)
  }

  // Aqui nesse return a gente sempre retorna código HTML
  return(
    <Container>
     <Image src={People}/>
      <ContainerIten>
        <H1>Usuários</H1>
        
        <ul>
            {
              user.map((user) => (
                <Users key={user.id}>
                  <p>{user.name}</p> 
                  <p>{user.age}</p>
                  <button onClick={() => deleteUser(user.id)}><img alt="lixeira" src={Trash} width="20"/></button>
                </Users>
              ))
            }
        </ul>
        <Button to="/"><img alt="arrow-seta" src={Arrow} width="17"/>Voltar </Button>
      </ContainerIten>
    </Container>
  );

}

export default Usuario;



// O react é como se fosse um sanduiche, sempre tem que ter um elemento PAI, exemplo: um Container, tudo deve estar contido dentro dele 