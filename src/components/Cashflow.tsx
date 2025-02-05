import { useState } from 'react'

export default function Cashflow() {
    const [rent, setRent] = useState(0)
    const [charges, setCharges] = useState({
        copopriety: 0,
        energy: 0
    })
    const [credit, setCredit] = useState(0)
    const [netCashflow, setNetCashflow] = useState(0)

  return (
    <div>Cashflow</div>
  )
}
