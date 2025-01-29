import { useState } from "react";
import HourWheel from "./HourWheel";
import MinuteWheel from "./MinuteWheel";

function TimePickerSelection({
  initialValue,
  onChange,
  height,
  onSave,
  onCancel,
  seperator,
  isDarkMode,
}: {
  initialValue: string | null;
  onChange: (timeValue: string) => void;
  height: number;
  onSave: (finalSelectedValue: string) => void;
  onCancel: () => void;
  seperator?: boolean;
  isDarkMode?: boolean;
}) {
  const initialTimeValue = initialValue;
  const [value, setValue] = useState(
    initialValue === null ? "" : initialTimeValue,
  );

  console.log(value);

  const [hourFormat, setHourFormat] = useState<{
    mount: boolean;
    hourFormat: string;
  }>({
    mount: false,
    hourFormat: initialValue! && initialValue?.slice(6, 8),
  });

  const params = {
    height,
    value,
    setValue,
    setHourFormat,
    hourFormat,
    isDarkMode,
  };

  const handleSave = () => {
    const finalSelectedValue = value;
    if (finalSelectedValue) {
      onChange(finalSelectedValue);
      onSave(finalSelectedValue);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="react-wheel-time-picker  react-wheel-time-picker-transition">
      <div
        className="react-wheel-time-picker-container"
        style={{
          height: `${height * 5 + 20}px`,
          backgroundColor: isDarkMode ? "#1d1d1d" : "#f6f6f6f6",
        }}>
        <div
          className="react-wheel-time-picker-selected-overlay"
          style={{
            // top: `${height * 2 + 20}px`,
            height: `${height}px`,
            backgroundColor: isDarkMode ? "#2c2c2f" : "#d3d3d3d3",
          }}
        />
        <HourWheel {...params} />
        {seperator && (
          <div
            className="react-wheel-time-picker-colon"
            style={{ color: isDarkMode ? "#f7f7f7" : "#000" }}>
            <span>:</span>
          </div>
        )}
        <MinuteWheel {...params} />
      </div>
    </div>
  );
}

export default TimePickerSelection;
