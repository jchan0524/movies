import { useState } from "react";
import { Table, Card } from "react-bootstrap";

export default function AddTable(props) {
  const [date, setDate] = useState(props.date);
  const [amount, setAmount] = useState(props.amount); 
  const [loan, setLoan] = useState(props.loan); 
  const [balance, setBalance] = useState(props.balance); 



  return (
    <Card className="w-100">
      <Table borderless>
        <thead>
          <tr>
            <th>Payment Date</th>
            <th>Payment Amount</th>
            <th>Loan</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}
