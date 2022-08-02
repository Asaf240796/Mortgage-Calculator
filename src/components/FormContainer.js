import React, { useState } from "react";
import * as Styled from "../style/FormContainer.style";
import numeral from "numeral";
//Global Style
import GlobalStyle from "./GlobalStyle";

const FormContainer = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setloanTerm] = useState("");
  const [loanApr, setloanApr] = useState("");
  const [monthlyPayments, setmonthlyPayments] = useState(0.0);

  const submitCalculation = async (e) => {
    e.preventDefault();

    //validate fields
    const validatePrice = await validateField(purchasePrice, setPurchasePrice);
    const validatePayment = await validateField(downPayment, setDownPayment);
    const validateLoanTerm = await validateField(loanTerm, setloanTerm);
    const validateLoanApr = await validateField(loanApr, setloanApr);

    //Calculations
    if (
      validatePrice &&
      validatePayment &&
      validateLoanTerm &&
      validateLoanApr
    ) {
      console.log("form is fully validate");
      calculateValues();
    }
  };

  const calculateValues = () => {
    //M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    //P = principal loan amount
    //i = monthly interest rate
    //n = number of months requierd to repay the loan

    let principal = purchasePrice - downPayment;
    console.log("principal is:" + principal);
    let monthlyInterest = loanApr / 100 / 12;
    console.log("\nmonthlyInterest is:" + monthlyInterest);
    let numberOfPayments = loanTerm * 12;
    console.log("\nnumberOfPayments is:" + numberOfPayments);
    let monthlyPrice =
      (principal *
        [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) /
      [(1 + monthlyInterest) ** numberOfPayments - 1];
    console.log("\nmonthlyPrice is:" + monthlyPrice);

    setmonthlyPayments(monthlyPrice);
    console.log("total principal:" + { principal });
  };

  const validateField = (field, setValue) => {
    let int = parseFloat(field);

    if (field === "" || field === 0) {
      setValue({ ...field.values, error: "Please enter a value" });
      return false;
    } else if (isNaN(int)) {
      setValue({ ...field.values, error: "Please enter a number" });
      return false;
    } else {
      setValue(int);
      return true;
    }
  };

  return (
    <Styled.Container>
      <GlobalStyle />
      <h1>Mortgage Calculator</h1>
      <form>
        <Styled.InputSection>
          <label>Purchase Price</label>
          <Styled.Error>{purchasePrice.error}</Styled.Error>
          <input
            onChange={(e) => setPurchasePrice(e.target.value)}
            type="text"
          />
        </Styled.InputSection>
        <Styled.InputSection>
          <label>Down Payment</label>
          <Styled.Error>{downPayment.error}</Styled.Error>
          <input onChange={(e) => setDownPayment(e.target.value)} type="text" />
        </Styled.InputSection>
        <Styled.InputSection>
          <label>Loan Term(Years)</label>
          <Styled.Error>{loanTerm.error}</Styled.Error>
          <input onChange={(e) => setloanTerm(e.target.value)} type="text" />
        </Styled.InputSection>
        <Styled.InputSection>
          <label>APR(%)</label>
          <Styled.Error>{loanApr.error}</Styled.Error>
          <input onChange={(e) => setloanApr(e.target.value)} type="text" />
        </Styled.InputSection>
        <Styled.SubmitButton onClick={(e) => submitCalculation(e)}>
          Calaculate
        </Styled.SubmitButton>
      </form>
      <h3>
        Estimated Monthly Payments: {numeral(monthlyPayments).format("$0,0.00")}
      </h3>
    </Styled.Container>
  );
};

export default FormContainer;
