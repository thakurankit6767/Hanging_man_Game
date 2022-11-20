import React, { useState, useRef } from "react";
import Letters from "./components/Letters";
import Missed from "./components/Missed";
import Output from "./components/Output";
import HangingMen from "./components/HangingMen";
import { SecondDiv, Bar, BlueDiv, InDiv, MainDiv } from "./styled";
import hangmangameover from "../src/Images/sources/hangman-game-over.png";

export default () => {
  const [wordApi, setWordFromAPI] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [resultBox, setResultBox] = useState({
    title: "HangMan Game",
    buttonLabel: "Start Game",
  });
  const [failedLetters, setFailedLetters] = useState([]);
  const [corrWords, setCorrectLetters] = useState([]);
  const [word, setWord] = useState("");
  const inputRef = useRef(null);

  const handOnKeyPress = (event) => {
    let keyChar = event.key;
    event.preventDefault();
    if (
      wordApi.length > 0 &&
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".indexOf(keyChar) >
        -1
    ) {
      keyChar = keyChar.toUpperCase();
      if (
        !failedLetters.find((x) => x === keyChar) &&
        !corrWords.find((x) => x === keyChar)
      ) {
        let count = 0;
        for (let i = 0; i < wordApi.length; i++) {
          if (keyChar === wordApi[i]) {
            count++;
            const newCorrectLetters = corrWords.concat([keyChar]);
            setCorrectLetters(newCorrectLetters);
            countCorrectLetters(newCorrectLetters);
            return;
          }
        }
        if (count === 0) {
          if (failedLetters.length === 10) {
            setResultBox({
              disabled: false,
              title: `Game Over { word: ${word} }`,
              buttonLabel: "Restart Game",
            });
            setIsGameOver(true);
          }
          setFailedLetters(failedLetters.concat([keyChar]));
        }
      }
    }
  };

  const emptyBoxList = () => {
    let arrayOfSpace = [];
    if (wordApi.length > 0) {
      const arraySize = wordApi.length;
      for (let x = 0; x < 12 - arraySize; x++) {
        arrayOfSpace.push(" ");
      }
    }
    return arrayOfSpace;
  };

  const startGame = () => {
    setResultBox({
      disabled: true,
    });
    setFailedLetters([]);
    setCorrectLetters([]);
    setWordFromAPI([]);
    setWord("");
    getDataFromAPI();
    setIsGameOver(false);
    inputRef.current.focus();
  };

  const wordSetter = (word) => {
    let wordArr = word.toUpperCase().split("");
    wordArr.map((item) => {
      item === "-" && wordArr.splice(wordArr.indexOf("-"), 1);
      item === " " && wordArr.splice(wordArr.indexOf(" "), 1);
      return item;
    });

    setWordFromAPI(wordArr);
    setWord(word);
  };

  const getDataFromAPI = () => {
    const params = {
      hasDictionaryDef: true,
      minCorpusCount: 0,
      maxCorpusCount: -1,
      maxDictionaryCount: -1,
      minLength: 3,
      maxLength: 12,
      api_key: "7aa2aa0118msh9fe8f019c6bedd6p1afa1ejsn24eaa66f5038",
    };
    let url = new URL("https://wordsapiv1.p.rapidapi.com/words");
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        const responseStatus = response.status;
        if (responseStatus >= 400 && responseStatus <= 500) {
          throw Error("API error, creating random word locally!");
        }
        return response.json();
      })
      .then((response) => {
        wordSetter(response.word);
        return response.status;
      })
      .catch((error) => {
        console.log(error);
        const vegetables = [
          "Mint",
          "Ginger",
          "Garlic",
          "Corn",
          "Pumpkin",
          "Tomato",
          "Onion",
          "Radish",
        ];
        const randomFruit = vegetables[Math.floor(Math.random() * vegetables.length)];
        wordSetter(randomFruit);
      });
  };

  const countCorrectLetters = (corrWords) => {
    let uniqueLetters = filterUniqueItems(wordApi);
    if (corrWords.length === uniqueLetters.length) {
      setResultBox({
        disabled: false,
        title: "You Won Game! ",
        buttonLabel: "Restart Game",
      });
      setIsGameOver(true);
    }
  };

  const filterUniqueItems = (items) => {
    const obj = {},
      uniqueItems = [];
    for (var i = 0, l = items.length; i < l; ++i) {
      if (obj.hasOwnProperty(items[i])) {
        continue;
      }
      uniqueItems.push(items[i]);
      obj[items[i]] = 1;
    }
    return uniqueItems;
  };

  return (
    <MainDiv>
      <SecondDiv>
        <Bar />

        <InDiv
          ref={inputRef}
          {...(!isGameOver && { onKeyDown: handOnKeyPress })}
        />
      </SecondDiv>
      <HangingMen failedLetterCount={failedLetters.length} />

      <Missed failedLetters={failedLetters} />
      <Letters
        wordApi={wordApi}
        corrWords={corrWords}
        blank_space={emptyBoxList()}
      />

      <BlueDiv />
      <Output
        title={resultBox.title}
        disabled={resultBox.disabled}
        buttonLabel={resultBox.buttonLabel}
        buttonAction={startGame}
      >
        <img
          className="hangmangameover"
          src={hangmangameover}
          alt="hangmangameover"
        />
      </Output>
    </MainDiv>
  );
};

// import React, { useState, useRef } from "react";
// import { Button } from "./components/Output/styled";
// import AnswerBox from "./components/AnswerBox";
// import FailBox from "./components/FailBox";
// import Output from "./components/Output";
// import HangingMen from "./components/HangingMen";
// import "./styled.css";
// import pipe from "./Images/imgs/bar.png";

// export default () => {
//   const [wordApi, setWordFromAPI] = useState([]);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [resultBox, setResultBox] = useState({
//     disabled: false,
//     title: "Hangman",
//     buttonLabel: "Start Game",
//   });
//   const [failedLetters, setFailedLetters] = useState([]);
//   const [corrWords, setCorrectLetters] = useState([]);
//   const [word, setWord] = useState("");
//   const inputRef = useRef(null);

//   const handOnKeyPress = (event) => {
//     let keyChar = event.key;
//     event.preventDefault();
//     if (
//       wordApi.length > 0 &&
//       "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".indexOf(keyChar) >
//         -1
//     ) {
//       keyChar = keyChar.toUpperCase();
//       if (
//         !failedLetters.find((x) => x === keyChar) &&
//         !corrWords.find((x) => x === keyChar)
//       ) {
//         let count = 0;
//         for (let i = 0; i < wordApi.length; i++) {
//           if (keyChar === wordApi[i]) {
//             count++;
//             const newCorrectLetters = corrWords.concat([keyChar]);
//             setCorrectLetters(newCorrectLetters);
//             countCorrectLetters(newCorrectLetters);
//             return;
//           }
//         }
//         if (count === 0) {
//           if (failedLetters.length === 10) {
//             setResultBox({
//               disabled: false,
//               title: `Game Over { word: ${word} }`,
//               buttonLabel: "Restart Game",
//             });
//             setIsGameOver(true);
//           }
//           setFailedLetters(failedLetters.concat([keyChar]));
//         }
//       }
//     }
//   };

//   const emptyBoxList = () => {
//     let arrayOfSpace = [];
//     if (wordApi.length > 0) {
//       const arraySize = wordApi.length;
//       for (let x = 0; x < 12 - arraySize; x++) {
//         arrayOfSpace.push(" ");
//       }
//     }
//     return arrayOfSpace;
//   };

//   const startGame = () => {
//     setResultBox({
//       disabled: true,
//     });
//     setFailedLetters([]);
//     setCorrectLetters([]);
//     setWordFromAPI([]);
//     setWord("");
//     getDataFromAPI();
//     setIsGameOver(false);
//     inputRef.current.focus();
//   };

//   const continueGame = () => {
//     setResultBox({
//       disabled: true,
//     });
//     inputRef.current.focus();
//   };

//   const wordSetter = (word) => {
//     let wordArr = word.toUpperCase().split("");
//     wordArr.map((item) => {
//       item === "-" && wordArr.splice(wordArr.indexOf("-"), 1);
//       item === " " && wordArr.splice(wordArr.indexOf(" "), 1);
//       return item;
//     });

//     setWordFromAPI(wordArr);
//     setWord(word);
//   };

//   const getDataFromAPI = () => {
//     const params = {
//       hasDictionaryDef: true,
//       minCorpusCount: 0,
//       maxCorpusCount: -1,
//       maxDictionaryCount: -1,
//       minLength: 3,
//       maxLength: 12,
//       api_key: "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
//     };
//     let url = new URL("http://api.wordnik.com/v4/words.json/randomWord");
//     Object.keys(params).forEach((key) =>
//       url.searchParams.append(key, params[key])
//     );
//     fetch(url, {
//       method: "GET",
//     })
//       .then((response) => {
//         const responseStatus = response.status;
//         if (responseStatus >= 400 && responseStatus <= 500) {
//           throw Error("API error, creating random word localy!");
//         }
//         return response.json();
//       })
//       .then((response) => {
//         wordSetter(response.word);
//         return response.status;
//       })
//       .catch((error) => {
//         console.log(error);
//         const vegetables = [
//           "Apple",
//           "Orange",
//           "Pear",
//           "Lemon",
//           "Kiwi",
//           "Watermelon",
//           "Strawberry",
//           "Banana",
//         ];
//         const randomFruit = vegetables[Math.floor(Math.random() * vegetables.length)];
//         wordSetter(randomFruit);
//       });
//   };

//   const countCorrectLetters = (corrWords) => {
//     let uniqueLetters = filterUniqueItems(wordApi);
//     if (corrWords.length === uniqueLetters.length) {
//       setResultBox({
//         disabled: false,
//         title: "★ You Won! ★",
//         buttonLabel: "Restart Game",
//       });
//       setIsGameOver(true);
//     }
//   };

//   const filterUniqueItems = (items) => {
//     const obj = {},
//       uniqueItems = [];
//     for (var i = 0, l = items.length; i < l; ++i) {
//       if (obj.hasOwnProperty(items[i])) {
//         continue;
//       }
//       uniqueItems.push(items[i]);
//       obj[items[i]] = 1;
//     }
//     return uniqueItems;
//   };

//   return (
//     <div className="app_main_div">
//       <p className="press_key">Press any keys (letters) to play.</p>
//       <div className="box_main">
//         <img className="pipe" src={pipe} alt="pipeImage" />
//         <input
//           ref={inputRef}
//           {...(!isGameOver && !isPaused && { onKeyDown: handOnKeyPress })}
//           onFocus={() => setIsPaused(false)}
//           onBlur={() => {
//             if (!isGameOver) {
//               setIsPaused(true);
//               // setResultBox({
//               //   title: "Game is Paused",
//               //   disabled: false,
//               //   buttonLabel: "continue",
//               // });
//             }
//           }}
//         />
//       </div>
//       <HangingMen failedLetterCount={failedLetters.length} />

//       <FailBox failedLetters={failedLetters} />
//       <AnswerBox
//         wordApi={wordApi}
//         corrWords={corrWords}
//         blank_space={emptyBoxList()}
//       />

//       <div className="rightBlueTriangle"></div>
//       <Output
//         title={resultBox.title}
//         disabled={resultBox.disabled}
//         buttonLabel={resultBox.buttonLabel}
//         buttonAction={isPaused ? continueGame : startGame}
//       />
//       {!isPaused && <Button pause> Pause Game</Button>}
//     </div>
//   );
// };
