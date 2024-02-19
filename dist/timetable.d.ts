import { CheerioAPI } from "cheerio";
export default class Timetable {
    $: CheerioAPI;
    constructor(html: string);
    getTitle(): string;
    getListPath(): string;
}
