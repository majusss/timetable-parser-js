import { expect } from "chai";
import { Table } from "../lib/index";

describe("ZSTiO test", () => {
  it("Branch groups checking in teachers (Wa)", async () => {
    const timetableSrc = await (
      await fetch("http://www.zstio-elektronika.pl/plan/plany/n64.html")
    ).text();

    const table = new Table(timetableSrc);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(timetableSrc)).not.to.throw();
    });

    expect(table.getDays()[0][3][0].groupName).eq("1/2");
  });

  it("Branch groups checking in teachers (Pu)", async () => {
    const timetableSrc = await (
      await fetch("http://www.zstio-elektronika.pl/plan/plany/n54.html")
    ).text();

    const table = new Table(timetableSrc);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(timetableSrc)).not.to.throw();
    });

    expect(table.getDays()[1][3][0].groupName).eq("E");
  });

  it("Branch groups checking in teachers (Wó)", async () => {
    const timetableSrc = await (
      await fetch("http://www.zstio-elektronika.pl/plan/plany/n67.html")
    ).text();

    const table = new Table(timetableSrc);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(timetableSrc)).not.to.throw();
    });

    expect(table.getDays()[0][6][0].groupName).eq("M");
  });

  it("Branch groups checking in teachers (Zi)", async () => {
    const timetableSrc = await (
      await fetch("http://www.zstio-elektronika.pl/plan/plany/n69.html")
    ).text();

    const table = new Table(timetableSrc);
    it("Cheerio init", (): void => {
      expect((): Table => new Table(timetableSrc)).not.to.throw();
    });

    expect(table.getDays()[1][6][0].groupName).eq("A");
  });
});
