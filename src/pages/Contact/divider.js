import React from "react";

const dividerStyle = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 486) {
    return '||'
  } else {
    return '• • •'
  }
}