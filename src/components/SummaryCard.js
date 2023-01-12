import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../App.css";

export default function SummaryCard({ items, amount }) {
  return (
    <Card className="card" variant="elevation" elavation={8}>
      <CardContent>
        <Typography className="title" variant="h3" gutterBootom>
          Order Summary
        </Typography>
        <Typography clssName="summary-text" color="textSecpndary">
          ToTal Items :<strong classname="summary-text">{items}</strong>
        </Typography>
        <Typography classname="summary-text" variant="h5" gutterBottom>
          Total Amount:<strong className="summary-text">${amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="hvr-grow about-button" to="/checkout">
            Proceed to checkout
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
