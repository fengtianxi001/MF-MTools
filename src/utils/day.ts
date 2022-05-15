import dayjs, { Dayjs } from "dayjs";


type timeType = number | string | dayjs.Dayjs
export function dayFomart(time: timeType, format?: string) {
    format = format || "YYYY-MM-DD HH:mm:ss";
    return dayjs(time).format(format)
}

export function isDayInRange(anchor: timeType,
    range:
        | [string, string]
        | [number, number]
        | [Date, Date]
        | [Dayjs, Dayjs]
        | "day"
        | "week"
        | "month"
        | "year"
): boolean {
    if (Array.isArray(range)) {
        const begin = dayjs(range[0]);
        const end = dayjs(range[1]);
        return begin.isBefore(dayjs(anchor)) && end.isAfter(dayjs(anchor));
    } else {
        return dayjs().startOf(range).isBefore(dayjs(anchor));
    }
}

export function dayDifference(atime: timeType, btime: timeType): number {
    return dayjs(atime).diff(dayjs(btime))
}
