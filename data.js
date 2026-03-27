/**
 * MONK MODE CONTROL PANEL
 */
const CONFIG = {
    // Choose your starting month and year
    year: 2026,
    month: 3, // 1 = January, 2 = February, etc.

    // Define habits per month
    // You can add as many months as you want; each gets its own A4 page.
    months: [
        {
            name: "MARCH",
            markedDays: [17, 18, 19, 20, 21, 22],
            // Custom labels for this specific month
            labels: [
                { day: 31, text: "PREP DAY", pos: "bottom-center", isPrevMonth: true },
                { day: 21, text: "REDPILLED", pos: "top-left" }
            ]
        },
        // {
        //     name: "FEBRUARY",
        //     markedDays: [1, 5, 14, 28],
        //     labels: [
        //         { day: 14, text: "VALENTINES", pos: "top-center" }
        //     ]
        // }
    ]
};