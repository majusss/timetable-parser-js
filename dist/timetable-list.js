"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
class TimetableList {
    constructor(html) {
        this.$ = (0, cheerio_1.load)(html);
    }
    getList() {
        if (this.getListType() === 'select') {
            return this.getSelectList();
        }
        if (this.getListType() === 'unordered') {
            return this.getUnorderedList();
        }
        return this.getExpandableList();
    }
    getListType() {
        if (this.$('form[name=form]').length > 0) {
            return 'select';
        }
        if (this.$('body table').length > 0) {
            return 'expandable';
        }
        return 'unordered';
    }
    getLogoSrc() {
        return this.$('.logo img').attr('src') || null;
    }
    getSelectList() {
        return {
            classes: this.getSelectListValues('oddzialy'),
            teachers: this.getSelectListValues('nauczyciele'),
            rooms: this.getSelectListValues('sale'),
        };
    }
    getSelectListValues(name) {
        const nodes = this.$(`[name=${name}] option`).toArray();
        nodes.shift();
        const values = [];
        nodes.forEach((node) => {
            values.push({
                name: this.$(node).text(),
                value: this.$(node).attr('value') || '',
            });
        });
        return values;
    }
    getExpandableList() {
        return this.getTimetableUrlSubType('#oddzialy a', '#nauczyciele a', '#sale a');
    }
    getUnorderedList() {
        let teachersQuery = 'ul:nth-of-type(2) a';
        let roomsQuery = 'ul:nth-of-type(3) a';
        if (this.$('h4').length === 1) {
            teachersQuery = 'undefined';
            roomsQuery = 'undefined';
        }
        else if (this.$('h4:nth-of-type(2)').text() === 'Sale') {
            teachersQuery = 'undefined';
            roomsQuery = 'ul:nth-of-type(2) a';
        }
        return this.getTimetableUrlSubType('ul:first-of-type a', teachersQuery, roomsQuery);
    }
    getTimetableUrlSubType(classQuery, teachersQuery, roomsQuery) {
        return {
            classes: this.getSubTypeValue(classQuery, 'o'),
            teachers: this.getSubTypeValue(teachersQuery, 'n'),
            rooms: this.getSubTypeValue(roomsQuery, 's'),
        };
    }
    getSubTypeValue(query, prefix) {
        const values = [];
        this.$(query).each((_, node) => {
            var _a;
            values.push({
                name: this.$(node).text(),
                value: ((_a = this.$(node).attr('href')) === null || _a === void 0 ? void 0 : _a.replace('.html', '').replace(`plany/${prefix}`, '')) || '',
            });
        });
        return values;
    }
}
exports.default = TimetableList;
