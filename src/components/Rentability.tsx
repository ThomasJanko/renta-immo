import { useEffect, useState } from 'react'
import Input from './shared/Input'

export default function Rentability() {
  const [rent, setRent] = useState(0)
  const [charges, setCharges] = useState({
    copopriety: { value: 0, unit: 'mois' },
    energy: { value: 0, unit: 'mois' },
  })
  const [credit, setCredit] = useState(0)
  const [netCashflow, setNetCashflow] = useState(0)

  // Function to toggle unit (copopriety & energy)
  const toggleUnit = (type: string) => {
    setCharges((prevCharges: any) => ({
      ...prevCharges,
      [type]: {
        ...prevCharges[type],
        unit: prevCharges[type].unit === 'mois' ? 'ans' : 'mois',
      },
    }))
  }

  // Calculate Net Cashflow
  const calculateNetCashflow = () => {
    // Convert yearly charges to monthly for proper calculations
    const copoprietyMonthly =
      charges.copopriety.unit === 'mois'
        ? charges.copopriety.value
        : charges.copopriety.value / 12

    const energyMonthly =
      charges.energy.unit === 'mois'
        ? charges.energy.value
        : charges.energy.value / 12

    const totalCharges = copoprietyMonthly + energyMonthly
    const totalIncome = rent - totalCharges
    const cashflow = totalIncome - credit
    console.log('Cashflow: ', cashflow)
    setNetCashflow(cashflow)
  }

  useEffect(() => {
    console.log('Net Cashflow updated')
    calculateNetCashflow()
  }, [charges, credit, rent])

  return (
    <div className="card p-6 min-w-[400px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        📊 Calcul du Cashflow Net-Net
      </h2>

      <div className="space-y-4">
        {/* Charges copropriété */}
        <div className="text-left">
          <span className="ml-2">Charges de copropriété (€) :</span>
          <div className="flex flex-row rounded-2xl border justify-center items-center border-gray-300 mt-1">
            <input
              type="number"
              min={0}
              className="p-3 border-l-xl w-[90%] no-arrows rounded-l-xl"
              value={charges.copopriety.value}
              onChange={(e) =>
                setCharges({
                  ...charges,
                  copopriety: {
                    value: parseFloat(e.target.value),
                    unit: charges.copopriety.unit,
                  },
                })
              }
            />
            <div
              className="border-l border-gray-300 flex items-center bg-blue-300 rounded-r-xl cursor-pointer hover:bg-blue-400"
              onClick={() => toggleUnit('copopriety')}
            >
              <span className="mx-2 p-3">{charges.copopriety.unit}</span>
            </div>
          </div>
        </div>

        {/* Charges énergétiques */}
        <div className="text-left">
          <span className="ml-2">Charges énergétiques (€) :</span>
          <div className="flex flex-row rounded-2xl border justify-center items-center border-gray-300 mt-1">
            <input
              type="number"
              min={0}
              className="p-3 border-l-xl w-[90%] no-arrows rounded-l-xl"
              value={charges.energy.value}
              onChange={(e) =>
                setCharges({
                  ...charges,
                  energy: {
                    value: parseFloat(e.target.value),
                    unit: charges.energy.unit,
                  },
                })
              }
            />
            <div
              className="border-l border-gray-300 flex items-center bg-blue-300 rounded-r-xl cursor-pointer hover:bg-blue-400"
              onClick={() => toggleUnit('energy')}
            >
              <span className="mx-2 p-3">{charges.energy.unit}</span>
            </div>
          </div>
        </div>

        {/* Mensualité crédit */}
        <div className="text-left mt-10">
          <span className="ml-2">Mensualité crédit (€) :</span>
          <Input
            value={credit}
            handleChange={(e) => setCredit(parseFloat(e.target.value))}
            unit="€"
          />
        </div>

        {/* Montant location */}
        <div className="text-left">
          <span className="ml-2">Montant location (€) :</span>
          <Input
            value={rent}
            handleChange={(e) => setRent(parseFloat(e.target.value))}
            unit="€"
          />
        </div>

        {/* Cashflow Net Net Result */}
        <div className="mt-4 p-3 bg-blue-100 text-blue-800 font-semibold rounded-lg text-center">
          Cashflow Net-Net :{' '}
          <span
            className={netCashflow >= 0 ? 'text-green-600' : 'text-red-600'}
          >
            {netCashflow >= 0 ? '✅ +' : '❌ -'}
          </span>
          <b> {Math.abs(netCashflow).toFixed(2)} € / mois</b>
        </div>
      </div>
    </div>
  )
}
