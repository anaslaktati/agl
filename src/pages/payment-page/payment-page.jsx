import React from "react";
import { Center, flexbox, Spinner } from "@chakra-ui/react";
import { Text, Button,  Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Layout from "../../components/layout/layout-component";
import { PaymentContainer } from "./payment-page.styles";

const PaymentPage = ({ currentUser, setCurrentUser}) => {
  return (
    <>
      {currentUser ? (
        <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
          <PaymentContainer>
            <div className="payment-row">
              <Text>Année 2024-2025</Text>
              <span>16000 DH</span>
            </div>
            <Link href="/payment/checkout">
              <Button
                rightIcon={<ExternalLinkIcon />}
                colorScheme="teal"
                mb={10}
                size="lg"
              >
                PAY NOW
              </Button>
            </Link>

            

            <div className="payment-row">
              <Text>Inscription</Text>
              <span>0</span>
            </div>
            
          </PaymentContainer>
        </Layout>
      ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
              size="xl"
              p="2rem"
          />
        </div>
      )}
    </>
  );
};

export default PaymentPage;
