import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import InputMask from 'react-input-mask'

function Homepage() {
  return (
    <Box>
      <Box width={'1280px'} maxWidth={'1400px'} margin={'40px auto'} gap={'24px'}>
        <Heading as='h3' fontSize={'xl'} fontWeight={'500'}>
          Cadastro de pacientes
        </Heading>

        <Box as='form' margin={'16px 0'}>
          <Grid gridTemplateColumns={'repeat(12, 1fr)'} gap={'16px'}>
            <GridItem colSpan={8}>
              <FormControl gridColumn={'8'}>
                <FormLabel htmlFor='patient-name' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>Nome do completo paciente</FormLabel>
                <Input type='text' name='patient-name' />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor='patient-cpf' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>CPF</FormLabel>
                <Input type='text' name='patient-cpf' as={InputMask} mask='999.999.999-99' />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor='patient-age' fontSize={'sm'} fontWeight={'normal'} color={'gray.500'}>Idade</FormLabel>
                <Input type='date' name='patient-age' />
              </FormControl>
            </GridItem>
          </Grid>
          <Flex width={'100%'} justify={'flex-end'} marginTop={'24px'}>
            <Button colorScheme={'blue'} >
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
