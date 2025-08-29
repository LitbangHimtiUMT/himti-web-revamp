import Callendar from "../components/CalendarAgenda";
function AgendaPage() {
  return (
    <>
      <div
        className="min-h-screen bg-base-200 flex items-center justify-center text-white"
        style={{ backgroundColor: "#808080" }}
      >
        <Callendar />
      </div>
    </>
  );
}
export default AgendaPage;
