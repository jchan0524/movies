import {  useState } from "react";
import { Table, Card } from "react-bootstrap";

export default function AddTable(props) {
  const [money] = useState(props);

  const [, setDate] = useState("");
  const [, setId] = useState("");
  const [, setAmount] = useState("");
  const [, setLoan] = useState("");
  const [, setBalance] = useState("");

  function updateTable(id, date, amount, loan, balance) {
    setId(id);
    setAmount(amount);
    setDate(date);
    setLoan(loan);
    setBalance(balance);
  }

  return (
    <Card className="pl-5 pr-10 pb-3 pt-3">
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
          {money.money.map((data) => {
            return (
              <tr key={data.key}>
                <td>{data.date}</td>
                <td>{data.amount.toLocaleString("en-US")}</td>
                <td>{data.loan.toLocaleString("en-US")}</td>
                <td>{data.balance.toLocaleString("en-US")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}
