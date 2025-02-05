import { useState } from 'react'

export default function Rent() {
  const [alreadyRented, setAlreadyRented] = useState('')
  const [furniture, setFurniture] = useState('')
  const [rentalTension, setRentalTension] = useState('')
  const [pricePerMeterMarketn, setPricePerMeterMarket] = useState(0)
  const [pricePerMeterReal, setPricePerMeterReal] = useState(0)
  const [charges, setCharges] = useState(0)

  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold text-2xl text-amber-600">Loyers</h2>
        <div className="flex flex-col gap-2 w-4/6 text-nowrap">
          <div className="flex items-center gap-4 justify-between w-full">
            <span>Le bien est déjà loué :</span>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="oui"
                name="alreadyRented"
                value="Oui"
                onChange={(e) => setAlreadyRented(e.target.value)}
              />
              <label htmlFor="oui">Oui</label>
              <input
                type="radio"
                id="non"
                name="alreadyRented"
                value="Non"
                onChange={(e) => setAlreadyRented(e.target.value)}
              />
              <label htmlFor="non">Non</label>
              <input
                type="radio"
                id="partiellement"
                name="alreadyRented"
                value="Partiellement"
                onChange={(e) => setAlreadyRented(e.target.value)}
              />
              <label htmlFor="partiellement">Partiellement</label>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <span>Bail meublé : </span>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="oui"
                name="furniture"
                value="Oui"
                onChange={(e) => setFurniture(e.target.value)}
              />
              <label htmlFor="oui">Oui</label>
              <input
                type="radio"
                id="non"
                name="furniture"
                value="Non"
                onChange={(e) => setFurniture(e.target.value)}
              />
              <label htmlFor="non">Non</label>
              <input
                type="radio"
                id="noBail"
                name="furniture"
                value="noBail"
                onChange={(e) => setFurniture(e.target.value)}
              />
              <label htmlFor="noBail">Aucun bail en cours</label>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <span>Tension locative :</span>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="bonne"
                name="rentalTension"
                value="Bonne"
                onChange={(e) => setRentalTension(e.target.value)}
              />
              <label htmlFor="bonne">Bonne</label>
              <input
                type="radio"
                id="moyenne"
                name="rentalTension"
                value="Moyenne"
                onChange={(e) => setRentalTension(e.target.value)}
              />
              <label htmlFor="moyenne">Moyenne</label>
              <input
                type="radio"
                id="basse"
                name="rentalTension"
                value="basse"
                onChange={(e) => setRentalTension(e.target.value)}
              />
              <label htmlFor="basse">basse</label>
            </div>
          </div>
        </div>
        {/* 'INPUTS ' */}
        <div className="flex flex-row justify-center items-center gap-4 mt-4">
          <div className="flex flex-col gap-4">
            <div className="rounded-md bg-gray-400 px-2 py-1 text-white text-center w-fit self-end">
              Prix du m² à la location (valeur marché)
            </div>
            <div className="rounded-md bg-gray-400 px-2 py-1 text-white text-center w-fit self-end">
              Prix du m² à la location réel
            </div>
            <div className="rounded-md bg-gray-400 px-2 py-1 text-white text-center w-fit self-end">
              Charges mensuelles
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-gray-400 rounded-md px-4 py-1">
              <input
                className="no-arrows p-2 outline-none text-center w-24"
                type="number"
                id="pricePerMeterMarket"
                value={pricePerMeterMarketn}
                onChange={(e) =>
                  setPricePerMeterMarket(parseInt(e.target.value))
                }
              />
              <span>
                €/m<sup>2</sup>
              </span>
            </div>
            <div className="border border-gray-400 rounded-md px-4 py-1 border-t-0 border-b-0">
              <input
                className="no-arrows p-2 outline-none text-center w-24"
                type="number"
                id="pricePerMeterReal"
                value={pricePerMeterReal}
                onChange={(e) => setPricePerMeterReal(parseInt(e.target.value))}
              />
              <span>
                €/m<sup>2</sup>
              </span>
            </div>
            <div className="border border-gray-400 rounded-md px-4 py-1">
              <input
                className="no-arrows p-2 outline-none text-center w-24"
                type="number"
                id="charges"
                value={charges}
                onChange={(e) => setCharges(parseInt(e.target.value))}
              />
              <span>€/mois</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <span>
              voir{' '}
              <a href="https://www.locservice.fr/tensiometre">
                https://www.locservice.fr/tensiometre
              </a>
            </span>
            <span>
              voir <a href="www.meilleuragent.com">www.meilleuragent.com</a>
            </span>
            <span>si le bien est loué</span>
          </div>
        </div>
      </div>
    </div>
  )
}
