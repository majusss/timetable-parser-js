import { expect } from "chai";
import * as fs from "fs";
import * as path from "path";
import { Timetable, TimetableList, Table } from "../lib/index";

describe("Timetable test", (): void => {
  const indexFilename = path.join(__dirname, "fixtures", "index.html");
  const indexHTML = fs.readFileSync(indexFilename, {
    encoding: "utf8",
  });
  it("Cheerio init", (): void => {
    expect((): Timetable => new Timetable(indexHTML)).not.to.throw();
  });

  const timetable = new Timetable(indexHTML);

  it("Title check", (): void => {
    expect(timetable.getTitle()).to.equal(
      "Publiczna szkoła Wulkanowego nr 1. Plan lekcji"
    );
  });

  it("Path text", (): void => {
    expect(timetable.getListPath()).to.equal("lista.html");
  });
});

describe("Timetable list test", (): void => {
  describe("Expandable list", (): void => {
    const expandableListFilename = path.join(
      __dirname,
      "fixtures",
      "lista-expandable.html"
    );
    const expandableListHTML = fs.readFileSync(expandableListFilename, {
      encoding: "utf8",
    });

    const list: TimetableList = new TimetableList(expandableListHTML);

    it("Cheerio init", (): void => {
      expect(
        (): TimetableList => new TimetableList(expandableListHTML)
      ).not.to.throw();
    });

    it("List type check", (): void => {
      expect(list.getListType()).to.equal("expandable");
    });

    it("Return value check", (): void => {
      const nodesList = list.getList();
      expect(nodesList.classes).not.to.equal(undefined);
      expect(nodesList.teachers).not.to.equal(undefined);
      expect(nodesList.rooms).not.to.equal(undefined);

      expect(nodesList.classes[0].name).to.equal("1Tc");
      expect(nodesList.classes[0].value).to.equal("1");
      expect(nodesList.classes[1].name).to.equal("1Ti");
      expect(nodesList.classes[1].value).to.equal("2");

      expect(nodesList.teachers![0].name).to.equal("I.Ochocki (Io)");
      expect(nodesList.teachers![0].value).to.equal("1");
      expect(nodesList.teachers![1].name).to.equal("M.Oleszkiewicz (Mo)");
      expect(nodesList.teachers![1].value).to.equal("3");

      expect(nodesList.rooms![0].name).to.equal("16 prac. geograficzna");
      expect(nodesList.rooms![0].value).to.equal("1");
      expect(nodesList.rooms![1].name).to.equal("17 prac. fizyczna");
      expect(nodesList.rooms![1].value).to.equal("2");
    });

    it("Logo check", (): void => {
      expect(list.getLogoSrc()).to.equal(null);
    });
  });

  describe("Select list", (): void => {
    const selectListFilename = path.join(
      __dirname,
      "fixtures",
      "lista-select.html"
    );
    const selectListHTML = fs.readFileSync(selectListFilename, {
      encoding: "utf8",
    });

    const list: TimetableList = new TimetableList(selectListHTML);

    it("Cheerio init", (): void => {
      expect(
        (): TimetableList => new TimetableList(selectListHTML)
      ).not.to.throw();
    });

    it("List type check", (): void => {
      expect(list.getListType()).to.equal("select");
    });

    it("Return value check", (): void => {
      const nodesList = list.getList();
      expect(nodesList.classes).not.to.equal(undefined);
      expect(nodesList.teachers).not.to.equal(undefined);
      expect(nodesList.rooms).not.to.equal(undefined);

      expect(nodesList.classes[0].name).to.equal("1Tc");
      expect(nodesList.classes[0].value).to.equal("1");
      expect(nodesList.classes[1].name).to.equal("1Ti");
      expect(nodesList.classes[1].value).to.equal("2");

      expect(nodesList.teachers![0].name).to.equal("I.Ochocki (Io)");
      expect(nodesList.teachers![0].value).to.equal("1");
      expect(nodesList.teachers![1].name).to.equal("M.Oleszkiewicz (Mo)");
      expect(nodesList.teachers![1].value).to.equal("3");

      expect(nodesList.rooms![0].name).to.equal("16 prac. geograficzna");
      expect(nodesList.rooms![0].value).to.equal("1");
      expect(nodesList.rooms![1].name).to.equal("17 prac. fizyczna");
      expect(nodesList.rooms![1].value).to.equal("2");
    });

    it("Logo check", (): void => {
      expect(list.getLogoSrc()).to.equal(null);
    });
  });

  describe("Unordered list", (): void => {
    const unorderedListFilename = path.join(
      __dirname,
      "fixtures",
      "lista-unordered.html"
    );
    const unorderedListHTML = fs.readFileSync(unorderedListFilename, {
      encoding: "utf8",
    });

    const list: TimetableList = new TimetableList(unorderedListHTML);

    it("Cheerio init", (): void => {
      expect(
        (): TimetableList => new TimetableList(unorderedListHTML)
      ).not.to.throw();
    });

    it("List type check", (): void => {
      expect(list.getListType()).to.equal("unordered");
    });

    it("Return value check", (): void => {
      const nodesList = list.getList();
      expect(nodesList.classes).not.to.equal(undefined);
      expect(nodesList.teachers).not.to.equal(undefined);
      expect(nodesList.rooms).not.to.equal(undefined);

      expect(nodesList.classes[0].name).to.equal("1Tc");
      expect(nodesList.classes[0].value).to.equal("1");
      expect(nodesList.classes[1].name).to.equal("1Ti");
      expect(nodesList.classes[1].value).to.equal("2");

      expect(nodesList.teachers![0].name).to.equal("I.Ochocki (Io)");
      expect(nodesList.teachers![0].value).to.equal("1");
      expect(nodesList.teachers![1].name).to.equal("M.Oleszkiewicz (Mo)");
      expect(nodesList.teachers![1].value).to.equal("3");

      expect(nodesList.rooms![0].name).to.equal("16 prac. geograficzna");
      expect(nodesList.rooms![0].value).to.equal("1");
      expect(nodesList.rooms![1].name).to.equal("17 prac. fizyczna");
      expect(nodesList.rooms![1].value).to.equal("2");
    });

    it("Logo check", (): void => {
      expect(list.getLogoSrc()).to.equal("images/logo.png");
    });
  });
});

describe("Table test", (): void => {
  describe("Room table", (): void => {
    const roomTableFilename = path.join(__dirname, "fixtures", "sala.html");
    const roomTableHTML = fs.readFileSync(roomTableFilename, {
      encoding: "utf8",
    });

    const roomDaysValuesFilename = path.join(
      __dirname,
      "expected",
      "room-days.json"
    );
    const roomDaysValuesJSON = fs.readFileSync(roomDaysValuesFilename, {
      encoding: "utf8",
    });
    const roomDaysValues = JSON.parse(roomDaysValuesJSON);

    const table = new Table(roomTableHTML);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(roomTableHTML)).not.to.throw();
    });

    it("Day names return value check", (): void => {
      const dayNames = table.getDayNames();
      expect(dayNames).to.eql([
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
      ]);
    });

    it("Table hours return check", (): void => {
      const tableHours = table.getHours();
      expect(tableHours).to.eql({
        1: {
          number: 1,
          timeFrom: "8:00",
          timeTo: "8:45",
        },
        2: {
          number: 2,
          timeFrom: "8:50",
          timeTo: "9:35",
        },
        3: {
          number: 3,
          timeFrom: "9:40",
          timeTo: "10:25",
        },
        4: {
          number: 4,
          timeFrom: "10:40",
          timeTo: "11:25",
        },
        5: {
          number: 5,
          timeFrom: "11:30",
          timeTo: "12:15",
        },
        6: {
          number: 6,
          timeFrom: "12:20",
          timeTo: "13:05",
        },
        7: {
          number: 7,
          timeFrom: "13:10",
          timeTo: "13:55",
        },
        8: {
          number: 8,
          timeFrom: "14:00",
          timeTo: "14:45",
        },
        9: {
          number: 9,
          timeFrom: "14:50",
          timeTo: "15:35",
        },
        10: {
          number: 10,
          timeFrom: "15:40",
          timeTo: "16:25",
        },
        11: {
          number: 11,
          timeFrom: "16:35",
          timeTo: "17:20",
        },
      });
    });

    it("Table days return check", (): void => {
      const tableDays = table.getDays();
      expect(tableDays).to.eql(roomDaysValues);
    });

    it("Table title", (): void => {
      const title = table.getTitle();
      expect(title).to.eql("21 prac. historii");
    });

    it("Table version info", (): void => {
      const versionInfo = table.getVersionInfo();
      expect(versionInfo).to.eql("19 grudnia 2022 r. (wersja 5.0.0)");
    });

    it("Table generated date", (): void => {
      const generatedDate = table.getGeneratedDate();
      expect(generatedDate).to.eql("2018-02-17");
    });
  });

  describe("Class table", (): void => {
    const classTableFilename = path.join(__dirname, "fixtures", "oddzial.html");
    const classTableHTML = fs.readFileSync(classTableFilename, {
      encoding: "utf8",
    });

    const classDaysValuesFilename = path.join(
      __dirname,
      "expected",
      "class-days.json"
    );
    const classDaysValuesJSON = fs.readFileSync(classDaysValuesFilename, {
      encoding: "utf8",
    });
    const classDaysValues = JSON.parse(classDaysValuesJSON);

    const table = new Table(classTableHTML);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(classTableHTML)).not.to.throw();
    });

    it("Day names return value check", (): void => {
      const dayNames = table.getDayNames();
      expect(dayNames).to.eql([
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
      ]);
    });

    it("getRawDays does not throw an error", (): void => {
      table.getRawDays();
    });

    it("Table hours return check", (): void => {
      const tableHours = table.getHours();
      expect(tableHours).to.eql({
        2: {
          number: 2,
          timeFrom: "8:00",
          timeTo: "8:45",
        },
        3: {
          number: 3,
          timeFrom: "8:50",
          timeTo: "9:35",
        },
        4: {
          number: 4,
          timeFrom: "9:40",
          timeTo: "10:25",
        },
        5: {
          number: 5,
          timeFrom: "10:40",
          timeTo: "11:25",
        },
        6: {
          number: 6,
          timeFrom: "11:30",
          timeTo: "12:15",
        },
        7: {
          number: 7,
          timeFrom: "12:20",
          timeTo: "13:05",
        },
        8: {
          number: 8,
          timeFrom: "13:10",
          timeTo: "13:55",
        },
        9: {
          number: 9,
          timeFrom: "14:00",
          timeTo: "14:45",
        },
        10: {
          number: 10,
          timeFrom: "14:50",
          timeTo: "15:35",
        },
        11: {
          number: 11,
          timeFrom: "15:40",
          timeTo: "16:25",
        },
      });
    });

    it("Table days return check", (): void => {
      const tableDays = table.getDays();
      expect(tableDays).to.eql(classDaysValues);
    });

    it("Table title", (): void => {
      const title = table.getTitle();
      expect(title).to.eql("3Ti");
    });

    it("Table version info", (): void => {
      const versionInfo = table.getVersionInfo();
      expect(versionInfo).to.eql("19 lutego 2018r.");
    });

    it("Table generated date", (): void => {
      const generatedDate = table.getGeneratedDate();
      expect(generatedDate).to.eql("2018-02-17");
    });
  });

  // Plain text
  describe("Plain class table", (): void => {
    const plainClassTableFilename = path.join(
      __dirname,
      "fixtures",
      "plain-oddzial.html"
    );
    const plainClassTableHTML = fs.readFileSync(plainClassTableFilename, {
      encoding: "utf8",
    });

    const plainClassDaysValuesFilename = path.join(
      __dirname,
      "expected",
      "plain-class-days.json"
    );
    const plainClassDaysValuesJSON = fs.readFileSync(
      plainClassDaysValuesFilename,
      {
        encoding: "utf8",
      }
    );
    const plainClassDaysValues = JSON.parse(plainClassDaysValuesJSON);

    const table = new Table(plainClassTableHTML);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(plainClassTableHTML)).not.to.throw();
    });

    it("Day names return value check", (): void => {
      const dayNames = table.getDayNames();
      expect(dayNames).to.eql([
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
      ]);
    });

    it("getRawDays does not throw an error", (): void => {
      table.getRawDays();
    });

    it("Table hours return check", (): void => {
      const tableHours = table.getHours();
      expect(tableHours).to.eql({
        0: { number: 0, timeFrom: "7:10", timeTo: "7:55" },
        1: { number: 1, timeFrom: "8:00", timeTo: "8:45" },
        2: { number: 2, timeFrom: "8:50", timeTo: "9:35" },
        3: { number: 3, timeFrom: "9:40", timeTo: "10:25" },
        4: { number: 4, timeFrom: "10:40", timeTo: "11:25" },
        5: { number: 5, timeFrom: "11:30", timeTo: "12:15" },
        6: { number: 6, timeFrom: "12:20", timeTo: "13:05" },
        7: { number: 7, timeFrom: "13:10", timeTo: "13:55" },
        8: { number: 8, timeFrom: "14:00", timeTo: "14:45" },
        9: { number: 9, timeFrom: "14:50", timeTo: "15:35" },
        10: { number: 10, timeFrom: "15:40", timeTo: "16:25" },
      });
    });

    it("Table days return check", (): void => {
      const tableDays = table.getDays();
      expect(tableDays).to.eql(plainClassDaysValues);
    });

    it("Table title", (): void => {
      const title = table.getTitle();
      expect(title).to.eql("4as 4TMt");
    });

    it("Table version info", (): void => {
      const versionInfo = table.getVersionInfo();
      expect(versionInfo).to.eql("13 lutego 2023 r.");
    });

    it("Table generated date", (): void => {
      const generatedDate = table.getGeneratedDate();
      expect(generatedDate).to.eql("2023-02-09");
    });
  });
});
