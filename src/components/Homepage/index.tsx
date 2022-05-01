import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { api } from '../../backend/infra/api'

function Homepage() {
  const [patientName, setPatientName] = useState('')
  const [patientCPF, setPatientCPF] = useState('')
  const [patientAge, setPatientAge] = useState('')

  const handlePatientRegister = async () => {
    await api.post('/users', {
      name: patientName,
      cpf: patientCPF,
      age: patientAge
    })
  }

  return (
    <Box>
      <Box width={'1280px'} maxWidth={'1400px'} margin={'40px auto'} gap={'24px'}>
        <Heading as='h3' fontSize={'xl'} fontWeight={'500'}>
          Cadastro de pacientes
        </Heading>

        <Box as='form' margin={'16px 0'} onSubmit={handlePatientRegister}>
          <Grid gridTemplateColumns={'repeat(12, 1fr)'} gap={'16px'}>
            <GridItem colSpan={8}>
              <FormControl gridColumn={'8'}>
                <FormLabel htmlFor='patient-name' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>Nome do completo paciente</FormLabel>
                <Input type='text' name='name' onChange={(e) => setPatientName(e.target.value)} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor='patient-cpf' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>CPF</FormLabel>
                <Input type='text' name='cpf' as={InputMask} mask='999.999.999-99' onChange={(e) => setPatientCPF(e.target.value)} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor='patient-age' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>Idade</FormLabel>
                <Input type='date' name='age' onChange={(e) => setPatientAge(e.target.value)} />
              </FormControl>
            </GridItem>
          </Grid>
          <Flex width={'100%'} justify={'flex-end'} marginTop={'24px'}>
            <Button type='submit' colorScheme={'blue'} >
              Cadastrar paciente
            </Button>
          </Flex>
        </Box>

        <Heading as='h3' fontSize={'xl'} fontWeight={'500'} marginTop={'40px'}>
          Lista de pacientes
        </Heading>
        <Box as='form' margin={'16px 0'}>

        </Box>
      </Box>
    </Box>
  )
}

export default Homepage
