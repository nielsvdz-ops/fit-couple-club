"use client";

import { useState } from "react";

export default function WorkoutGif({
  src,
  alt,
  placeholderText,
  style,
  placeholderStyle,
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div style={placeholderStyle}>{placeholderText}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
