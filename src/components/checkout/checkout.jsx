import React, { useState } from "react";

import { Input, Heading, Link } from "@chakra-ui/react";

import {
  CheckoutComponentContainer,
  CheckoutButton,
} from "./checkout.styles.jsx";

const CheckoutComponent = () => {
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    amount: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setInputData({ ...inputData, [name]: value });
  };

  const { name, email, amount } = inputData;

  const publicKey = "pk_test_a2a8912dc2ab1d13b8e2bb2e34403d40aee484ed";

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Valider",
    onSuccess: () => alert("You have successfully paid your dues!!"),
    onClose: () => alert("You haven't completed your payment!!"),
  };

  return (
    <CheckoutComponentContainer>
      <Heading mb={5} textAlign="center">Page de paiement</Heading>
      <Heading size="md" mb={5}>
        nom
      </Heading>
      <Input
        mb={5}
        size="lg"
        variant="outline"
        placeholder="nom complet"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <Heading size="md" mb={5}>
        Email
      </Heading>
      <Input
        variant="outline"
        placeholder="Email"
        size="lg"
        mb={5}
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Heading size="md" mb={5}>
        montant
      </Heading>
      <Input
        size="lg"
        mb={8}
        type="number"
        variant="outline"
        placeholder="montant en DH"
        name="amount"
        value={amount}
        onChange={handleChange}
      />
      <div className="payment-buttons">
        <CheckoutButton className="paystack-button" {...componentProps} />
      </div>
    </CheckoutComponentContainer>
  );
};

export default CheckoutComponent;
