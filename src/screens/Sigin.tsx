import { useState } from 'react';
import {VStack, Heading, Icon, useTheme} from 'native-base';
import {Envelope, Key} from 'phosphor-react-native'
import  Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button'
 
export function SignIn(){
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const { colors } = useTheme();
    function handleSigIn(){
        console.log(name, password);
    }
    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo/>
        <Heading color="gray.100" >
            Acesse sua conta
        </Heading>
        <Input placeholder="E-mail"
        marginTop={5}
        marginBottom={5}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
        onChangeText={setName}
        />
        <Input placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        marginBottom={10}
        onChangeText={setPassword}
        />
        <Button title='Entrar' w='full' onPress={handleSigIn}
        />
        </VStack>

    )
}