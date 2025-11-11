import React from "react";

export default function IslamicSharia() {
  return (
    <div className="bg-green-50 p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">Islamic Sharia Compliance</h2>
      <p>
        GoldChain is fully compliant with Islamic Sharia principles. Our platform:
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
        <li>Does not offer or support interest-bearing loans (Riba).</li>
        <li>Ensures all transactions are transparent and fair.</li>
        <li>Supports Halal investments backed by real gold.</li>
        <li>Prevents speculative or non-permissible financial practices.</li>
      </ul>
      <p className="mt-4 text-gray-600 italic">
        All users can safely trade and invest according to Islamic financial principles.
      </p>
    </div>
  );
}
