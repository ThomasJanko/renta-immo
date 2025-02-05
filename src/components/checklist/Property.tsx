import { useState } from 'react'

const properties = [
  'Parking',
  'Ascensseur',
  'Terrasse',
  'Balcon',
  'Cave',
  'Duplex',
  'Triplex',
]

const sizes = ['Immeuble', 'Maison', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6']

export default function Property() {
  const [infos, setInfos] = useState({
    properties: [],
    size: '',
    surface: 0,
    location: {
      address: '',
      city: '',
      zip: '',
    },
  })
  return (
    <div>
      {/* radio buttons for properties */}
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold text-2xl text-amber-600">Bien</h2>
        <div className="flex flex-row gap-4">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={size}
                name={size}
                value={size}
                onChange={(e) => {
                  if (e.target.checked) {
                    setInfos((prevInfos: any) => ({
                      ...prevInfos,
                      properties: [...prevInfos.properties, size],
                    }))
                  } else {
                    setInfos((prevInfos) => ({
                      ...prevInfos,
                      properties: prevInfos.properties.filter(
                        (prop: string) => prop !== size,
                      ),
                    }))
                  }
                }}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>

        {/* textfields for location */}
        <h2 className="font-bold text-lg">Localisation</h2>
        <div className="flex flex-row gap-4 ">
          <input
            type="text"
            placeholder="Adresse"
            className="p-2 border border-gray-300 rounded-lg w-1/2"
            value={infos.location.address}
            onChange={(e) =>
              setInfos((prevInfos) => ({
                ...prevInfos,
                location: {
                  ...prevInfos.location,
                  address: e.target.value,
                },
              }))
            }
          />
          <input
            type="text"
            placeholder="Ville"
            className="p-2 border border-gray-300 rounded-lg w-1/4"
            value={infos.location.city}
            onChange={(e) =>
              setInfos((prevInfos) => ({
                ...prevInfos,
                location: {
                  ...prevInfos.location,
                  city: e.target.value,
                },
              }))
            }
          />
          <input
            type="text"
            placeholder="Code Postal"
            className="p-2 border border-gray-300 rounded-lg w-1/4"
            value={infos.location.zip}
            onChange={(e) =>
              setInfos((prevInfos) => ({
                ...prevInfos,
                location: {
                  ...prevInfos.location,
                  zip: e.target.value,
                },
              }))
            }
          />
        </div>

        {/* textfield for surface and properties */}
        <div className="flex flex-row gap-4 h-12">
          <div className="flex items-center gap-4">
            <span>Surface</span>
            <div className="rounded-full flex justify-center items-center w-14 h-14 border-3 border-amber-500 relative">
              {/* textfiled for surface */}
              <input
                type="number"
                min={0}
                className="w-full rounded-full p-2 border border-none outline-none no-arrows text-center"
                value={infos.surface}
                onChange={(e) =>
                  setInfos((prevInfos) => ({
                    ...prevInfos,
                    surface: parseFloat(e.target.value),
                  }))
                }
              />
              <div className="absolute -right-4 rounded-full border-none h-7 w-7 s-flex justify-center border-gray-300 items-center text-center">
                <span className="text-lg p-1 font-bold">m²</span>
              </div>
            </div>
            <div className="w-[1px] h-full bg-gray-500 ml-10" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {properties.map((property) => (
              <div key={property} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id={property}
                  name={property}
                  value={property}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInfos((prevInfos: any) => ({
                        ...prevInfos,
                        properties: [...prevInfos.properties, property],
                      }))
                    } else {
                      setInfos((prevInfos) => ({
                        ...prevInfos,
                        properties: prevInfos.properties.filter(
                          (prop: string) => prop !== property,
                        ),
                      }))
                    }
                  }}
                />
                <label htmlFor={property}>{property}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
