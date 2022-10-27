import { useEffect } from "react"

export const PaymentForm = () => {
  useEffect(
    () => {
      console.log('sets up payment form', new Date())
    }
  , null)

  return (
    <form>
      <p>a payment form</p>
    </form>
  )
}