"use client";
import React from "react";
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true });

const DateInfo: React.FC = () => {
  const today = moment().format("dddd jYYYY/jMM/jDD");

  return <span className="text-primary font-bold text-xs">{today}</span>;
};

export default DateInfo;
