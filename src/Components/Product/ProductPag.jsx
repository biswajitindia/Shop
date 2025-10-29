

import React from "react";

const productData = [
  {
    ITEM_NUMBER: "48ADLINER",
    SUPPLIER_ITEM_NUMBER: "ADLINER",
    VENDOR_PREFIX: "48",
    VENDOR_NAME: "ATTENDS HEALTHCARE PRODUCTS",
    LONG_DESCRIPTION: 'Attends Discreet Panty Liners 6" Long',
    SHORT_DESCRIPTION: 'Attends Discreet Panty Liners 6" Long',
    COST: 70.5431,
    UOM: "CA",
    UOM_TO_EACH: 672,
    UOM_DESCRIPTION: "Case",
    HCPCS: "A4520",
    MEDICARE_QTY_EXTENSION: 672,
    IMAGE_NAME:
      "https://up.yimg.com/ib/th/id/OIP.dDsytjYybiD5_RxNBrHaGgHaHa?pid=Api&rs=1&c=1&qlt=95&w=105&h=105",
    DROPSHIP_FLAG: "N",
    SPECIAL_ORDER_FLAG: "N",
    OVERWEIGHT_FLAG: "Yes",
    WEIGHT: 6.55,
    WEIGHT_UOM: "LB",
    DIMENSIONS: "11 X 9.25 X 8.25",
    DIMENSIONS_UOM: "Inch",
    SEGMENT1: "Incontinence",
    SEGMENT2: "Pads & Liners",
    SPECIFICATIONS: {
      Brand: "Attends",
      ModelName: "Discreet Panty Liners 6\"",
      Type: "Pantyliner",
      Size: "Regular",
      UsageType: "Disposable",
      IdealUsage: "Light bladder leakage, everyday freshness",
      Wings: "No",
      Scented: "No"
    }
  }
];

const ProductPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="max-w-5xl bg-white shadow-md rounded-lg p-6 grid md:grid-cols-2 gap-8">
        {productData.map((item) => (
          <React.Fragment key={item.ITEM_NUMBER}>
            {/* Left: Product Image + Buttons */}
            <div className="flex flex-col items-center">
              <img
                src={item.IMAGE_NAME}
                alt={item.SHORT_DESCRIPTION}
                className="rounded-md w-full max-w-sm border"
              />
              <div className="flex gap-4 mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>
                <p className="text-black w-full" >{item.SHORT_DESCRIPTION}</p>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2 text-gray-800">
                  {item.LONG_DESCRIPTION}
                </h1>
                <p className="text-sm text-gray-500 mb-4">{item.VENDOR_NAME}</p>

                <h2 className="text-3xl font-semibold text-green-600 mb-2">
                  ${item.COST.toFixed(2)}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  UOM: {item.UOM_DESCRIPTION}
                </p>

                <div className="mt-4 space-y-1">
                  <p className="text-gray-700">
                    <span className="font-semibold">HCPCS:</span> {item.HCPCS}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Weight:</span> {item.WEIGHT}{" "}
                    {item.WEIGHT_UOM}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Dimensions:</span>{" "}
                    {item.DIMENSIONS} {item.DIMENSIONS_UOM}
                  </p>
                </div>

                {/* Specifications Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Specifications
                  </h3>
                  <div className="bg-gray-50 rounded-md border border-gray-200 p-4">
                    <h4 className="font-semibold text-gray-700 mb-3">General</h4>
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        {Object.entries(item.SPECIFICATIONS).map(([key, value]) => (
                          <tr key={key} className="border-b last:border-none">
                            <td className="py-2 w-1/3 text-gray-500">{key}</td>
                            <td className="py-2 font-medium">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-3 text-sm text-gray-500">
                <p>
                  <span className="font-semibold">Overweight:</span>{" "}
                  {item.OVERWEIGHT_FLAG}
                </p>
                <p>
                  <span className="font-semibold">Special Order:</span>{" "}
                  {item.SPECIAL_ORDER_FLAG}
                </p>
                <p>
                  <span className="font-semibold">Dropship:</span>{" "}
                  {item.DROPSHIP_FLAG}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
