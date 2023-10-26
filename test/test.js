"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs = require("fs");
const path = require("path");
const index_1 = require("../lib/index");
describe('Timetable test', () => {
    const indexFilename = path.join(__dirname, 'fixtures', 'index.html');
    const indexHTML = fs.readFileSync(indexFilename, {
        encoding: 'utf8',
    });
    it('Cheerio init', () => {
        (0, chai_1.expect)(() => new index_1.Timetable(indexHTML)).not.to.throw();
    });
    const timetable = new index_1.Timetable(indexHTML);
    it('Title check', () => {
        (0, chai_1.expect)(timetable.getTitle()).to.equal('Publiczna szkoła Wulkanowego nr 1. Plan lekcji');
    });
    it('Path text', () => {
        (0, chai_1.expect)(timetable.getListPath()).to.equal('lista.html');
    });
});
describe('Timetable list test', () => {
    describe('Expandable list', () => {
        const expandableListFilename = path.join(__dirname, 'fixtures', 'lista-expandable.html');
        const expandableListHTML = fs.readFileSync(expandableListFilename, {
            encoding: 'utf8',
        });
        const list = new index_1.TimetableList(expandableListHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.TimetableList(expandableListHTML)).not.to.throw();
        });
        it('List type check', () => {
            (0, chai_1.expect)(list.getListType()).to.equal('expandable');
        });
        it('Return value check', () => {
            const nodesList = list.getList();
            (0, chai_1.expect)(nodesList.classes).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.teachers).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.rooms).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.classes[0].name).to.equal('1Tc');
            (0, chai_1.expect)(nodesList.classes[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.classes[1].name).to.equal('1Ti');
            (0, chai_1.expect)(nodesList.classes[1].value).to.equal('2');
            (0, chai_1.expect)(nodesList.teachers[0].name).to.equal('I.Ochocki (Io)');
            (0, chai_1.expect)(nodesList.teachers[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.teachers[1].name).to.equal('M.Oleszkiewicz (Mo)');
            (0, chai_1.expect)(nodesList.teachers[1].value).to.equal('3');
            (0, chai_1.expect)(nodesList.rooms[0].name).to.equal('16 prac. geograficzna');
            (0, chai_1.expect)(nodesList.rooms[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.rooms[1].name).to.equal('17 prac. fizyczna');
            (0, chai_1.expect)(nodesList.rooms[1].value).to.equal('2');
        });
        it('Logo check', () => {
            (0, chai_1.expect)(list.getLogoSrc()).to.equal(null);
        });
    });
    describe('Select list', () => {
        const selectListFilename = path.join(__dirname, 'fixtures', 'lista-select.html');
        const selectListHTML = fs.readFileSync(selectListFilename, {
            encoding: 'utf8',
        });
        const list = new index_1.TimetableList(selectListHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.TimetableList(selectListHTML)).not.to.throw();
        });
        it('List type check', () => {
            (0, chai_1.expect)(list.getListType()).to.equal('select');
        });
        it('Return value check', () => {
            const nodesList = list.getList();
            (0, chai_1.expect)(nodesList.classes).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.teachers).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.rooms).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.classes[0].name).to.equal('1Tc');
            (0, chai_1.expect)(nodesList.classes[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.classes[1].name).to.equal('1Ti');
            (0, chai_1.expect)(nodesList.classes[1].value).to.equal('2');
            (0, chai_1.expect)(nodesList.teachers[0].name).to.equal('I.Ochocki (Io)');
            (0, chai_1.expect)(nodesList.teachers[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.teachers[1].name).to.equal('M.Oleszkiewicz (Mo)');
            (0, chai_1.expect)(nodesList.teachers[1].value).to.equal('3');
            (0, chai_1.expect)(nodesList.rooms[0].name).to.equal('16 prac. geograficzna');
            (0, chai_1.expect)(nodesList.rooms[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.rooms[1].name).to.equal('17 prac. fizyczna');
            (0, chai_1.expect)(nodesList.rooms[1].value).to.equal('2');
        });
        it('Logo check', () => {
            (0, chai_1.expect)(list.getLogoSrc()).to.equal(null);
        });
    });
    describe('Unordered list', () => {
        const unorderedListFilename = path.join(__dirname, 'fixtures', 'lista-unordered.html');
        const unorderedListHTML = fs.readFileSync(unorderedListFilename, {
            encoding: 'utf8',
        });
        const list = new index_1.TimetableList(unorderedListHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.TimetableList(unorderedListHTML)).not.to.throw();
        });
        it('List type check', () => {
            (0, chai_1.expect)(list.getListType()).to.equal('unordered');
        });
        it('Return value check', () => {
            const nodesList = list.getList();
            (0, chai_1.expect)(nodesList.classes).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.teachers).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.rooms).not.to.equal(undefined);
            (0, chai_1.expect)(nodesList.classes[0].name).to.equal('1Tc');
            (0, chai_1.expect)(nodesList.classes[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.classes[1].name).to.equal('1Ti');
            (0, chai_1.expect)(nodesList.classes[1].value).to.equal('2');
            (0, chai_1.expect)(nodesList.teachers[0].name).to.equal('I.Ochocki (Io)');
            (0, chai_1.expect)(nodesList.teachers[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.teachers[1].name).to.equal('M.Oleszkiewicz (Mo)');
            (0, chai_1.expect)(nodesList.teachers[1].value).to.equal('3');
            (0, chai_1.expect)(nodesList.rooms[0].name).to.equal('16 prac. geograficzna');
            (0, chai_1.expect)(nodesList.rooms[0].value).to.equal('1');
            (0, chai_1.expect)(nodesList.rooms[1].name).to.equal('17 prac. fizyczna');
            (0, chai_1.expect)(nodesList.rooms[1].value).to.equal('2');
        });
        it('Logo check', () => {
            (0, chai_1.expect)(list.getLogoSrc()).to.equal('images/logo.png');
        });
    });
});
describe('Table test', () => {
    describe('Room table', () => {
        const roomTableFilename = path.join(__dirname, 'fixtures', 'sala.html');
        const roomTableHTML = fs.readFileSync(roomTableFilename, {
            encoding: 'utf8',
        });
        const roomDaysValuesFilename = path.join(__dirname, 'expected', 'room-days.json');
        const roomDaysValuesJSON = fs.readFileSync(roomDaysValuesFilename, {
            encoding: 'utf8',
        });
        const roomDaysValues = JSON.parse(roomDaysValuesJSON);
        const table = new index_1.Table(roomTableHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.Table(roomTableHTML)).not.to.throw();
        });
        it('Day names return value check', () => {
            const dayNames = table.getDayNames();
            (0, chai_1.expect)(dayNames).to.eql([
                'Poniedziałek',
                'Wtorek',
                'Środa',
                'Czwartek',
                'Piątek',
            ]);
        });
        it('Table hours return check', () => {
            const tableHours = table.getHours();
            (0, chai_1.expect)(tableHours).to.eql({
                1: {
                    number: 1,
                    timeFrom: '8:00',
                    timeTo: '8:45',
                },
                2: {
                    number: 2,
                    timeFrom: '8:50',
                    timeTo: '9:35',
                },
                3: {
                    number: 3,
                    timeFrom: '9:40',
                    timeTo: '10:25',
                },
                4: {
                    number: 4,
                    timeFrom: '10:40',
                    timeTo: '11:25',
                },
                5: {
                    number: 5,
                    timeFrom: '11:30',
                    timeTo: '12:15',
                },
                6: {
                    number: 6,
                    timeFrom: '12:20',
                    timeTo: '13:05',
                },
                7: {
                    number: 7,
                    timeFrom: '13:10',
                    timeTo: '13:55',
                },
                8: {
                    number: 8,
                    timeFrom: '14:00',
                    timeTo: '14:45',
                },
                9: {
                    number: 9,
                    timeFrom: '14:50',
                    timeTo: '15:35',
                },
                10: {
                    number: 10,
                    timeFrom: '15:40',
                    timeTo: '16:25',
                },
                11: {
                    number: 11,
                    timeFrom: '16:35',
                    timeTo: '17:20',
                },
            });
        });
        it('Table days return check', () => {
            const tableDays = table.getDays();
            (0, chai_1.expect)(tableDays).to.eql(roomDaysValues);
        });
        it('Table title', () => {
            const title = table.getTitle();
            (0, chai_1.expect)(title).to.eql('21 prac. historii');
        });
        it('Table version info', () => {
            const versionInfo = table.getVersionInfo();
            (0, chai_1.expect)(versionInfo).to.eql('19 grudnia 2022 r. (wersja 5.0.0)');
        });
        it('Table generated date', () => {
            const generatedDate = table.getGeneratedDate();
            (0, chai_1.expect)(generatedDate).to.eql('2018-02-17');
        });
    });
    describe('Class table', () => {
        const classTableFilename = path.join(__dirname, 'fixtures', 'oddzial.html');
        const classTableHTML = fs.readFileSync(classTableFilename, {
            encoding: 'utf8',
        });
        const classDaysValuesFilename = path.join(__dirname, 'expected', 'class-days.json');
        const classDaysValuesJSON = fs.readFileSync(classDaysValuesFilename, {
            encoding: 'utf8',
        });
        const classDaysValues = JSON.parse(classDaysValuesJSON);
        const table = new index_1.Table(classTableHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.Table(classTableHTML)).not.to.throw();
        });
        it('Day names return value check', () => {
            const dayNames = table.getDayNames();
            (0, chai_1.expect)(dayNames).to.eql([
                'Poniedziałek',
                'Wtorek',
                'Środa',
                'Czwartek',
                'Piątek',
            ]);
        });
        it('getRawDays does not throw an error', () => {
            table.getRawDays();
        });
        it('Table hours return check', () => {
            const tableHours = table.getHours();
            (0, chai_1.expect)(tableHours).to.eql({
                2: {
                    number: 2,
                    timeFrom: '8:00',
                    timeTo: '8:45',
                },
                3: {
                    number: 3,
                    timeFrom: '8:50',
                    timeTo: '9:35',
                },
                4: {
                    number: 4,
                    timeFrom: '9:40',
                    timeTo: '10:25',
                },
                5: {
                    number: 5,
                    timeFrom: '10:40',
                    timeTo: '11:25',
                },
                6: {
                    number: 6,
                    timeFrom: '11:30',
                    timeTo: '12:15',
                },
                7: {
                    number: 7,
                    timeFrom: '12:20',
                    timeTo: '13:05',
                },
                8: {
                    number: 8,
                    timeFrom: '13:10',
                    timeTo: '13:55',
                },
                9: {
                    number: 9,
                    timeFrom: '14:00',
                    timeTo: '14:45',
                },
                10: {
                    number: 10,
                    timeFrom: '14:50',
                    timeTo: '15:35',
                },
                11: {
                    number: 11,
                    timeFrom: '15:40',
                    timeTo: '16:25',
                },
            });
        });
        it('Table days return check', () => {
            const tableDays = table.getDays();
            (0, chai_1.expect)(tableDays).to.eql(classDaysValues);
        });
        it('Table title', () => {
            const title = table.getTitle();
            (0, chai_1.expect)(title).to.eql('3Ti');
        });
        it('Table version info', () => {
            const versionInfo = table.getVersionInfo();
            (0, chai_1.expect)(versionInfo).to.eql('19 lutego 2018r.');
        });
        it('Table generated date', () => {
            const generatedDate = table.getGeneratedDate();
            (0, chai_1.expect)(generatedDate).to.eql('2018-02-17');
        });
    });
    // Plain text
    describe('Plain class table', () => {
        const plainClassTableFilename = path.join(__dirname, 'fixtures', 'plain-oddzial.html');
        const plainClassTableHTML = fs.readFileSync(plainClassTableFilename, {
            encoding: 'utf8',
        });
        const plainClassDaysValuesFilename = path.join(__dirname, 'expected', 'plain-class-days.json');
        const plainClassDaysValuesJSON = fs.readFileSync(plainClassDaysValuesFilename, {
            encoding: 'utf8',
        });
        const plainClassDaysValues = JSON.parse(plainClassDaysValuesJSON);
        const table = new index_1.Table(plainClassTableHTML);
        it('Cheerio init', () => {
            (0, chai_1.expect)(() => new index_1.Table(plainClassTableHTML)).not.to.throw();
        });
        it('Day names return value check', () => {
            const dayNames = table.getDayNames();
            (0, chai_1.expect)(dayNames).to.eql([
                'Poniedziałek',
                'Wtorek',
                'Środa',
                'Czwartek',
                'Piątek',
            ]);
        });
        it('getRawDays does not throw an error', () => {
            table.getRawDays();
        });
        it('Table hours return check', () => {
            const tableHours = table.getHours();
            (0, chai_1.expect)(tableHours).to.eql({
                0: { number: 0, timeFrom: '7:10', timeTo: '7:55' },
                1: { number: 1, timeFrom: '8:00', timeTo: '8:45' },
                2: { number: 2, timeFrom: '8:50', timeTo: '9:35' },
                3: { number: 3, timeFrom: '9:40', timeTo: '10:25' },
                4: { number: 4, timeFrom: '10:40', timeTo: '11:25' },
                5: { number: 5, timeFrom: '11:30', timeTo: '12:15' },
                6: { number: 6, timeFrom: '12:20', timeTo: '13:05' },
                7: { number: 7, timeFrom: '13:10', timeTo: '13:55' },
                8: { number: 8, timeFrom: '14:00', timeTo: '14:45' },
                9: { number: 9, timeFrom: '14:50', timeTo: '15:35' },
                10: { number: 10, timeFrom: '15:40', timeTo: '16:25' },
            });
        });
        it('Table days return check', () => {
            const tableDays = table.getDays();
            (0, chai_1.expect)(tableDays).to.eql(plainClassDaysValues);
        });
        it('Table title', () => {
            const title = table.getTitle();
            (0, chai_1.expect)(title).to.eql('4as 4TMt');
        });
        it('Table version info', () => {
            const versionInfo = table.getVersionInfo();
            (0, chai_1.expect)(versionInfo).to.eql('13 lutego 2023 r.');
        });
        it('Table generated date', () => {
            const generatedDate = table.getGeneratedDate();
            (0, chai_1.expect)(generatedDate).to.eql('2023-02-09');
        });
    });
});
