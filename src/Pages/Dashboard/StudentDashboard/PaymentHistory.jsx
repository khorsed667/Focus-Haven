import useFetch from "../../../hooks/useFetch";

const PaymentHistory = () => {

  const url = 'http://localhost:5000/payments';
  const [data] = useFetch(url);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Class Name</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic content */}
          {
            data.map((payments, index) => <tr key={index}>
              <td className="px-4 py-2 border">2024-06-10</td>
              <td className="px-4 py-2 border">{payments.amount} $</td>
              <td className="px-4 py-2 border">{payments.className}</td>
              <td className="px-4 py-2 border">{payments.paymentStatus}</td>
            </tr>)
          }
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
