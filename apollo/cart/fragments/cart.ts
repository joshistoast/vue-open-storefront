import gql from 'graphql-tag'
import { CartLines, CartFields } from './index'

export const Cart = gql`
  ${CartLines}
  ${CartFields}
  fragment Cart on Cart {
    ...CartFields
    ...CartLines
  }
`
