import React from "react";
import { Man, Head, Neck, Arm, Hand, Corpus, Leg, Chest, Foot } from "./styled";

// import bar from "../../Images/imgs/bar.png";
// import corpus from "../../Images/imgs/corpus.png";
// import flow from "../../Images/imgs/flow.png";
// import head from "../../Images/imgs/head.png";
// import leftArm from "../../Images/imgs/left-arm.png";
// import leftFoot from "../../Images/imgs/left-foot.png";
// import leftHand from "../../Images/imgs/left-hand.png";
// import leftLeg from "../../Images/imgs/left-leg.png";
// import neck from "../../Images/imgs/neck.png";
// import rightArm from "../../Images/imgs/right-arm.png";
// import rightFoot from "../../Images/imgs/right-foot.png";
// import rightHand from "../../Images/imgs/right-hand.png";
// import rightLeg from "../../Images/imgs/right-leg.png";

const Visibile = ({ visible, component: Component, ...rest }) =>
  visible ? <Component {...rest} /> : null;

export default ({ failedLetterCount }) => (
  <Man>
    <Visibile visible={failedLetterCount >= 1} component={Head}>
      <Head />
    </Visibile>
    <Visibile visible={failedLetterCount >= 2} component={Neck} />
    <Visibile visible={failedLetterCount >= 3} component={Corpus}>
      <Visibile visible={failedLetterCount >= 3} component={Chest}>
        <Visibile visible={failedLetterCount >= 4} component={Arm}>
          <Visibile visible={failedLetterCount >= 6} component={Hand} />
        </Visibile>
        <Visibile visible={failedLetterCount >= 8} component={Leg}>
          <Visibile visible={failedLetterCount >= 10} component={Foot} />
        </Visibile>
      </Visibile>
      <Visibile visible={failedLetterCount >= 3} component={Chest} right>
        <Visibile visible={failedLetterCount >= 5} component={Arm} right>
          <Visibile visible={failedLetterCount >= 7} component={Hand} />
        </Visibile>
        <Visibile visible={failedLetterCount >= 9} component={Leg} right>
          <Visibile visible={failedLetterCount >= 11} component={Foot} right />
        </Visibile>
      </Visibile>
    </Visibile>
  </Man>
);

// import React from "react";
// import { Man, Head, Neck, Arm, Hand, Corpus, Leg, Chest, Foot } from "./styled";
// import "./styled.sass";

// import bar from "../../Images/imgs/bar.png";
// import corpus from "../../Images/imgs/corpus.png";
// import flow from "../../Images/imgs/flow.png";
// import head from "../../Images/imgs/head.png";
// import leftArm from "../../Images/imgs/left-arm.png";
// import leftFoot from "../../Images/imgs/left-foot.png";
// import leftHand from "../../Images/imgs/left-hand.png";
// import leftLeg from "../../Images/imgs/left-leg.png";
// import neck from "../../Images/imgs/neck.png";
// import rightArm from "../../Images/imgs/right-arm.png";
// import rightFoot from "../../Images/imgs/right-foot.png";
// import rightHand from "../../Images/imgs/right-hand.png";
// import rightLeg from "../../Images/imgs/right-leg.png";

// const Visibile = ({ visible, div: div, ...rest }) =>
//   visible ? <div {...rest} /> : null;

// export default ({ failedLetterCount }) => (
//   <div className="man">
//     <Visibile visible={failedLetterCount >= 1} className="head">
//       <img className="head" src={head} alt="head" />
//     </Visibile>

//     <Visibile visible={failedLetterCount >= 2}>
//       <img className="neck" src={neck} alt="neck" />
//     </Visibile>

//     <Visibile visible={failedLetterCount >= 3}>
//       <img className="corpus" src={corpus} alt="corpus" />
//       <Visibile visible={failedLetterCount >= 3}>
//         <img className="corpus" src={corpus} alt="corpus" />
//         <Visibile visible={failedLetterCount >= 4} className="left-arm">
//           <img className="left-arm" src={leftArm} alt="leftArm" />

//           <Visibile visible={failedLetterCount >= 6}>
//             <img className="left-hand" src={leftHand} alt="leftHand" />
//           </Visibile>
//         </Visibile>
//         <Visibile visible={failedLetterCount >= 8}>
//           <img className="left-leg" src={leftLeg} alt="leftLeg" />

//           <Visibile visible={failedLetterCount >= 10}>
//             <img className="left-foot" src={leftFoot} alt="leftLeg" />
//           </Visibile>
//         </Visibile>
//       </Visibile>
//       <Visibile visible={failedLetterCount >= 3} right>
//         <img className="corpus" src={corpus} alt="corpus" />
//         <Visibile visible={failedLetterCount >= 5} right>
//           <img className="right-arm" src={rightArm} alt="rightArm" />
//           <Visibile visible={failedLetterCount >= 7}>
//             <img className="right-hand" src={rightHand} alt="rightHand" />
//           </Visibile>
//         </Visibile>
//         <Visibile
//           visible={failedLetterCount >= 9}
//           right
//         >
//           <img className="right-leg" src={rightLeg} alt="rightLeg" />
//           <Visibile visible={failedLetterCount >= 11} right>
//             <img className="right-foot" src={rightFoot} alt="rightFoot" />
//           </Visibile>
//         </Visibile>
//       </Visibile>
//     </Visibile>
//   </div>
// );
