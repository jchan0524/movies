import { useEffect, useState } from "react";
import { Table, Card, NavItem } from "react-bootstrap";

export default function AddTable(props) {
  const [money, setMoney] = useState(props);

  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [loan, setLoan] = useState("");
  const [balance, setBalance] = useState("");

  

  function updateTable(id, date, amount, loan, balance) {
    setId(id);
    setAmount(amount);
    setDate(date);
    setLoan(loan);
    setBalance(balance);
  }

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
