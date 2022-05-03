import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')).render(<ChakraProvider><App /></ChakraProvider>)