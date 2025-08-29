import { useMemo, useState } from "react";

const SAMPLE_EVENTS = [
  { date: "2025-09-13", title: "Lomba Poster", tag: "HIFEST" },
  { date: "2025-09-14", title: "Lomba UI/UX", tag: "HIFEST" },
  { date: "2025-09-20", title: "Lomba Futsal", tag: "HIFEST" },
  { date: "2025-09-21", title: "Lomba Futsal", tag: "HIFEST" },
  { date: "2025-09-28", title: "Seminar", tag: "HIFEST" },
  { date: "2025-10-04", title: "Closingan", tag: "HIFEST INTERNAL" },
  { date: "2025-10-05", title: "Closingan", tag: "HIFEST INTERNAL" },
];

function pad(n) {
  return n.toString().padStart(2, "0");
}
function keyFromDate(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function monthLabel(d) {
  return d.toLocaleString("id-ID", { month: "long", year: "numeric" });
}
function daysInMonth(year, monthIndex) {
  // monthIndex: 0-11
  return new Date(year, monthIndex + 1, 0).getDate();
}

export default function CalendarAgenda({ events = SAMPLE_EVENTS }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null);

  const base = new Date();
  const viewStart = new Date(
    base.getFullYear(),
    base.getMonth() + monthOffset,
    1
  );
  const todayKey = keyFromDate(new Date());

  // Group events by date key
  const eventMap = useMemo(() => {
    const m = new Map();
    for (const e of events) {
      const k = e.date;
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(e);
    }
    // sort by time asc
    for (const k of m.keys()) {
      m.get(k).sort((a, b) => (a.time || "").localeCompare(b.time || ""));
    }
    return m;
  }, [events]);

  // Build calendar grid
  const year = viewStart.getFullYear();
  const month = viewStart.getMonth(); // 0-11
  const total = daysInMonth(year, month);
  const firstWeekday = new Date(year, month, 1).getDay(); // 0=Min ... 6=Sabtu
  // Kita mau Senin–Minggu → konversi
  const shift = (firstWeekday + 6) % 7; // 0 kalau Senin
  const cells = [];
  for (let i = 0; i < shift; i++) cells.push(null); // padding awal
  for (let d = 1; d <= total; d++) cells.push(new Date(year, month, d));

  const openFor = (k) => {
    setSelectedKey(k);
    document.getElementById("agenda-modal")?.showModal?.();
  };
  const closeModal = () => {
    setSelectedKey(null);
    document.getElementById("agenda-modal")?.close?.();
  };

  const selectedEvents = selectedKey ? eventMap.get(selectedKey) || [] : [];

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          className="px-3 py-1 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
          onClick={() => setMonthOffset((x) => x - 1)}
        >
          ❮
        </button>

        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          {monthLabel(viewStart)}
        </h2>

        <button
          className="px-3 py-1 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
          onClick={() => setMonthOffset((x) => x + 1)}
        >
          ❯
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
          onClick={() => setMonthOffset(0)}
        >
          Hari Ini
        </button>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl bg-base-200 p-4">
        {/* Weekday header (Senin–Minggu) */}
        <div className="grid grid-cols-7 text-xs md:text-sm font-semibold text-base-content/70 mb-2">
          {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((w) => (
            <div key={w} className="text-center">
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {cells.map((d, i) => {
            if (!d) return <div key={`pad-${i}`} />;
            const k = keyFromDate(d);
            const items = eventMap.get(k) || [];
            const isToday = k === todayKey;

            return (
              <div
                key={k}
                className={`card card-compact bg-base-100 border ${
                  isToday ? "border-primary" : "border-base-300"
                } hover:shadow-md transition`}
              >
                <div className="card-body p-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-bold ${
                        isToday ? "text-primary" : ""
                      }`}
                    >
                      {d.getDate()}
                    </span>
                    {items.length > 0 && (
                      <button
                        onClick={() => openFor(k)}
                        className="badge badge-primary badge-sm"
                      >
                        {items.length}
                      </button>
                    )}
                  </div>

                  {/* preview max 2 agenda */}
                  <div className="mt-1 space-y-1">
                    {items.slice(0, 2).map((ev, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 truncate"
                      >
                        <span className="badge badge-ghost badge-xs">
                          {ev.time || "--"}
                        </span>
                        <span className="text-xs truncate">{ev.title}</span>
                      </div>
                    ))}
                    {items.length > 2 && (
                      <button
                        onClick={() => openFor(k)}
                        className="text-[11px] text-primary"
                      >
                        +{items.length - 2} agenda
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: daftar agenda tanggal terpilih */}
      <dialog id="agenda-modal" className="modal" onClose={closeModal}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Agenda {selectedKey}</h3>
          <div className="mt-3 space-y-2">
            {selectedEvents.length === 0 ? (
              <p className="opacity-70">Tidak ada agenda.</p>
            ) : (
              selectedEvents.map((ev, i) => (
                <div key={i} className="p-2 rounded-lg bg-base-200">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-primary">
                      {ev.time || "--"}
                    </span>
                    <span className="font-medium">{ev.title}</span>
                    {ev.tag && (
                      <span className="badge badge-ghost">{ev.tag}</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Tutup
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
