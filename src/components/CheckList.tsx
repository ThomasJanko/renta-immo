import { FaBuilding, FaChartLine, FaKey } from 'react-icons/fa'
import Property from './checklist/Property'

export default function CheckList() {
  return (
    <div className="">
      <div className="w-full text-center mx-auto">
        <div className="mx-auto w-4/5 flex items-center text-center font-bold">
          <div className="flex-grow border-t"></div>
          <span className="mx-4 text-amber-600 text-nowrap">
            INVESTISSEMENT IMMOBILIER
          </span>
          <div className="flex-grow border-t"></div>
        </div>

        <h1 className="uppercase font-bold mx-16">
          LA CHECK-LISTE INTELLIGENTE{' '}
        </h1>
      </div>

      <div className="relative mx-auto flex w-full mt-10">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-amber-600"></div>

        {/* Content Section */}
        <div className="ml-12 flex flex-col space-y-12 w-full">
          {/* PART 1 */}
          <div className="relative flex items-center space-x-4">
            <FaKey
              size={40}
              className="absolute left-[-50px] text-amber-600 bg-white p-2 rounded-full border border-amber-600"
            />
            <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full">
              <Property />
            </div>
          </div>

          {/* PART 2 */}
          <div className="relative flex items-center space-x-4">
            <FaBuilding className="absolute left-[-50px] text-amber-600 text-4xl bg-white p-1 rounded-full border border-amber-600" />
            <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full">
              <h2 className="font-bold text-lg text-amber-600">PART 2</h2>
              <p>Content for Part 2...</p>
            </div>
          </div>

          {/* PART 3 */}
          <div className="relative flex items-center space-x-4">
            <FaChartLine className="absolute left-[-50px] text-amber-600 text-4xl bg-white p-1 rounded-full border border-amber-600" />
            <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full">
              <h2 className="font-bold text-lg text-amber-600">PART 3</h2>
              <p>Content for Part 3...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
