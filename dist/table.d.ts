import { CheerioAPI } from 'cheerio';
import { TableHour, TableLesson } from './types';
export default class Table {
    $: CheerioAPI;
    constructor(html: string);
    getTitle(): string;
    getDayNames(): string[];
    getHours(): Record<number, TableHour>;
    getRawDays(): TableLesson[][][];
    getDays(): TableLesson[][][];
    getGeneratedDate(): string | null;
    getVersionInfo(): string;
    private static getId;
    private parseLessons;
}
