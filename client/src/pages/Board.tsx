import React from 'react'
import { Text, Progress, Card } from '@mantine/core';
import { NativeSelect, TextInput } from '@mantine/core';
const data = [
    { value: 'eur', label: '🇪🇺 EUR' },
    { value: 'usd', label: '🇺🇸 USD' },

];

export default function Board() {
    const select = (
        <NativeSelect
            data={data}
            styles={{
                input: {
                    fontWeight: 500,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                },
            }}
        />
    );
    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <header className="px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
                    <div className="flex-1 flex justify-between items-center font-black text-gray-700">
                        <a href="#">Alaska</a>
                    </div>


                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                        <nav>
                            <ul className="lg:flex items-center justify-between text-sm font-medium text-gray-700 pt-4 lg:pt-0">
                                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-blue-500 text-blue-500 font-bold" href="#">Dashboard</a></li>
                                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent text-gray-600 hover:text-gray-900" href="#">Courses</a></li>
                            </ul>
                        </nav>
                        <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor" id="userdropdown">
                            <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-pink-400 ignore-body-click" src="https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_normal.jpg" alt="avatar" />
                        </a>
                        <div id="usermenu" className="absolute lg:mt-12 pt-1 z-40 left-0 lg:left-auto lg:right-0 lg:top-0 invisible lg:w-auto w-full">
                            <div className="bg-white shadow-xl lg:px-8 px-6 lg:py-4 pb-4 pt-0 rounded lg:mr-3 rounded-t-none">
                                <a href="/settings" className="pb-2 block text-gray-600 hover:text-gray-900 font-medium ignore-body-click">Settings</a>
                                <a href="/logout" className="block text-gray-600 hover:text-gray-900 font-medium ignore-body-click">Logout</a>
                            </div>
                        </div>

                    </div>

                </header>

                <div className="px-4">
                    <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">

                        <h1 className="text-2xl font-medium mb-2">Welcome to Your Dashboard</h1>
                        <h2 className="font-medium text-sm text-gray-500 mb-4 uppercase tracking-wide">Feel free to modify this view for your app</h2>
                        <p>You can include any data in the main dashboard area of your application. It's typically a good idea to add quick links to popular sections of your application.</p>
                        <button className='mt-7 bg-green-500 text-white pr-4 pl-4 p-2'> + New Account</button>
                        <Card
                            className='mt-2'
                            withBorder
                            radius="md"
                            p="xl"
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                            })}
                        >
                            < Text className='mb-2 text-center'>Account Name</Text>
                            <Text className='flex justify-end' size="xs" transform="uppercase" weight={700} color="dimmed">
                                Balance
                            </Text>
                            <Text className='flex justify-end' size="lg" weight={500}>
                                $10.000
                            </Text>

                            <TextInput
                                label="Account ID"
                                placeholder="51515-4548514-54545"
                            />

                            <TextInput
                                className='mt-2'
                                type="number"
                                placeholder="1000"
                                label="Write what you want to withdraw money                                "
                                rightSection={select}
                                rightSectionWidth={96}
                            />

                            <button className='bg-red-500 text-white p-2 pr-5 pl-5 mt-2 rounded-sm'>
                                Withdraw
                            </button>
                        </Card>


                    </div>

                </div>
            </div>
        </div>
    )
}