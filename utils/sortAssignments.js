const getDateValue = (isoDate, fallback) => {
  if (!isoDate) {
    return fallback;
  }

  const parsed = new Date(isoDate).getTime();
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const sortAssignments = (assignments) => {
  return [...assignments].sort((a, b) => {
    // Keep active tasks at the top, and completed tasks at the bottom.
    if (a.isCompleted !== b.isCompleted) {
      return a.isCompleted ? 1 : -1;
    }

    // Primary sort: nearest due date first. Missing/invalid dates are pushed to the bottom.
    const dueA = getDateValue(a.dueDate, Number.POSITIVE_INFINITY);
    const dueB = getDateValue(b.dueDate, Number.POSITIVE_INFINITY);

    if (dueA !== dueB) {
      return dueA - dueB;
    }

    // Secondary sort: start date when due dates match.
    const startA = getDateValue(a.startDate, Number.POSITIVE_INFINITY);
    const startB = getDateValue(b.startDate, Number.POSITIVE_INFINITY);

    if (startA !== startB) {
      return startA - startB;
    }

    return a.title.localeCompare(b.title);
  });
};
