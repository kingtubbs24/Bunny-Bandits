import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { CandyMachine } from "./candy-machine";

export const CTAButton = styled(Button)`
  display: inline-block !important;
  outline: none !important;
  cursor: pointer !important;
  font-size: 14px !important;
  line-height: 1 !important;
  border-radius: 500px !important;
  transition-property: background-color, border-color, color, box-shadow, filter !important;
  transition-duration: 0.3s !important;
  border: 1px solid transparent !important;
  letter-spacing: 2px !important;
  min-width: 160px !important;
  text-transform: uppercase !important;
  white-space: normal !important;
  font-weight: 700 !important;
  text-align: center !important;
  padding: 17px 48px !important;
  color: #fff !important;
  background-color: #f0c06c !important;
  height: 48px !important;
  :hover {
    transform: scale(1.04) !important;
    background-color: #f0c06c !important;
  }
`;

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
  isActive,
  isSoldOut,
}: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachine | undefined;
  isMinting: boolean;
  isActive: boolean;
  isSoldOut: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setIsVerifying(false);
    if (
      gatewayStatus === GatewayStatus.COLLECTING_USER_INFORMATION &&
      clicked
    ) {
      // when user approves wallet verification txn
      setIsVerifying(true);
    } else if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      console.log("Verified human, now minting...");
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  return (
    <CTAButton
      disabled={
        candyMachine?.state.isSoldOut ||
        isSoldOut ||
        isMinting ||
        !isActive ||
        isVerifying
      }
      onClick={async () => {
        if (
          isActive &&
          candyMachine?.state.gatekeeper &&
          gatewayStatus !== GatewayStatus.ACTIVE
        ) {
          console.log("Requesting gateway token");
          setClicked(true);
          await requestGatewayToken();
        } else {
          console.log("Minting...");
          await onMint();
        }
      }}
      variant="contained"
    >
      {!candyMachine ? (
        "CONNECTING..."
      ) : candyMachine?.state.isSoldOut || isSoldOut ? (
        "SOLD OUT"
      ) : isActive ? (
        isVerifying ? (
          "VERIFYING..."
        ) : isMinting ? (
          <CircularProgress />
        ) : (
          "MINT"
        )
      ) : candyMachine?.state.goLiveDate ? (
        "SOON"
      ) : (
        "UNAVAILABLE"
      )}
    </CTAButton>
  );
};
