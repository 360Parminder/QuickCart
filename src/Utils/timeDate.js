export function getTimeZone() {
    const date = new Date();
    const timeZone = date.toString().match(/\(([^)]+)\)$/)[1]; // Extract time zone name
    return timeZone;
}


