import React from "react";
import Icon from "@material-ui/core/Icon";

const togglerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: 30,
  paddingRight: 30,
};

const Toggle = ({ theme, themeToggler }) => {
  return (
    <div style={togglerStyle}>
      <Icon style={{ fontSize: 40 }} onClick={themeToggler}>
        {theme === "light" ? "brightness_2_oulined_icon" : "wb_sunny"}
      </Icon>
    </div>
  );
};

export default Toggle;
