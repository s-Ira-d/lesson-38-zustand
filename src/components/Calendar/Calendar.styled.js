import styled from "styled-components";

export const CalendarCard = styled.section`
  margin-bottom: 28px;
  padding: 24px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);

  .fc {
    --fc-border-color: #e7ece5;
    --fc-page-bg-color: #fff;
    --fc-neutral-bg-color: #f6f8f4;
    --fc-today-bg-color: #edf5ec;
    --fc-button-bg-color: #286653;
    --fc-button-border-color: #286653;
    --fc-button-hover-bg-color: #1d4c3e;
    --fc-button-hover-border-color: #1d4c3e;
    --fc-button-active-bg-color: #1d4c3e;
    --fc-button-active-border-color: #1d4c3e;

    color: var(--color-text);
    font-family: inherit;
  }

  .fc .fc-toolbar {
    gap: 12px;
    flex-wrap: wrap;
  }

  .fc .fc-toolbar-title {
    font-size: 21px;
    font-weight: 750;
    letter-spacing: -0.035em;
  }

  .fc .fc-button {
    padding: 7px 11px;
    border-radius: 8px;
    box-shadow: none;
    font-size: 12px;
    font-weight: 600;
  }

  .fc .fc-button:focus {
    box-shadow: 0 0 0 3px #28665325;
  }

  .fc .fc-col-header-cell-cushion {
    padding: 11px 4px;
    color: var(--color-muted);
    font-size: 12px;
    text-decoration: none;
  }

  .fc .fc-daygrid-day-number {
    padding: 8px;
    color: var(--color-text);
    font-size: 12px;
    text-decoration: none;
  }

  .fc .fc-daygrid-day-frame {
    min-height: 88px;
    cursor: pointer;
  }

  .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
    margin: 4px;
    padding: 4px 8px;
    color: white;
    background: var(--color-primary);
    border-radius: 7px;
  }

  .fc .fc-daygrid-day:hover {
    background: #f7faf5;
  }

  .fc .fc-event {
    margin: 2px 4px;
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 11px;
    cursor: pointer;
  }

  .fc .fc-daygrid-more-link {
    color: var(--color-primary);
    font-size: 11px;
  }
`;

export const CalendarHeading = styled.h2`
  margin-bottom: 8px;
  color: var(--color-text);
  font-size: 23px;
`;

export const CalendarLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  color: var(--color-muted);
  font-size: 12px;

  .legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--color-primary);
  }
`;

export const LogForm = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(120px, 0.7fr);
  gap: 14px;
  margin-top: 22px;
  padding: 18px;
  background: #f7f9f5;
  border: 1px solid var(--color-border);
  border-radius: 14px;

  .form-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    grid-column: 1 / -1;
  }
`;

export const SelectedDate = styled.h3`
  grid-column: 1 / -1;
  margin: 0;
  color: var(--color-primary);
  font-size: 17px;
`;

export const FormField = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 7px;

  label {
    color: var(--color-text);
    font-size: 12px;
    font-weight: 700;
  }
`;

export const LogButton = styled.button`
  background: var(--color-primary);

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const CancelButton = styled.button`
  color: var(--color-text);
  background: #e9eee7;

  &:hover {
    background: #dce5d9;
  }
`;
