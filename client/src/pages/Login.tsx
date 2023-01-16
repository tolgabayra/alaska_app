import React, { useState } from 'react'
import { PasswordInput, Text, TextInput, Group, Anchor } from '@mantine/core';
import Loading from '../components/Loading';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true)


  const submitLogin = () => {
    setIsLoading(false)
  }


  return (
    <div>
      {
        isLoading ? <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-thin">Alaska</h1>

            <div className=" bg-gray-100 rounded-lg overflow-hidden shadow-xl">
              <div className="p-8">
                <div className="" onClick={submitLogin}>
                  <div className="mb-5">
                    <TextInput
                      label="Email"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="mb-5">
                    <Group position="apart" mb={5}>
                      <Text component="label" htmlFor="your-password" size="sm" weight={500}>
                        Your password
                      </Text>
                    
                    </Group>
                    <PasswordInput placeholder="Your password" id="your-password" />

                  </div>

                  <button className="w-full p-3 mt-4 bg-blue-600 hover:bg-blue-500 duration-100 text-white rounded shadow">Login</button>
                </div>
              </div>

            </div>
          </div>
        </div>
          :
          <Loading />
      }

    </div>
  )
}