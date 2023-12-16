export const handleStartDateAndEndDate = () => {
  const today = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(today.getMonth() - 1);
  const formattedToday = formatDate(today);
  const formattedLastMonth = formatDate(lastMonth);
  return {
    startDate: formattedLastMonth,
    endDate: formattedToday,
  };
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
