import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import InputMask from 'react-input-mask'
import { useMutation, useQuery } from 'react-query'
import { api } from '../../backend/infra/api'
import { queryClient } from '../../pages/_app'

type Patient = {
  name: string
  cpf: string
  age: string
}

function Homepage() {
  const [patientName, setPatientName] = useState('')
  const [patientCPF, setPatientCPF] = useState('')
  const [patientAge, setPatientAge] = useState('')

  const mutation = useMutation(async () => {
    await api.post('/users', {
      name: patientName,
      cpf: patientCPF,
      age: patientAge
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('patients')
    }
  })

  const handlePatientRegister = (e: FormEvent) => {
    e.preventDefault()
    mutation.mutateAsync()
    setPatientName('')
    setPatientCPF('')
    setPatientAge('')
  }

  const patients = useQuery('patients', async () => {
    const { data } = await api.get('/users')
    return data
  }, {
    staleTime: 60 * 60 * 15
  })

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
            <Button type='submit' colorScheme={'blue'} isLoading={mutation.isLoading}>
              Cadastrar paciente
            </Button>
          </Flex>
        </Box>

        <Heading as='h3' fontSize={'xl'} fontWeight={'500'} marginTop={'40px'}>
          Lista de pacientes
        </Heading>
        <Box as='form' margin={'16px 0'} border={'1px'} borderColor={'gray.200'} borderRadius={'lg'}>
          <Table>
            <Thead>
              <Tr>
                <Th>Nome completo</Th>
                <Th>CPF</Th>
                <Th>Idade</Th>
              </Tr>
            </Thead>
            <Tbody>
              {patients.isLoading ? (
                <Spinner />
              ) : patients.error ? (
                <Box p={8} textAlign={'center'}>
                  <Heading as='h3' fontSize={'lg'} fontWeight={500}>Não foi possível encontrar os pacientes</Heading>
                </Box>
              ) : (
                patients.data.map((patient: Patient) => {
                  return (
                    <Tr key={patient.cpf}>
                      <Td>{patient.name}</Td>
                      <Td>{patient.cpf}</Td>
                      <Td>{new Date(patient.age).toLocaleDateString('pt-BR')}</Td>
                    </Tr>
                  )
                })
              )}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}

export default Homepage
