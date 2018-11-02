import  React, { useState, useEffect, useRef } from 'react';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-date-picker';
import './Users.css';

export default function Users() {
    const [text, setText] = useState("hello");
    const textField = useRef(null);
    useEffect(() => {
      textField.current.addEventListener("value-changed", (e) => {
        setText(e.detail.value);
      });
    })
    return (
      <div className="users">
        <h3>Vaadin Core Elements</h3>
        <div className="controls">
          <vaadin-text-field ref={textField} placeholder="This is vaadin-text-field" value={text}></vaadin-text-field>
          <vaadin-checkbox>and this, vaadin-checkbox</vaadin-checkbox>
          <vaadin-date-picker placeholder="fancy a vaadin-date-picker?"></vaadin-date-picker>
        </div>
        {text}
      </div>
    );
}
