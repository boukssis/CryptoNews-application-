 
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoAoiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f64c30e95amshd77ea42081f15a1p17b601jsn860e3ebf3608'
}

const baseUrl  = 'https://coinranking1.p.rapidapi.com'


const createRequest=(url)=>({url,headers:cryptoAoiHeaders})
export  const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=> createRequest('/coins')
        })
    })
})

export const {useGetCryptosQuery}= cryptoApi