
import '../../src/number';

describe('Milliseconds conversions', () => {
    const ms = 1000;

    it('ms to seconds', () => {
        expect(ms.msToS).toBe(1);
    });

    it('ms to minutes', () => {
        expect((60000).msToMin).toBe(1);
    });

    it('ms to hours', () => {
        expect((3600000).msToH).toBe(1);
    });

    it('ms to days', () => {
        expect((86400000).msToD).toBe(1);
    });

    it('ms to months', () => {
        expect((2592000000).msToM).toBe(1);
    });

    it('ms to years', () => {
        expect((31536000000).msToY).toBe(1);
    });
});

describe('Seconds conversions', () => {
    const s = 60;

    it('seconds to ms', () => {
        expect(s.sToMs).toBe(60000);
    });

    it('seconds to minutes', () => {
        expect(s.sToMin).toBe(1);
    });

    it('seconds to hours', () => {
        expect((3600).sToH).toBe(1);
    });

    it('seconds to days', () => {
        expect((86400).sToD).toBe(1);
    });

    it('seconds to months', () => {
        expect((2592000).sToM).toBe(1);
    });

    it('seconds to years', () => {
        expect((31536000).sToY).toBe(1);
    });
});

describe('Minutes conversions', () => {
    const min = 60;

    it('min to seconds', () => {
        expect(min.minToS).toBe(3600);
    });

    it('min to hours', () => {
        expect(min.minToH).toBe(1);
    });

    it('min to days', () => {
        expect((1440).minToD).toBe(1);
    });

    it('min to months', () => {
        expect((43200).minToM).toBe(1);
    });

    it('min to years', () => {
        expect((525600).minToY).toBe(1);
    });
});

describe('Hours conversions', () => {
    const h = 24;

    it('hours to seconds', () => {
        expect(h.hToS).toBe(86400);
    });

    it('hours to minutes', () => {
        expect(h.hToMin).toBe(1440);
    });

    it('hours to days', () => {
        expect(h.hToD).toBe(1);
    });

    it('hours to months', () => {
        expect((720).hToM).toBe(1);
    });

    it('hours to years', () => {
        expect((8760).hToY).toBe(1);
    });
});

describe('Days conversions', () => {
    const d = 30;

    it('days to hours', () => {
        expect(d.dToH).toBe(720);
    });

    it('days to minutes', () => {
        expect(d.dToMin).toBe(43200);
    });

    it('days to seconds', () => {
        expect(d.dToS).toBe(2592000);
    });

    it('days to months', () => {
        expect(d.dToM).toBe(1);
    });

    it('days to years', () => {
        expect((365).dToY).toBe(1);
    });
});

describe('Months conversions', () => {
    const m = 12;

    it('months to days', () => {
        expect(m.mToD).toBe(360);
    });

    it('months to hours', () => {
        expect(m.mToH).toBe(8640);
    });

    it('months to minutes', () => {
        expect(m.mToMin).toBe(518400);
    });

    it('months to seconds', () => {
        expect(m.mToS).toBe(31104000);
    });

    it('months to years', () => {
        expect(m.mToY).toBe(1);
    });
});

describe('Years conversions', () => {
    const y = 1;

    it('years to ms', () => {
        expect(y.yToMs).toBe(31536000000);
    });

    it('years to seconds', () => {
        expect(y.yToS).toBe(31536000);
    });

    it('years to minutes', () => {
        expect(y.yToMin).toBe(525600);
    });

    it('years to hours', () => {
        expect(y.yToH).toBe(8760);
    });

    it('years to days', () => {
        expect(y.yToD).toBe(365);
    });

    it('years to months', () => {
        expect(y.yToM).toBe(12);
    });
});
