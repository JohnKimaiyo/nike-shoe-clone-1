import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../App.css";

export default function SummaryCard({ items, amount }) {
  return (
    <Card className="card" variant="eleveation" elevation={8}>
      <CardContent>
        <Typography className="title" variant="h3" gutterBottom>
          Order Sumary
        </Typography>

        <Typography className="summary-text" color="textsSeonady">
          Total Items:<strong className="summary-text">{items}</strong>
        </Typography>
        <Typography className="summary-text" variant="h5" gutterBottom>
          Totol Amout:<strong className="summary-text">${amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="hvr-grow about-buton" to="/checkout">
            Proceed to checkout
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
