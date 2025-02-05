import { useEffect, useState } from 'react'
import Input from './shared/Input'

export default function Mensualities() {
  const [price, setPrice] = useState(0)
  const [apport, setApport] = useState(0)
  const [priceWork, setPriceWork] = useState(0)
  const [priceHonoraire, setPriceHonoraire] = useState(0)
  const [duration, setDuration] = useState(25)
  const [mensualities, setMensualities] = useState(0)
  const [total, setTotal] = useState(0)
  const [interests, setInterests] = useState(0)
  const [notary, setNotary] = useState(8)
  const [rate, setRate] = useState(4)

  useEffect(() => {
    const total =
      price +
      priceWork -
      apport +
      (price * notary) / 100 +
      (price * priceHonoraire) / 100
    setTotal(total)

    const monthlyRate = rate / 100 / 12
    const numberOfPayments = duration * 12
    const x = Math.pow(1 + monthlyRate, numberOfPayments)
    const monthly = (total * x * monthlyRate) / (x - 1)
    setMensualities(Math.round(monthly))

    const interests = Math.round(monthly * numberOfPayments - total)
    setInterests(interests)
  }, [price, apport, duration, notary, rate, priceHonoraire, priceWork])

  return (
    <div className="rounded-md card p-4">
      <h3 className="my-2 text-xl text-start ml-4 font-semibold">
        Calculer mes mensualités
      </h3>
      <div className="flex flex-row gap-x-3 justify-center">
        <div className="flex flex-col gap-4 w-100 h-100 p-4">
          <div className="text-left">
            <span className="ml-2">Prix du bien</span>
            <Input
              value={price}
              handleChange={(e) => setPrice(parseInt(e.target.value))}
              unit="€"
            />
          </div>
          <div className="text-left">
            <span className="ml-2">Montant travaux</span>
            <Input
              value={priceWork}
              handleChange={(e) => setPriceWork(parseInt(e.target.value))}
              unit="€"
            />
          </div>
          <div className="text-left">
            <span className="ml-2">Apport personnel</span>
            <Input
              value={apport}
              handleChange={(e) => setApport(parseInt(e.target.value))}
              unit="€"
            />
            <span className="itlac text-sm text-gray-600 ml-2">
              20% du prix total recommandé.
            </span>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <span className="ml-2">Durée de l'emprunt</span>
              <span className="mr-2 font-bold">{duration} ans</span>
            </div>
            {/* INPUT progress 5 ans - 25 ans  */}
            <div className="flex flex-col rounded-2xl justify-center items-center mt-1">
              <input
                type="range"
                min={5}
                max={25}
                className="my-1 w-[94%]"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
              />
              <div className="w-full px-2 flex items-center justify-between">
                <span>5 ans</span>
                <span>25 ans</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 h-100 p-4 flex flex-col bg-blue-100 rounded-md">
          <div className="flex items-center justify-between">
            <span>Mensualités : </span>
            <div>
              <span className="font-bold"> {mensualities} € </span>
              <span> / mois</span>
            </div>
          </div>

          <div className="w-full px-6 border-b my-3 border-gray-500" />

          <div className="text-start flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-between">
                <span>Montant de l'emprunt : </span>
                <span className="font-bold"> {total} € </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span>Coût des intérêts : </span>
                  <span className="font-bold"> {interests} € </span>
                </div>
                <span className="text-sm text-gray-600">
                  (Taux d’intérêt annuel moyen : {rate}% )
                </span>
              </div>
            </div>

            <div>
              {/* NOTARY  */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="">Frais de notaire :</span>
                  <span className="font-bold">
                    {' '}
                    {(notary / 100) * price} €{' '}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  (Environ {notary}% du prix du bien)
                </span>
              </div>
              {/* FRAIS HONORAIRE  */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="">Honoraires :</span>
                  <span className="font-bold">
                    {' '}
                    {(priceHonoraire / 100) * price} €{' '}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  (Environ {priceHonoraire}% du prix du bien)
                </span>
              </div>
            </div>

            {/* NOTARY / RATE edit value  */}
            <div className="flex flex-col justify-start mt-4">
              <div className="flex items-center">
                <span className="text-sm text-nowrap">Honoraires :</span>
                <input
                  className="ml-4 rounded text-right px-2 outline-none"
                  style={{ width: `${priceHonoraire.toString().length + 5}ch` }}
                  type="number"
                  min={0}
                  value={priceHonoraire}
                  step={0.1}
                  onChange={(e) =>
                    setPriceHonoraire(parseFloat(e.target.value))
                  }
                />
                <span className="text-sm">%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-nowrap">Frais de notaire :</span>
                <input
                  className="ml-4 rounded text-right px-2 outline-none"
                  style={{ width: `${notary.toString().length + 5}ch` }}
                  type="number"
                  min={0}
                  value={notary}
                  step={0.1}
                  onChange={(e) => setNotary(parseFloat(e.target.value))}
                />
                <span className="text-sm">%</span>
              </div>

              <div className="flex items-center ">
                <span className="text-sm text-nowrap">Taux d'intérêt :</span>
                <input
                  className="ml-4 rounded text-right px-2 outline-none"
                  style={{ width: `${rate.toString().length + 5}ch` }}
                  type="number"
                  min={0}
                  value={rate}
                  step={0.1}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                />
                <span className="text-sm">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
