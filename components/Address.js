// Address Object
// {
//   "address_line_1": "string",
//   "address_line_2": "string",
//   "address_line_3": "string",
//   "locality": "string",
//   "sublocality": "string",
//   "administrative_district_level_1": "string",
//   "postal_code": "string",
//   "country": "string"
// }


export default function Address({ address }) {
  return (
    <>
      <div className="whitespace-nowrap">
        { (address.addressLine1 || address.addressLine2 || address.addressLine3) ? 
          <div className="p-1">
            <div className="text-sm text-gray-900">{`${
              address.addressLine1 ? address.addressLine1 : ""} ${
              address.addressLine2 ? address.addressLine2 : ""} ${
              address.addressLine3 ? address.addressLine3 : ""}`}</div>
          </div> : <></>
        }
        { (address.locality || address.sublocality || address.administrative_district_level_1) ? 
          <div className="p-1">
            <div className="text-sm text-gray-900">{`${
              address.locality ? address.locality : ""} ${
              address.sublocality ? address.sublocality : ""} ${
              address.administrativeDistrictLevel1 ? address.administrativeDistrictLevel1 : ""}`}</div>
          </div> : <></>
        }
        { (address.postal_code || address.country) ?
          <div className="p-1">
            <div className="text-sm text-gray-900">{`${address.postalCode ? address.postalCode: ""} ${address.country ? address.country : ""}`}</div>
          </div>: <></>
        }
      </div>
    </>
  )
}
