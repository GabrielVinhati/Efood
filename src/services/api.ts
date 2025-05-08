import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Opçao, PurchasePayload } from '../types'

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<Opçao[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureEfood: builder.query<Opçao, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureEfoodQuery,
  useGetHomePageQuery,
  usePurchaseMutation
} = api
export default api
