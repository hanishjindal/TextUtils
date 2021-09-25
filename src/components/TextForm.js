import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>

          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
        </div>
        <div>
          <button className="btn btn-primary my-2" onClick={handleDownClick}>
            Convert to Lowercase
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary my-2"
            onClick={() => {
              setText(
                text
                  .split(" ")
                  .map((currentValue) => {
                    let newText =
                      currentValue[0].toUpperCase() + currentValue.slice(1);
                    return newText;
                  })
                  .join(" ")
              );
            }}
          >
            Convert to Title Case
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setText("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split("\n").join(" ").split(" ")[
            text.split("\n").join(" ").split(" ").length - 1
          ] === ""
            ? text.split("\n").join(" ").split(" ").length - 1
            : text.split("\n").join(" ").split(" ").length}{" "}
          words and {text.length} characters.
        </p>
        <p>
          It will take{" "}
          {0.008 *
            (text.split(" ")[text.split(" ").length - 1] === ""
              ? text.split(" ").length - 1
              : text.split(" ").length)}{" "}
          minutes to read.
        </p>
      </div>
    </>
  );
}
