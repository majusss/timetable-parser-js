import { CheerioAPI } from 'cheerio';
import { List } from './types';
export default class TimetableList {
    $: CheerioAPI;
    constructor(html: string);
    getList(): List;
    getListType(): string;
    getLogoSrc(): string | null;
    private getSelectList;
    private getSelectListValues;
    private getExpandableList;
    private getUnorderedList;
    private getTimetableUrlSubType;
    private getSubTypeValue;
}
