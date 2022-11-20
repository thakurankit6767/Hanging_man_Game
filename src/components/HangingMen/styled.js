import styled, { css } from "styled-components";
import bar from "../../Images/imgs/bar.png";
import corpus from "../../Images/imgs/corpus.png";
import flow from "../../Images/imgs/flow.png";
import head from "../../Images/imgs/head.png";
import leftArm from "../../Images/imgs/left-arm.png";
import leftFoot from "../../Images/imgs/left-foot.png";
import leftHand from "../../Images/imgs/left-hand.png";
import leftLeg from "../../Images/imgs/left-leg.png";
import neck from "../../Images/imgs/neck.png";
import rightArm from "../../Images/imgs/right-arm.png";
import rightFoot from "../../Images/imgs/right-foot.png";
import rightHand from "../../Images/imgs/right-hand.png";
import rightLeg from "../../Images/imgs/right-leg.png";

export const Man = styled.div`
  position: relative;
  margin: 70px 0 0 77.5px;
  width: 100px;
`;
export const Head = styled.div`
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  width: 80px;
  height: 106px;
  background-image: url(${head});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Neck = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 80px;
  left: 0;
  right: 0;
  width: 20px;
  height: 40px;
  background-image: url(${neck});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Corpus = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 105.5px;
  left: 0;
  right: 0;
  width: 60px;
  height: 95px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${corpus});
`;

export const Chest = styled.div`
  display: inline-block;
  width: 30px;
  height: 70px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px 0 0 0;
  ${({ right }) =>
    right &&
    css`
      border-radius: 0 5px 0 0;
    `}
`;
export const Arm = styled.div`
  position: relative;
  transform: rotate(-1deg);
  margin-left: -35px;
  margin-top: 5px;
  width: 50px;
  height: 80px;
  background-image: url(${leftArm});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  ${({ right }) =>
    right &&
    css`
      transform: rotate(-1deg);
      margin-left: 16px;
      margin-top: 5px;
      background-image: url(${rightArm});
    `}
`;
export const Hand = styled.div`
  position: absolute;
  bottom: 10px;
  border-radius: 0 0 50% 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 15px;
  height: 25px;
  background-image: url(${leftHand});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Leg = styled.div`
  background-image: url(${rightLeg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 70px;
  width: 25px;
  margin-top: 7px;
  margin-left: -5px;
  transform: rotate(12deg);
  ${({ right }) =>
    right &&
    css`
      transform: rotate(12deg);
      margin-left: 4px;
    `}
`;
export const Foot = styled.div`
  position: absolute;
  bottom: 5px;
  border-radius: 0 0 50% 50%;
  left: -7px;
  right: 0;
  margin: 0 auto;
  width: 40px;
  height: 15px;
  background-image: url(${rightFoot});
  background-repeat: no-repeat;
  background-size: contain;
  ${({ right }) =>
    right &&
    css`
      left: 5px;
    `}
`;
