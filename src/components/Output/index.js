import React from "react";
import { Wrapper, Content, Title, Button } from "./styled";

export default ({ buttonAction, disabled, title, buttonLabel }) => (
  <Wrapper disabled={disabled}>
    <Content>
      <Title> {title}</Title>
      <Button onClick={buttonAction}>{buttonLabel}</Button>
    </Content>
  </Wrapper>
);

// import React from "react";
// import "./styled.sass";

// export default ({ buttonAction, disabled, title, buttonLabel }) => (
//   <div className="game-result" disabled={disabled}>
//     <div className="content">
//       <h1 className="result-title"> {title}</h1>
//       <button className="restart" onClick={buttonAction}>
//         {buttonLabel}
//       </button>
//     </div>
//   </div>
// );
