import TimePicker from "../../timer/src/components/TimePicker";

function App() {
  const handleTimeChange = (time: string) => {
    console.log("Selected time:", time);
  };

  return (
    <div>
      <TimePicker value={"12:41"} onChange={handleTimeChange} />
    </div>
  );
}

export default App;
