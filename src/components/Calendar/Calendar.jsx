import { useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Temporal } from "temporal-polyfill";
import { useBookStore } from "../../store/store";

import {
  CalendarCard,
  CalendarHeading,
  LogForm,
  FormField,
  LogButton,
  CancelButton,
  SelectedDate,
  CalendarLegend,
} from "./Calendar.styled";

const formatDate = (dateString) =>
  Temporal.PlainDate.from(dateString).toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const Calendar = () => {
  const books = useBookStore((state) => state.books);
  const readingLogs = useBookStore((state) => state.readingLogs);
  const addReadingLog = useBookStore((state) => state.addReadingLog);
  const removeReadingLog = useBookStore((state) => state.removeReadingLog);

  const [selectedDate, setSelectedDate] = useState("");
  const [bookId, setBookId] = useState("");
  const [pages, setPages] = useState("10");

  const bookById = useMemo(
    () => new Map(books.map((book) => [Number(book.id), book])),
    [books],
  );

  const events = useMemo(
    () =>
      readingLogs.map((log) => {
        const book = bookById.get(Number(log.bookId));

        return {
          id: String(log.id),
          title: `${book?.title ?? "Deleted book"} · ${log.pages} pages`,
          start: log.date,
          allDay: true,
          backgroundColor: "#176657",
          borderColor: "#176657",
          textColor: "#ffffff",
        };
      }),
    [readingLogs, bookById],
  );

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);

    const currentBook = books.find((book) => book.status === "reading");

    setBookId(String(currentBook?.id ?? books[0]?.id ?? ""));

    setPages("10");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pageCount = Number(pages);

    if (
      !selectedDate ||
      !bookId ||
      !Number.isInteger(pageCount) ||
      pageCount < 1
    ) {
      return;
    }

    addReadingLog({
      date: selectedDate,
      bookId,
      pages: pageCount,
    });

    setSelectedDate("");
    setBookId("");
    setPages("10");
  };

  const handleEventClick = (info) => {
    const log = readingLogs.find((item) => String(item.id) === info.event.id);

    if (!log) return;

    const book = bookById.get(Number(log.bookId));

    const confirmed = window.confirm(
      `Delete this reading record?\n${
        book?.title ?? "Book"
      } - ${log.pages} pages on ${formatDate(log.date)}.`,
    );

    if (confirmed) {
      removeReadingLog(log.id);
    }
  };

  return (
    <CalendarCard>
      <CalendarHeading>Reading Calendar</CalendarHeading>

      <CalendarLegend>
        <span className="legend-dot" />
        Reading session
      </CalendarLegend>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        firstDay={1}
        height="auto"
        fixedWeekCount={false}
        dayMaxEvents={2}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={events}
        buttonText={{ today: "Today" }}
        dayHeaderFormat={{ weekday: "short" }}
        eventDisplay="block"
      />

      {selectedDate && (
        <LogForm onSubmit={handleSubmit}>
          <SelectedDate>Reading on {formatDate(selectedDate)}</SelectedDate>

          <FormField>
            <label htmlFor="reading-book">Book</label>

            <select
              id="reading-book"
              value={bookId}
              onChange={(event) => setBookId(event.target.value)}
              required
            >
              <option value="" disabled>
                Select a book
              </option>

              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title} — {book.author}
                </option>
              ))}
            </select>
          </FormField>

          <FormField>
            <label htmlFor="reading-pages">Pages read</label>

            <input
              id="reading-pages"
              type="number"
              min="1"
              step="1"
              value={pages}
              onChange={(event) => setPages(event.target.value)}
              required
            />
          </FormField>

          <div className="form-actions">
            <LogButton type="submit">Save reading</LogButton>

            <CancelButton type="button" onClick={() => setSelectedDate("")}>
              Cancel
            </CancelButton>
          </div>
        </LogForm>
      )}
    </CalendarCard>
  );
};
