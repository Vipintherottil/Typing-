import React, { useState, useEffect, useCallback } from "react";
import lessons from "../Lessons";

// function RandomLes(les) {
//   console.log(les);
//   return (
//     <div>
//       <span>{les}</span>
//     </div>
//   );
// }

function Keypr() {
  let i = 0,
    lesson;
  let myStyle = { color: "green" };

  //Generate random lesson
  let randomLesson = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    lesson = lessons[randomNumber];
    // console.log(lesson);
  };

  randomLesson();
  let lessonArray = lesson.split("");
  const [state, setState] = useState(lesson);
  // console.log(state);

  for (const les of lessonArray) {
    // RandomLes(les);
    // console.log(les);
  }

  // let timeStart = new Date();

  // console.log("ts", timeStart);
  // const timeEnd = () => new Date();
  // let timeEnd;
  // let timeEnd = new Date();

  // setInterval(() => {
  //   const timeEnd = new Date();
  //   let timeDiff = timeEnd - timeStart;
  //   console.log(timeDiff);`
  //   // console.log(timeEnd);
  // }, 4000);

  // console.log(timeEnd);

  const handler = useCallback(
    (e) => {
      let name = "s" + i;
      console.log(name);
      document.getElementById(name).style.color = "red";
      i++;
      // console.log(document.getElementById("s2").style.color);

      // changing the state to the name of the key
      // which is pressed
      // console.log(i);
      // setState((prev) => {
      // console.log(time.getMinutes() - 2);
      //   return prev + 1;
      // });

      // let regEx = /[!'^+%&/()=?_\-~`;#$½{[\]}\\|<>@,A-Za-z0-9]/g;
      // if (
      //   (e.keyCode >= 48 && e.keyCode <= 61) ||
      //   (e.keyCode >= 65 && e.keyCode <= 90) ||
      //   (e.keyCode >= 186 && e.keyCode <= 192) ||
      //   (e.keyCode >= 219 && e.keyCode <= 222) ||
      //   e.keyCode === 173 ||
      //   e.keyCode === 13 ||
      //   e.keyCode === 32
      // ) {
      //   console.log("Sucsess!");
      // } else {
      //   console.log("Fail!!");
      // }

      // if (e.keyCode === 38) {
      //   setState(state + 1);
      // } else if (e.keyCode === 40) {
      //   setState(state - 1);
      // }
      // setState(e.key);

      // setState((prev) => prev + 1);
    },
    [state]
  );

  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handler]);

  return (
    <div className="para">
      <h1 id="s">Hi Geeks!</h1>

      <p className="s">Key pressed is: {state}</p>

      {lessonArray.map((les, index) => {
        let cName = "s" + index;
        {
          /* console.log("class: ", cName); */
        }
        return (
          <span
            style={myStyle}
            id={cName}
            className={`p1 ${cName}`}
            key={index}
          >
            {les}
          </span>
        );
      })}
      {/* {document.addEventListener("keydown", handler)} */}
      {/* <button onKeyPress={handler}>{state}</button> */}
    </div>
  );
}

export default Keypr;
